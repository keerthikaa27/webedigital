import { ChannelColumns } from "@/components/sections/home/channel-columns";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { OriginStorySection } from "@/components/sections/home/origin-story-section";
import { ProblemSection } from "@/components/sections/home/problem-section";
import { ResultsSection } from "@/components/sections/home/results-section";
import { SolutionSection } from "@/components/sections/home/solution-section";
import { TechnologySection } from "@/components/sections/home/technology-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { FounderCTASection } from "@/components/sections/home/founder-cta-section";
import { SiteFrame } from "@/components/site-shell/site-frame";

export function HomePage() {
  return (
    <SiteFrame>
      <HomeHero />
      <ChannelColumns />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <OriginStorySection />
      <ResultsSection />
      <TestimonialsSection />
      <FounderCTASection />
    </SiteFrame>
  );
}
