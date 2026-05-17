export function ArtPanel({
  title,
  subtitle,
  tall = false,
  variant = "dark"
}: {
  title: string;
  subtitle: string;
  tall?: boolean;
  variant?: "dark" | "light" | "timeline";
}) {
  const panelClass = variant === "light" ? "soft-panel" : variant === "timeline" ? "timeline-panel" : "mesh-panel";

  return (
    <div
      className={`grid-lines relative overflow-hidden rounded-[36px] border border-black/8 ${panelClass} ${
        tall ? "min-h-[480px]" : "min-h-[320px]"
      } p-8`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex gap-3">
          <span className="h-3 w-3 rounded-full bg-brand-green" />
          <span className="h-3 w-3 rounded-full bg-white/50" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
        </div>

        <div className={variant === "light" ? "text-slate-950" : "text-white"}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-75">{subtitle}</p>
          <h3 className="display-font mt-4 max-w-md text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
