import { EXPERIENCES } from "../../data/portfolio";
import { ExperienceCard } from "../cards/ExperienceCard";
import { Reveal } from "../Reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <Reveal>
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
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span className="section-title__text">Professional Experience</span>
          </h2>
          <div className="experience-list">
            {EXPERIENCES.map((job) => (
              <ExperienceCard
                key={`${job.company}-${job.period}`}
                title={job.title}
                company={job.company}
                period={job.period}
                location={job.location}
                points={job.points}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
