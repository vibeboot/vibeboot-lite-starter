import { COMPARISON, PRO } from "@/lib/site";
import { Button } from "./ui";

function Cell({ v }: { v: boolean | string }) {
  if (typeof v === "string") return <span className="font-mono text-white">{v}</span>;
  return v ? <span className="text-neon" aria-label="Included">●</span> : <span className="text-zinc-700" aria-label="Not included">—</span>;
}

export function Comparison() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead className="bg-white/[0.03] font-mono text-xs uppercase tracking-wider text-zinc-400">
          <tr>
            <th className="px-4 py-4 text-left font-medium">Feature</th>
            <th className="px-4 py-4 text-center font-medium">Lite</th>
            <th className="px-4 py-4 text-center font-medium text-neon">Pro</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((r) => (
            <tr key={r.feature} className="border-t border-white/5">
              <td className="px-4 py-3 text-zinc-300">{r.feature}</td>
              <td className="px-4 py-3 text-center"><Cell v={r.lite} /></td>
              <td className="bg-neon/[0.04] px-4 py-3 text-center"><Cell v={r.pro} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center">
        <p className="text-sm text-zinc-400">Skip a week of auth + billing plumbing.</p>
        <Button href={PRO.url}>Get {PRO.name} — {PRO.price}</Button>
      </div>
    </div>
  );
}
