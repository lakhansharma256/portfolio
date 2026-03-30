import { CodeIcon } from "../icons/CodeIcon";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-header">
        <CodeIcon />
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
