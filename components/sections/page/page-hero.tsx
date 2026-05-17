import Link from "next/link";
import { Container } from "@/components/site-shell/container";
import { ArtPanel } from "@/components/ui/art-panel";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
}) {
  return (
    <section className="bg-brand-navy py-16 text-white md:py-24">
      <Container className="grid gap-10 xl:grid-cols-[1fr_0.9fr] xl:items-center">
        <div className="max-w-3xl">
          <Eyebrow inverse>{eyebrow}</Eyebrow>
          <h1 className="display-font mt-4 text-5xl font-bold leading-[0.95] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{description}</p>
          {primaryCta ? (
            <Link
              href={primaryCta.href}
              className="mt-8 inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950"
            >
              {primaryCta.label}
            </Link>
          ) : null}
        </div>
        <ArtPanel title="Replace with final page-specific artwork or photography" subtitle="Page Visual" />
      </Container>
    </section>
  );
}
