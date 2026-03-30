import {
  DEVOPS_TOOLS,
  EDUCATION,
  SKILL_CATEGORIES,
} from "../../data/portfolio";
import { SkillBlock } from "../cards/SkillBlock";
import { CiCdPipelineIcon } from "../icons/CiCdPipelineIcon";
import { CodeIcon } from "../icons/CodeIcon";
import { Reveal } from "../Reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <Reveal delayMs={40}>
        <div className="container">
          <h2 className="section-title">
            <span className="section-title__accent" aria-hidden />
            <svg
              className="icon-large"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <span className="section-title__text">Technical Skills</span>
          </h2>
          <div className="skills-grid">
            {SKILL_CATEGORIES.map((block) => (
              <SkillBlock
                key={block.category}
                category={block.category}
                tags={block.tags}
              />
            ))}
            <div className="project-card skill-card-wide">
              <div className="project-header">
                <CodeIcon />
              </div>
              <h3 className="project-title">DevOps & Tools</h3>
              <div className="project-tags skill-tags--devops">
                {DEVOPS_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="tag skill-devops-chip"
                    title={tool.name}
                  >
                    {tool.src ? (
                      // eslint-disable-next-line @next/next/no-img-element -- external brand SVGs (Simple Icons / Devicon)
                      <img
                        className={[
                          "skill-devops-chip__logo",
                          tool.logoClass ?? "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        src={tool.src}
                        alt=""
                        width={20}
                        height={20}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <CiCdPipelineIcon className="skill-devops-chip__icon" />
                    )}
                    <span className="skill-devops-chip__name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <CodeIcon />
            </div>
            <h3 className="project-title">Education</h3>
            <div className="education-stack">
              {EDUCATION.map((entry, index) => (
                <div
                  key={entry.period}
                  className={
                    index === 0
                      ? "education-content"
                      : "education-content education-content--next"
                  }
                >
                  <div>
                    <p className="education-degree">{entry.degree}</p>
                    <p className="education-university">{entry.university}</p>
                  </div>
                  <div className="education-meta">
                    <p className="experience-period">{entry.period}</p>
                    <p className="education-location">{entry.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
