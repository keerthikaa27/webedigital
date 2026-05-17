import { Eyebrow } from "@/components/ui/eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`display-font mt-3 text-[2rem] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[3.25rem] ${
          inverse ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 max-w-2xl text-[15px] leading-7 ${inverse ? "text-white/72" : "text-slate-600"}`}>{description}</p>
      ) : null}
    </div>
  );
}
