import { SiteFrame } from "@/components/site-shell/site-frame";
import { Container } from "@/components/site-shell/container";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page/page-hero";
import { FeatureCard } from "@/lib/types";

export function SimplePageLayout({
  eyebrow,
  title,
  description,
  highlights
}: {
  eyebrow: string;
  title: string;
  description: string;
  highlights: FeatureCard[];
}) {
  return (
    <SiteFrame>
      <PageHero eyebrow={eyebrow} title={title} description={description} primaryCta={{ label: "Contact Us", href: "/contact-us" }} />
      <section className="bg-white py-16 md:py-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Page Structure"
            title="Separate modules for content, components, and routes."
            description="Each high-level page uses a shared hero and card grid so the architecture stays consistent as the site grows."
          />
          <FeatureGrid items={highlights} />
        </Container>
      </section>
    </SiteFrame>
  );
}
