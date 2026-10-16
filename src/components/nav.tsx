import Link from "next/link";
import { SITE } from "@/lib/site";
import { Button } from "./ui";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-mono font-bold text-white">
          <span className="grid size-7 place-items-center rounded bg-neon text-black">▲</span>
          {SITE.name}
        </Link>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#features" className="hidden hover:text-white sm:inline">Features</a>
          <a href="#compare" className="hidden hover:text-white sm:inline">Lite vs Pro</a>
          <Button href="#start">Get started</Button>
        </div>
      </nav>
    </header>
  );
}
