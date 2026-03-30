import { CONTACT_EMAIL, MAILTO_HREF } from "../../lib/contact";
import { SITE } from "../../lib/site";
import { HeroButtons } from "../HeroButtons";

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-section__glow" aria-hidden />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">Hi, I&apos;m</div>
            <p className="hero-badge">
              <span className="hero-badge__dot" aria-hidden />
              Open to opportunities · 6+ yrs shipping production
            </p>
            <h1 className="hero-title">
              <span className="hero-title__gradient">Lakhan Sharma</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              Full Stack Developer with 6+ years of experience in frontend and
              backend development, specializing in the MERN stack and PHP
              frameworks. Expert in building responsive UIs with React and
              scalable backends using Express.js and Laravel.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <svg
                  className="icon"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{SITE.locationLine}</span>
              </div>
              <div className="contact-item">
                <svg
                  className="icon"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{SITE.phone}</span>
              </div>
              <div className="contact-item">
                <svg
                  className="icon"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>
                  <a href={MAILTO_HREF}>{CONTACT_EMAIL}</a>
                </span>
              </div>
              <div className="contact-item">
                <svg
                  className="icon"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <a
                  href={SITE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.linkedinLabel}
                </a>
              </div>
            </div>
            <HeroButtons />
          </div>
          <div className="hero-image-container">
            <div className="profile-ring" />
            <div className="hero-avatar-fallback">LS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
