import { CodeIcon } from "../icons/CodeIcon";

type SkillBlockProps = {
  category: string;
  tags: string[];
};

export function SkillBlock({ category, tags }: SkillBlockProps) {
  return (
    <div className="project-card">
      <div className="project-header">
        <CodeIcon />
      </div>
      <h3 className="project-title">{category}</h3>
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
