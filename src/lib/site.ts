/** Single source of truth for links and copy. Edit me first. */
export const SITE = {
  name: "Your Product",
  tagline: "Ship the idea tonight.",
  description: "A launch-ready landing page built on Next.js 16 + Tailwind v4.",
};

/** The paid VibeBoot SaaS Starter (auth, billing, DB, dashboard, emails). */
export const PRO = {
  name: "VibeBoot SaaS Starter",
  price: "$49",
  url: "https://vibeboot.dev/templates/saas-starter",
  buyUrl: "https://vibeboot.gumroad.com/l/saas-starter",
};

/** Where this starter lives. Linked from the footer credit; delete it if you like. */
export const LITE_REPO_URL = "https://github.com/vibeboot/vibeboot-lite-starter";

/** Set NEXT_PUBLIC_HIDE_PRO_BANNER=1 to hide the upgrade banner. */
export const SHOW_PRO_BANNER = process.env.NEXT_PUBLIC_HIDE_PRO_BANNER !== "1";

export const COMPARISON: { feature: string; lite: boolean | string; pro: boolean | string }[] = [
  { feature: "Next.js 16 App Router + React 19", lite: true, pro: true },
  { feature: "Tailwind v4 design system", lite: true, pro: true },
  { feature: "Landing page + UI components", lite: true, pro: true },
  { feature: "Cursor rules / AGENTS.md / CLAUDE.md", lite: true, pro: true },
  { feature: "Auth.js v5 (magic link + OAuth)", lite: false, pro: true },
  { feature: "Stripe subscriptions + webhooks", lite: false, pro: true },
  { feature: "Prisma database + schema", lite: false, pro: true },
  { feature: "Protected dashboard + billing portal", lite: false, pro: true },
  { feature: "Magic-link sign-in emails (SMTP)", lite: false, pro: true },
  { feature: "Security headers + tests", lite: false, pro: true },
  { feature: "Price", lite: "Free (MIT)", pro: "$49 one-time" },
];
