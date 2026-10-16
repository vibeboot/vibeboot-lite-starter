<div align="center">

# ▲ VibeBoot Lite Starter

**A free, gorgeous Next.js 16 + Tailwind v4 landing-page starter built for vibe coding in Cursor and Claude Code.**

Clone → install → ship. Two minutes. No env vars, no database, no keys.

![VibeBoot Lite Starter screenshot](docs/screenshot.png)

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
- **Agent-ready**: `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/project.mdc`
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

## Lite vs Pro

Lite gets you a landing page that looks launched. When you need real users and real money, the
**[VibeBoot SaaS Starter](https://vibeboot.dev/templates/saas-starter)** has it all wired up.

| | Lite (this repo) | SaaS Starter |
| --- | :---: | :---: |
| Next.js 16 + React 19 + Tailwind v4 | ✅ | ✅ |
| Landing page + UI components | ✅ | ✅ |
| Cursor rules / AGENTS.md / CLAUDE.md | ✅ | ✅ |
| Auth.js v5 (magic link + OAuth) | — | ✅ |
| Stripe subscriptions + webhooks | — | ✅ |
| Prisma database + schema | — | ✅ |
| Protected dashboard + billing portal | — | ✅ |
| Transactional emails | — | ✅ |
| Security headers + tests | — | ✅ |
| Price | **Free (MIT)** | **$49 one-time** |

👉 **[Get the SaaS Starter — $49](https://vibeboot.gumroad.com/l/saas-starter)**

## Removing the upgrade banner

Set `NEXT_PUBLIC_HIDE_PRO_BANNER=1`, or delete `<ProBanner />` from `src/app/layout.tsx`. It's your app.

## Deploy

Works on Vercel, Netlify or Cloudflare out of the box: `npm run build`.

## License

[MIT](LICENSE) © VibeBoot
