import { MetricCard } from "@/lib/types";

export function StatGrid({ items, dark = false }: { items: MetricCard[]; dark?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-[28px] border p-6 ${
            dark ? "border-white/12 bg-white/5 text-white" : "border-black/8 bg-white text-slate-950"
          }`}
        >
          <p className="display-font text-[2.55rem] font-semibold tracking-[-0.05em]">{item.value}</p>
          <p className={`mt-3 text-[12px] uppercase tracking-[0.14em] ${dark ? "text-white/65" : "text-slate-500"}`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
