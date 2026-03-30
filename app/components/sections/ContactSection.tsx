import { MAILTO_HREF } from "../../lib/contact";
import { SITE } from "../../lib/site";
import { Reveal } from "../Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <Reveal delayMs={80}>
        <div className="container">
          <h2 className="contact-title">Let&apos;s Build Something Together</h2>
          <p className="contact-description">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="social-links">
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href={MAILTO_HREF} className="social-link" aria-label="Email">
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
          <a href={MAILTO_HREF} className="btn btn-primary btn-primary--lg">
            Get In Touch
          </a>
        </div>
      </Reveal>
    </section>
  );
}
