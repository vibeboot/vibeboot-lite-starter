<div align="center">

# ▲ VibeBoot Lite Starter

**A free Next.js 16 + Tailwind v4 landing-page starter, set up for coding with Cursor and Claude Code.**

**[Live preview → lite.vibeboot.dev](https://lite.vibeboot.dev)** · MIT licensed

Clone, install, run. No env vars, no database, no keys.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvibeboot%2Fvibeboot-lite-starter&project-name=my-vibeboot-app&repository-name=my-vibeboot-app) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fvibeboot%2Fvibeboot-lite-starter)

[![VibeBoot Lite Starter screenshot](docs/screenshot.svg)](https://lite.vibeboot.dev)

</div>

## Quickstart

```bash
git clone https://github.com/vibeboot/vibeboot-lite-starter.git my-app
cd my-app
npm install
npm run dev     # http://localhost:3000
```

Then open it in Cursor or Claude Code and say: *"Rewrite the hero for my product."*
`AGENTS.md`, `CLAUDE.md` and `.cursor/rules/` already teach the agent the conventions.

## What's inside

- **Next.js 16** App Router, React 19, TypeScript strict
- **Tailwind v4** with brand tokens in a single `@theme` block (`src/app/globals.css`)
- **Landing page**: hero, animated terminal, feature grid, comparison table
- **Components**: `Button`, `Badge`, `Section`, `Nav`, `Footer`, `Terminal`, `Comparison`
- **Agent-ready**: `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/project.mdc` (AGENTS.md also carries the block `next dev` adds, which points agents at the Next.js docs bundled in `node_modules`)
- **One config file**: `src/lib/site.ts` holds all copy and links

```
src/
├─ app/         layout.tsx · page.tsx · globals.css
├─ components/  ui.tsx · nav · footer · terminal · comparison · pro-banner
└─ lib/         site.ts
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check` | All of the above, in one go |

## Upgrade when you need more

Lite is a landing page on purpose: no auth, no database, no payments. If your project needs those, the two paid
VibeBoot starters have them wired up and tested. Same stack and the same agent files, so nothing you set up here is wasted.

| | Lite (this repo) | [SaaS Starter](https://vibeboot.dev/templates/saas-starter?ref=lite-readme) | [AI Chatbot Starter](https://vibeboot.dev/templates/ai-chatbot-starter?ref=lite-readme) |
| --- | :---: | :---: | :---: |
| Price | **Free (MIT)** | **$49 one-time** | **$59 one-time** |
| Next.js 16.4.5, React 19, TypeScript, Tailwind v4 | ✅ | ✅ | ✅ |
| Landing page | ✅ | ✅ | ✅ |
| `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/` | ✅ | ✅ | ✅ |
| Claude Code guardrails + slash commands (`.claude/`) | — | ✅ | ✅ |
| Auth.js v5: GitHub sign-in + optional email magic link | — | ✅ | ✅ |
| Prisma database (SQLite to start, switch to Postgres) | — | ✅ | ✅ |
| Stripe subscriptions: Checkout, Billing Portal, signed webhook | — | ✅ | ✅ |
| Rate limiting + security headers (CSP, HSTS) | — | ✅ | ✅ |
| Protected app area | — | Dashboard | Chat app |
| Streaming AI chat with saved history and personas | — | — | ✅ |
| Free / Pro daily message limits (20 / 500 by default) | — | — | ✅ |
| Any OpenAI-compatible model, plus a mock provider (runs with zero API keys) | — | — | ✅ |
| Vitest tests | — | 19 | 37 |
| License | MIT | Single-buyer commercial | Single-buyer commercial |
| Live demo | [lite.vibeboot.dev](https://lite.vibeboot.dev) | [Acme SaaS demo](https://vibeboot-demo.vibeboot.workers.dev) | [Chatbot demo](https://vibeboot-chatbot-demo.vibeboot.workers.dev) |

Both paid starters are one-time payments on Gumroad, with a **14-day money-back guarantee** and **lifetime updates**:
every new version goes to your Gumroad library at no extra cost. No subscription.

👉 **[SaaS Starter, $49](https://vibeboot.dev/templates/saas-starter?ref=lite-readme)** · **[AI Chatbot Starter, $59](https://vibeboot.dev/templates/ai-chatbot-starter?ref=lite-readme)**

Only need a landing page? Stay on Lite. It's MIT and it's yours.

## Removing the upgrade banner

Set `NEXT_PUBLIC_HIDE_PRO_BANNER=1`, or delete `<ProBanner />` from `src/app/layout.tsx`. It's your app.

## Deploy

- **One click**: use the Deploy buttons at the top. Vercel or Netlify copies this repo to your GitHub account and deploys it. No env vars needed (optional: `NEXT_PUBLIC_HIDE_PRO_BANNER=1`).
- **Vercel or Netlify**: import the repo with the default settings (`npm run build`).
- **Any static host** (Cloudflare Pages, GitHub Pages, S3): run `STATIC_EXPORT=1 npm run build` and upload the `out/` folder. The live preview is built and hosted this way, on Cloudflare Pages.

## License

[MIT](LICENSE) © VibeBoot
