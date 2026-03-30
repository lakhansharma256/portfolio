type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export function ExperienceCard({
  title,
  company,
  period,
  location,
  points,
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3 className="experience-title">{title}</h3>
          <p className="experience-company">{company}</p>
        </div>
        <div className="experience-meta">
          <p className="experience-period">{period}</p>
          <p className="experience-location">{location}</p>
        </div>
      </div>
      <ul className="experience-points">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
