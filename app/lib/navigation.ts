/** Single source for primary nav / in-page section anchors. */
export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const SECTION_IDS = NAV_LINKS.map((l) =>
  l.href.replace("#", "")
) as readonly string[];
