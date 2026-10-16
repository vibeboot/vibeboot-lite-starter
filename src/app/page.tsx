import { Badge, Button, Section } from "@/components/ui";
import { Terminal } from "@/components/terminal";
import { Comparison } from "@/components/comparison";
import { SITE } from "@/lib/site";

const features = [
  { k: "01", t: "Agent-ready", d: "AGENTS.md, CLAUDE.md and Cursor rules teach your AI the conventions, so edits stay clean." },
  { k: "02", t: "Zero config", d: "No env vars, no database, no keys. Clone, install, run. Two minutes, tops." },
  { k: "03", t: "Tailwind v4 tokens", d: "One @theme block. Swap the neon for your brand color and the whole site follows." },
  { k: "04", t: "Composable UI", d: "Button, Badge, Section, Terminal, Comparison. Small, typed, easy to remix." },
  { k: "05", t: "Next.js 16", d: "App Router, React 19, server components by default, Turbopack dev." },
  { k: "06", t: "MIT licensed", d: "Use it for anything. Ship it, sell it, fork it." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Badge>v1.0 · free & open source</Badge>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tighter text-white sm:text-7xl">
              Ship the idea <span className="glow text-neon">tonight.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">{SITE.description} Made for vibe coding in Cursor and Claude Code.</p>
            <div id="start" className="mt-8 flex flex-wrap gap-3">
              <Button href="#features">Explore the kit</Button>
              <Button href="#compare" variant="ghost">Lite vs Pro</Button>
            </div>
            <p className="mt-6 font-mono text-xs text-zinc-600">next 16 · react 19 · tailwind 4 · typescript</p>
          </div>
          <Terminal />
        </div>
      </section>

      <Section id="features" eyebrow="what's inside" title="Everything you need to look launched.">
        <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.k} className="group bg-ink p-7 transition hover:bg-neon/[0.04]">
              <p className="font-mono text-xs text-neon">{f.k}</p>
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-neon">{f.t}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="compare" eyebrow="lite vs pro" title="Outgrew the landing page? Go Pro.">
        <Comparison />
      </Section>
    </>
  );
}
