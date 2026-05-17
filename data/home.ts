import { FeatureCard, HeroContent, MetricCard, QuoteCard } from "@/lib/types";

export const homeHero: HeroContent = {
  eyebrow: "Integrated Marketing Team Built for Growth",
  title: "Digital Marketing, Amplified",
  description:
    "This scaffold mirrors the information density, section rhythm, and visual hierarchy of a modern marketing agency homepage while keeping the copy and art original.",
  primaryCta: {
    label: "Get A Proposal",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "Explore Services",
    href: "/services"
  }
};

export const channelCards: FeatureCard[] = [
  {
    title: "One Team for Your Complete Digital Growth",
    description:
      "Managing SEO, ads, content, social media, and website changes through different people often creates confusion. WebeDigital brings these channels together so your brand has one clear strategy, one execution roadmap, and one team focused on growth.",
    accent: "Full-funnel"
  },
  {
    title: "Marketing Built Around Performance",
    description:
      "We do not create campaigns just to keep your pages active or reports full. Every activity is planned around a clear purpose, whether that is better rankings, more traffic, stronger leads, improved conversions, or higher return from your marketing spend.",
    accent: "Proprietary AI"
  },
  {
    title: "A Partner That Works Like Your Growth Team",
    description:
      "We work closely with founders, startups, service businesses, and ecommerce brands that need practical execution, honest reporting, and consistent improvement. Our focus is simple: understand where growth is blocked, fix the right things, and keep moving the numbers forward.",
    accent: "Embedded team"
  }
];

export const problemPoints: FeatureCard[] = [
  {
    title: "Disconnected Strategies",
    description:
      "Is your marketing feeling fragmented? When strategies don't work together, customers are left navigating a confusing journey. We unify your channels into a cohesive strategy designed to drive meaningful business results."
  },
  {
    title: "Technology Falling Behind",
    description:
      "In today's fast-paced environment, certifications alone aren't enough. You need advanced tools, actionable data, and forward-thinking strategies to stay ahead. We bridge that gap with proprietary systems and expert execution."
  },
  {
    title: "Struggling to Build Trust",
    description:
      "With so many empty promises out there, earning trust is harder than ever. We focus on transparency, accountability, and measurable outcomes to build long-term success."
  }
];

export const solutionMetrics: MetricCard[] = [
  { value: "20+", label: "Years of digital marketing experience" },
  { value: "400+", label: "Specialists represented in the team story" },
  { value: "6", label: "Primary service pillars in the navigation" },
  { value: "1", label: "Unified operating model across all channels" }
];

export const resultsMetrics: MetricCard[] = [
  { value: "$22M", label: "Revenue growth example card" },
  { value: "86%", label: "Organic growth proof point" },
  { value: "126%", label: "ROI uplift headline metric" }
];

export const testimonialCards: QuoteCard[] = [
  {
    quote:
      "The structure here is intentionally ready for long-form testimonials, brand trust copy, and proof-driven social validation.",
    author: "Sample Executive",
    role: "Technology Council"
  },
  {
    quote:
      "Every section is separated into its own file so content teams can swap in final copy and media without touching layout logic.",
    author: "Sample Marketing Lead",
    role: "Enterprise Brand"
  },
  {
    quote:
      "The page architecture is set up to support a large agency site, not just a single landing page.",
    author: "Sample Growth Director",
    role: "National Retailer"
  }
];
