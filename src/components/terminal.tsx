const lines = [
  { p: "$", t: "git clone https://github.com/vibeboot/vibeboot-lite-starter.git my-app" },
  { p: "$", t: "cd my-app && npm i && npm run dev" },
  { p: "✓", t: "Ready on http://localhost:3000" },
  { p: "›", t: 'cursor: "make the hero about my AI todo app"' },
];

export function Terminal() {
  return (
    <div className="box-glow overflow-hidden rounded-xl bg-black/80 text-left">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-3 rounded-full bg-white/15" />
        <span className="size-3 rounded-full bg-white/15" />
        <span className="size-3 rounded-full bg-neon" />
        <span className="ml-3 font-mono text-xs text-zinc-500">~/my-app</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
        {lines.map((l) => (
          <div key={l.t}>
            <span className="text-neon">{l.p}</span> <span className="text-zinc-200">{l.t}</span>
          </div>
        ))}
        <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-neon" />
      </pre>
    </div>
  );
}
