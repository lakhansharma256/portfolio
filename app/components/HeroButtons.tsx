"use client";

export function HeroButtons() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hero-buttons">
      <button type="button" className="btn btn-primary" onClick={scrollToProjects}>
        View My Work
      </button>
      <a
        href="/LakhanSharmaResume.pdf"
        download="LakhanSharmaResume.pdf"
        className="btn btn-secondary"
      >
        Download CV
      </a>
    </div>
  );
}
