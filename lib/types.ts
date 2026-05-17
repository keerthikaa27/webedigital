export type NavGroup = {
  label: string;
  href?: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export type FeatureCard = {
  title: string;
  description: string;
  accent?: string;
};

export type MetricCard = {
  value: string;
  label: string;
};

export type QuoteCard = {
  quote: string;
  author: string;
  role: string;
};

export type ServicePageContent = {
  title: string;
  slug: string;
  intro: string;
  heroLabel: string;
  highlights: string[];
  process: Array<{
    title: string;
    body: string;
  }>;
};
