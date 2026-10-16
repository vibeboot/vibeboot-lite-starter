import { PRO, SHOW_PRO_BANNER } from "@/lib/site";

/** Tasteful upgrade banner. Remove this component or set NEXT_PUBLIC_HIDE_PRO_BANNER=1. */
export function ProBanner() {
  if (!SHOW_PRO_BANNER) return null;
  return (
    <div className="border-b border-neon/20 bg-neon/[0.06] px-5 py-2 text-center font-mono text-xs text-zinc-300">
      Need auth, Stripe & a database?{" "}
      <a href={PRO.url} className="font-semibold text-neon hover:underline">
        {PRO.name} — {PRO.price} →
      </a>
    </div>
  );
}
