import Link from "next/link";

type BtnProps = { href: string; children: React.ReactNode; variant?: "solid" | "ghost"; external?: boolean };

export function Button({ href, children, variant = "solid", external }: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-mono text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon";
  const styles =
    variant === "solid"
      ? "bg-neon text-black hover:bg-white hover:shadow-[0_0_30px_rgba(57,255,20,.6)]"
      : "border border-white/15 text-white hover:border-neon hover:text-neon";
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} className={`${base} ${styles}`} {...ext}>
      {children}
    </Link>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/5 px-3 py-1 font-mono text-xs text-neon">
      <span className="size-1.5 rounded-full bg-neon shadow-[0_0_8px_#39ff14]" />
      {children}
    </span>
  );
}

export function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-neon">{"// "}{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl">{title}</h2>
      <div className="mt-12">{children}</div>
    </section>
  );
}
