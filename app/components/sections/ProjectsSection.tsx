import { PROJECTS } from "../../data/portfolio";
import { ProjectCard } from "../cards/ProjectCard";
import { Reveal } from "../Reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <Reveal delayMs={60}>
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
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span className="section-title__text">Featured Projects</span>
          </h2>
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
