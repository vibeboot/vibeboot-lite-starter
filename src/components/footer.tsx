import { LITE_REPO_URL, PRO, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 font-mono text-xs text-zinc-500 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {SITE.name}. MIT licensed.</p>
        <p>
          Built with the free{" "}
          <a href={LITE_REPO_URL} className="text-zinc-300 hover:text-neon hover:underline">VibeBoot Lite Starter</a> ·{" "}
          <a href={PRO.url} className="whitespace-nowrap text-neon hover:underline">Go Pro</a>
        </p>
      </div>
    </footer>
  );
}
