/** Set NEXT_PUBLIC_CONTACT_EMAIL in .env.local (e.g. you@domain.com) */
export const CONTACT_EMAIL =
  typeof process.env.NEXT_PUBLIC_CONTACT_EMAIL === "string" &&
  process.env.NEXT_PUBLIC_CONTACT_EMAIL.length > 0
    ? process.env.NEXT_PUBLIC_CONTACT_EMAIL
    : "lakhansharma256@gmail.com";

export const MAILTO_HREF = `mailto:${CONTACT_EMAIL}`;
