import Link from "next/link";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full border ${
          light ? "border-white/20 bg-white/10 text-white" : "border-black/10 bg-white text-brand-navy"
        }`}
      >
        <span className="display-font text-xl font-semibold tracking-[-0.05em]">I</span>
      </div>
      <div>
        <p className={`display-font text-[1.1rem] font-semibold tracking-[-0.03em] ${light ? "text-white" : "text-slate-950"}`}>
          WebeDigital
        </p>
        
      </div>
    </Link>
  );
}
