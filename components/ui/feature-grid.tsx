import { FeatureCard } from "@/lib/types";

export function FeatureGrid({ items, columns = 3 }: { items: FeatureCard[]; columns?: 2 | 3 }) {
  return (
    <div className={`grid gap-5 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
      {items.map((item) => (
        <article key={item.title} className="rounded-[28px] border border-black/8 bg-white p-7 shadow-soft">
          {item.accent ? (
            <span className="inline-flex rounded-full bg-brand-green px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950">
              {item.accent}
            </span>
          ) : null}
          <h3 className="display-font mt-4 text-[1.55rem] font-semibold leading-[1.05] tracking-[-0.04em]">{item.title}</h3>
          <p className="mt-4 text-[14px] leading-7 text-slate-600">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
