import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, imageUrl, index }: ProjectCardProps) => {
  return (
    <article
      className="group relative bg-card rounded-2xl overflow-hidden border border-border transition-all duration-500 hover:border-primary/50 hover:shadow-lg"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="text-muted-foreground font-body font-light mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
