export function Eyebrow({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${inverse ? "text-brand-green" : "text-slate-500"}`}>
      {children}
    </p>
  );
}
