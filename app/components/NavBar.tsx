"use client";

import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS, SECTION_IDS } from "../lib/navigation";

/** Document Y of section top (works even when offsetParent ≠ document) */
function sectionDocumentTop(el: HTMLElement): number {
  return el.getBoundingClientRect().top + window.scrollY;
}

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const close = useCallback(() => setOpen(false), []);

  const updateActiveFromScroll = useCallback(() => {
    const headerOffset = 110;
    const scrollAnchor = window.scrollY + headerOffset;
    const docBottom = window.scrollY + window.innerHeight;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight - 2;

    if (maxScroll > 0 && window.scrollY >= maxScroll - 4) {
      setActive("contact");
      return;
    }

    let current = SECTION_IDS[0];
    for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
      const id = SECTION_IDS[i];
      const el = document.getElementById(id);
      if (!el) continue;
      const top = sectionDocumentTop(el);
      if (scrollAnchor >= top - 1) {
        current = id;
        break;
      }
    }

    const contactEl = document.getElementById("contact");
    if (contactEl && docBottom >= contactEl.getBoundingClientRect().bottom + window.scrollY - 8) {
      current = "contact";
    }

    setActive(current);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- scroll spy initial sync
    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);
    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [updateActiveFromScroll]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && SECTION_IDS.includes(hash as (typeof SECTION_IDS)[number])) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hash deep-link on load
      setActive(hash);
    }
  }, []);

  const onNavClick = useCallback(
    (id: string) => {
      close();
      setActive(id);
      requestAnimationFrame(() => {
        requestAnimationFrame(updateActiveFromScroll);
      });
    },
    [close, updateActiveFromScroll]
  );

  return (
    <nav id="navbar" className="nav-shell">
      <div className="nav-container">
        <a
          href="#home"
          className="logo"
          onClick={() => onNavClick("home")}
        >
          &lt;LS /&gt;
        </a>
        <button
          type="button"
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
        <div
          className={`nav-links ${open ? "nav-links--open" : ""}`}
          id="nav-links"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace("#", "");
            return (
              <a
                key={href}
                href={href}
                className={`nav-link ${active === id ? "nav-link--active" : ""}`}
                onClick={() => onNavClick(id)}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
