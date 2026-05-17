import { FeatureCard, ServicePageContent } from "@/lib/types";



export const awardItems: FeatureCard[] = [
  {
    title: "Industry Recognition",
    description: "Reserved for Clutch, partner badges, certifications, and notable recognitions."
  },
  {
    title: "Performance Proof",
    description: "Use for win-rate statistics, client retention, or measurable excellence awards."
  },
  {
    title: "Team Expertise",
    description: "A supporting card for certifications, training, and partner-level technical credentials."
  }
];

export const blogHighlights: FeatureCard[] = [
  {
    title: "Latest Articles",
    description: "A grid-ready zone for editorial cards, categories, authors, and publish dates."
  },
  {
    title: "Featured Topics",
    description: "Supports marketing trends, AI search commentary, and channel-specific thought leadership."
  },
  {
    title: "Searchable Library",
    description: "Useful for taxonomy filters, search, and archive navigation."
  }
];

export const resourceHighlights: FeatureCard[] = [
  {
    title: "Case Studies",
    description: "Proof-oriented cards built for before-and-after metrics, industries, and solution summaries."
  },
  {
    title: "Whitepapers",
    description: "A content marketing library layout for gated or ungated downloadable resources."
  },
  {
    title: "Lead Capture",
    description: "A reusable contact form or CTA strip can plug into the bottom of every resource page."
  }
];

export const contactHighlights: FeatureCard[] = [
  {
    title: "Direct Contact",
    description: "Includes phone, email, location list, and a primary contact path."
  },
  {
    title: "Sales Intake",
    description: "This area is intended for a proposal form with goals, budget, and timeline fields."
  },
  {
    title: "Regional Offices",
    description: "Supports a multi-location agency footer and contact hub."
  }
];

export const servicePages: ServicePageContent[] = [
  {
    slug: "seo-geo",
    title: "SEO & GEO",
    heroLabel: "Search Visibility Services",
    intro:
      "A dedicated service page template for organic search, AI search optimization, local visibility, and enterprise SEO positioning.",
    highlights: ["Technical SEO", "AI search readiness", "Local and national strategies"],
    process: [
      {
        title: "Audit",
        body: "Discovery, crawl analysis, content mapping, and search opportunity sizing."
      },
      {
        title: "Roadmap",
        body: "Priority planning for site architecture, content, authority, and conversion pathways."
      },
      {
        title: "Execution",
        body: "Cross-functional delivery for technical fixes, content growth, reporting, and iteration."
      }
    ]
  },
  {
    slug: "paid-media",
    title: "Paid Media",
    heroLabel: "Performance Advertising Services",
    intro:
      "A service page structure for PPC, SEM, paid social, display, programmatic buying, and budget stewardship.",
    highlights: ["Campaign architecture", "Cross-platform reporting", "ROI-focused optimization"],
    process: [
      {
        title: "Plan",
        body: "Budget modeling, audience segmentation, and platform selection aligned to business goals."
      },
      {
        title: "Launch",
        body: "Ad builds, creative system alignment, tracking, and conversion-event validation."
      },
      {
        title: "Optimize",
        body: "Bid tuning, landing-page feedback loops, and continuous efficiency improvements."
      }
    ]
  },
  {
    slug: "web-development",
    title: "Web Development",
    heroLabel: "Website Design and Development",
    intro:
      "A page for design systems, conversion-focused buildouts, ecommerce integration, and UX refinement.",
    highlights: ["Design systems", "CMS implementation", "Conversion optimization"],
    process: [
      {
        title: "Structure",
        body: "Sitemaps, page templates, navigation systems, and content modeling."
      },
      {
        title: "Design",
        body: "Wireframes, component language, and desktop-mobile responsive refinement."
      },
      {
        title: "Build",
        body: "Frontend implementation, CMS wiring, QA, accessibility checks, and launch support."
      }
    ]
  },
  {
    slug: "content-pr",
    title: "Content & PR",
    heroLabel: "Content Growth and Authority",
    intro:
      "Built for editorial strategy, digital PR, guest posting, content audits, and authority development.",
    highlights: ["Editorial planning", "Authority campaigns", "Digital PR execution"],
    process: [
      {
        title: "Research",
        body: "Topic planning, audience analysis, and SERP or media opportunity discovery."
      },
      {
        title: "Create",
        body: "Long-form assets, campaign ideas, newsroom materials, and amplification hooks."
      },
      {
        title: "Distribute",
        body: "Outreach, earned placements, reporting, and authority compounding."
      }
    ]
  },
  {
    slug: "branding-creative",
    title: "Branding & Creative",
    heroLabel: "Brand Systems and Campaign Creative",
    intro:
      "A structured destination for brand strategy, visual systems, email design, video, and campaign creative services.",
    highlights: ["Brand systems", "Campaign assets", "Creative production"],
    process: [
      {
        title: "Define",
        body: "Positioning, messaging, voice, and visual direction alignment."
      },
      {
        title: "Design",
        body: "Identity systems, campaign visuals, templates, and production assets."
      },
      {
        title: "Deploy",
        body: "Creative rollout across channels with governance and performance feedback."
      }
    ]
  },
  {
    slug: "amazon",
    title: "Amazon",
    heroLabel: "Marketplace Growth Services",
    intro:
      "This service template supports marketplace strategy, DSP, Seller Central, and Vendor Central growth work.",
    highlights: ["Marketplace operations", "Listing optimization", "Retail media support"],
    process: [
      {
        title: "Assess",
        body: "Marketplace health, catalog quality, retail readiness, and operational gaps."
      },
      {
        title: "Activate",
        body: "Listing improvements, media setup, merchandising, and channel planning."
      },
      {
        title: "Scale",
        body: "Performance tracking, inventory-aware optimization, and revenue expansion."
      }
    ]
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
