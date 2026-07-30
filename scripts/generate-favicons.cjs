/**
 * generate-favicons.js
 * Converts public/favicon.svg → all required favicon formats.
 * Run once: node scripts/generate-favicons.js
 */

const sharp = require("sharp");
const fs    = require("fs");
const path  = require("path");

const publicDir = path.join(__dirname, "..", "public");
const svgPath   = path.join(publicDir, "favicon.svg");

/* ── helper: build a valid ICO buffer from an array of PNG buffers ── */
function buildIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize    = 6;
  const dirEntrySize  = 16;
  const dirSize       = numImages * dirEntrySize;

  let dataOffset = headerSize + dirSize;
  const directories = [];

  for (const buf of pngBuffers) {
    // PNG dimensions live at bytes 16-23 of the PNG header
    const w = buf.readUInt32BE(16);
    const h = buf.readUInt32BE(20);

    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(w >= 256 ? 0 : w, 0);   // width  (0 = 256)
    entry.writeUInt8(h >= 256 ? 0 : h, 1);   // height
    entry.writeUInt8(0, 2);                   // colour count
    entry.writeUInt8(0, 3);                   // reserved
    entry.writeUInt16LE(1,  4);               // colour planes
    entry.writeUInt16LE(32, 6);               // bits per pixel
    entry.writeUInt32LE(buf.length,   8);     // image data size
    entry.writeUInt32LE(dataOffset,  12);     // image data offset

    directories.push(entry);
    dataOffset += buf.length;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0,          0);  // reserved
  header.writeUInt16LE(1,          2);  // type = ICO
  header.writeUInt16LE(numImages,  4);  // image count

  return Buffer.concat([header, ...directories, ...pngBuffers]);
}

async function main() {
  const svgBuf = fs.readFileSync(svgPath);

  /* ── PNG variants ── */
  const variants = [
    { size: 16,  name: "favicon-16x16.png"   },
    { size: 32,  name: "favicon-32x32.png"   },
    { size: 180, name: "apple-touch-icon.png" },
    { size: 512, name: "favicon-512x512.png"  },
  ];

  for (const { size, name } of variants) {
    await sharp(svgBuf)
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(path.join(publicDir, name));
    console.log(`✓  ${name}`);
  }

  /* ── favicon.ico (16 + 32 + 48 embedded PNG images) ── */
  const [ico16, ico32, ico48] = await Promise.all([
    sharp(svgBuf).resize(16, 16).png().toBuffer(),
    sharp(svgBuf).resize(32, 32).png().toBuffer(),
    sharp(svgBuf).resize(48, 48).png().toBuffer(),
  ]);

  const icoBuf = buildIco([ico16, ico32, ico48]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);
  console.log("✓  favicon.ico  (16 + 32 + 48 px embedded)");

  console.log("\nAll favicon assets generated successfully 🎉");
}

main().catch((err) => {
  console.error("Generation failed:", err.message);
  process.exit(1);
});
