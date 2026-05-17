export type CaseStudyContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "list"; items: string[] }
  | { type: "feature-list"; items: { title: string; text: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "stat-highlight"; stats: { value: string; label: string; color?: string }[] }
  | { type: "link-paragraph"; before: string; linkText: string; href: string; after: string };

export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  service: string;
  headline: string;
  excerpt: string;
  image: string;
  stats: { value: string; label: string }[];
  color: string;
  primaryGoal: string;
  coreFocus: string;
  timeline: string;
  teamSize?: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  content: CaseStudyContentBlock[];
  prevStudy: { id: string; client: string; headline: string } | null;
  nextStudy: { id: string; client: string; headline: string } | null;
  relatedStudies: { id: string; client: string; headline: string; service: string; image: string; color: string }[];
};

export const SERVICE_COLORS: Record<string, string> = {
  SEO: "#00c9b1",
  PPC: "#f97316",
  Content: "#6366f1",
  "Social Media": "#0ea5e9",
  "Web Design": "#10b981",
};

export const CASE_STUDIES: CaseStudy[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // CASE STUDY 1 — NovaBuild
  // ──────────────────────────────────────────────────────────────────────────
  
    {
      id: "1-ranking-for-fashion-startup-accelerator",
      client: "Dariaan",
      industry: "Fashion, Retail, Startup Acceleration",
      service: "SEO",
      headline:
        "#1 Rankings for Fashion Startup Accelerator Keywords in 90 Days",
      excerpt:
        "Dariaan had a strong positioning in the fashion startup space, but its search visibility did not reflect its authority. WebeDigital helped build clearer keyword ownership, stronger category relevance, and a more connected SEO structure that led to #1 rankings for core category searches.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      stats: [
        { value: "#1", label: "Core Category Rankings" },
        { value: "90 Days", label: "SEO Growth Timeline" },
        { value: "5+", label: "High-Intent Keywords Strengthened" },
      ],
      color: "#00c9b1",
      primaryGoal:
        "Improve search visibility around fashion startup accelerator keywords",
      coreFocus:
        "SEO strategy, keyword mapping, on-page optimization, content structure, internal linking, and category relevance",
      timeline: "90 days",
      teamSize: "3 specialists",
      seoTitle:
        "Dariaan Case Study: #1 Rankings for Fashion Startup Accelerator Keywords | WebeDigital",
      seoDescription:
        "Learn how WebeDigital helped Dariaan build stronger search visibility, category relevance, and #1 rankings for fashion startup accelerator keywords through structured SEO strategy and content alignment.",
      keywords: [
        "fashion startup accelerator SEO",
        "startup accelerator case study",
        "fashion business SEO",
        "SEO for fashion startups",
        "category keyword rankings",
        "WebeDigital SEO case study",
      ],
    content: [
        {
          type: "heading",
          text: "Case Study Summary",
        },
        {
          type: "paragraph",
          text: "Dariaan is a fashion-focused startup accelerator that helps fashion and retail founders build, structure, and scale their brands with clearer strategy, operational direction, and growth support.",
        },
        {
          type: "paragraph",
          text: "When we worked on Dariaan’s search visibility, the opportunity was not just to increase traffic. The real opportunity was to help the brand become easier to discover for founders who were already searching for fashion startup support, fashion business acceleration, and structured guidance for building a fashion brand.",
        },
        {
          type: "paragraph",
          text: "Within 90 days, Dariaan achieved #1 rankings for core keywords connected to the fashion startup accelerator category. More importantly, the brand started becoming easier to recognize as a relevant answer in a niche where clarity, positioning, and search authority matter a lot.",
        },
        {
          type: "paragraph",
          text: "This case study breaks down how WebeDigital approached the project, what we changed, and why the result came from structured SEO execution rather than random content publishing.",
        },
        
        {
          type: "heading",
          text: "The Starting Point: A Strong Brand With an Underclaimed Search Opportunity",
        },
        {
          type: "paragraph",
          text: "Dariaan had a clear business direction. It was not trying to be a generic business consultant or a broad startup advisory brand. Its positioning was specific: helping fashion and retail founders scale with better structure, strategy, and execution support.",
        },
        {
          type: "paragraph",
          text: "That specificity was the biggest advantage.",
        },
        {
          type: "paragraph",
          text: "But the search presence did not yet reflect the full strength of the brand. The category around fashion startup accelerator keywords was still not fully claimed by one dominant player, which created a meaningful opportunity.",
        },
        {
          type: "paragraph",
          text: "For many businesses, this is exactly where growth gets stuck. They may have a strong offer, strong experience, and a clear audience, but their website does not yet communicate that authority strongly enough to search engines or potential customers.",
        },
        {
          type: "paragraph",
          text: "That was the gap we worked on.",
        },
        {
          type: "paragraph",
          text: "The goal was not to chase every fashion or startup-related keyword. The goal was to make Dariaan highly relevant for the exact searches that mattered most to its ideal audience.",
        },
        {
          type: "heading",
          text: "The Real Challenge Was Not Traffic. It Was Search Clarity.",
        },
        {
          type: "paragraph",
          text: "Most SEO projects fail because teams start with the wrong question.",
        },
        {
          type: "paragraph",
          text: "They ask, “How do we publish more blogs?”",
        },
        {
          type: "paragraph",
          text: "But the better question is usually, “What should this website become known for?”",
        },
        {
          type: "paragraph",
          text: "For Dariaan, the challenge was not simply a lack of content. The deeper issue was that the website needed stronger ownership around the category it wanted to rank for.",
        },
        {
          type: "paragraph",
          text: "If a founder searches for a fashion startup accelerator, Google needs to understand which page deserves to answer that query. The website also needs to support that answer through relevant content, internal links, clear page structure, and language that matches what real users are searching.",
        },
        {
          type: "paragraph",
          text: "Without that clarity, even a good brand can stay hidden.",
        },
        {
          type: "paragraph",
          text: "So before creating more content or making surface-level changes, we focused on the foundation:",
        },
        {
          type: "list",
          items: [
            "Positioning",
            "Keyword ownership",
            "Page relevance",
            "Supporting content structure",
            "Internal linking",
            "Founder-focused trust signals",
          ],
        },
        {
          type: "paragraph",
          text: "This mattered because the target reader was not a casual visitor. It was a founder evaluating whether Dariaan could genuinely help them structure, launch, or scale a fashion business.",
        },
        {
          type: "heading",
          text: "What WebeDigital Found During the SEO Review",
        },
        {
          type: "paragraph",
          text: "When we reviewed the opportunity, a few important things became clear.",
        },
        {
          type: "paragraph",
          text: "Dariaan had the right niche, the right target audience, and the right business relevance. But the website needed a more deliberate SEO structure to support that positioning.",
        },
        {
          type: "paragraph",
          text: "The main gaps were:",
        },
        {
          type: "list",
          items: [
            "The website needed sharper alignment between brand language and search language.",
            "The right pages needed to clearly own the right keyword intent.",
            "Supporting content needed to strengthen the main category instead of sitting as separate pieces.",
            "Internal linking needed to help both users and search engines understand the relationship between the main service pages and supporting content.",
            "The website had to communicate trust quickly because the target reader was a founder making a serious business decision.",
          ],
        },
        {
          type: "paragraph",
          text: "That last point matters a lot.",
        },
        {
          type: "paragraph",
          text: "When your target audience is a founder, they do not just read a page for information. They read it to decide whether you understand their world. So the SEO work could not be mechanical. It had to make the website feel more relevant, more confident, and more aligned with the actual problems fashion founders search for.",
        },
        {
          type: "heading",
          text: "What We Changed",
        },
        {
          type: "subheading",
          text: "1. We Aligned the Website With High-Intent Category Keywords",
        },
        {
          type: "paragraph",
          text: "The first priority was to connect Dariaan’s positioning with the language its audience was already using.",
        },
        {
          type: "paragraph",
          text: "Many brands describe themselves in a way that sounds good internally, but their audience searches differently. When that gap exists, SEO becomes slower because the website is not clearly matching real search demand.",
        },
        {
          type: "paragraph",
          text: "For Dariaan, we focused on the terms that directly matched its business model and buyer intent, especially around fashion startup accelerator, fashion startup accelerator in India, and related searches from founders looking for structured fashion business growth support.",
        },
        {
          type: "paragraph",
          text: "This helped the website move closer to the language of the market, not just the language of the brand.",
        },
        {
          type: "subheading",
          text: "2. We Clarified Which Pages Should Own Which Search Intent",
        },
        {
          type: "paragraph",
          text: "Not every keyword needs a new page. And not every page should target everything.",
        },
        {
          type: "paragraph",
          text: "A major part of the work was improving keyword ownership across the website. The goal was to reduce confusion and make it easier for search engines to understand which page should rank for which query.",
        },
        {
          type: "paragraph",
          text: "This is where many websites silently lose performance. Multiple pages talk about similar things, but none of them become strong enough to win. The result is weak relevance, scattered authority, and inconsistent rankings.",
        },
        {
          type: "paragraph",
          text: "For Dariaan, we made the structure more disciplined.",
        },
        {
          type: "paragraph",
          text: "The main category pages had to carry the strongest commercial intent, while supporting content had to reinforce the same direction without competing against them.",
        },
        {
          type: "subheading",
          text: "3. We Strengthened the Pages That Mattered Most",
        },
        {
          type: "paragraph",
          text: "A website does not grow equally from every page.",
        },
        {
          type: "paragraph",
          text: "Some pages carry more business value because they sit closer to conversion, trust, and search intent. For Dariaan, those high-leverage pages needed stronger messaging, better structure, clearer relevance, and more confidence in how they explained the brand’s role.",
        },
        {
          type: "paragraph",
          text: "We improved the page content so that it worked in three directions at the same time:",
        },
        {
          type: "list",
          items: [
            "It helped search engines understand the category.",
            "It helped founders understand the offer.",
            "It helped the brand feel more credible in a niche where trust is extremely important.",
          ],
        },
        {
          type: "paragraph",
          text: "That balance is what separates good SEO from keyword stuffing. The page should rank, but it should also persuade the right person once they land there.",
        },
        {
          type: "subheading",
          text: "4. We Built Supporting Relevance Around the Core Category",
        },
        {
          type: "paragraph",
          text: "One page alone rarely builds strong search authority.",
        },
        {
          type: "paragraph",
          text: "If a website wants to rank for an important commercial category, it needs surrounding content that supports the same theme from different angles. That content should answer real questions, cover related problems, and internally link back to the main pages.",
        },
        {
          type: "paragraph",
          text: "For Dariaan, we treated supporting content as a strategic layer, not as random blog activity.",
        },
        {
          type: "paragraph",
          text: "The purpose was not to publish more for the sake of activity. The purpose was to make the website feel more complete around fashion startup growth, founder challenges, fashion business scaling, and the type of structured support early-stage brands need.",
        },
        {
          type: "paragraph",
          text: "This made the overall site more relevant to the category and gave the main pages a stronger foundation",
        },
        {
          type: "subheading",
          text: "5. We Improved Internal Linking So the Website Worked Like a System",
        },
        {
          type: "paragraph",
          text: "Internal linking was an important part of the strategy.",
        },
        {
          type: "paragraph",
          text: "When internal links are planned properly, they do two useful things. First, they help users move from educational content to higher-intent pages. Second, they help search engines understand which pages are more important and how the site is structured.",
        },
        {
          type: "paragraph",
          text: "For Dariaan, we used internal linking to connect the supporting content back to the main category and service pages.",
        },
        {
          type: "paragraph",
          text: "This helped the website stop behaving like a collection of separate pages and start behaving like one connected search system.",
        },
        {
          type: "heading",
          text: "The Results",
        },
        {
          type: "paragraph",
          text: "Within 90 days, Dariaan achieved #1 rankings for core keywords connected to the fashion startup accelerator category.",
        },
        {
          type: "paragraph",
          text: "This was not just a vanity ranking win. It changed how the brand could be discovered by the exact audience it wanted to reach: founders, fashion entrepreneurs, and early-stage retail brands looking for structured growth support.",
        },
        {
          type: "paragraph",
          text: "The result showed three important improvements:",
        },
        {
          type: "list",
          items: [
            "Stronger search visibility: Dariaan became easier to find for high-intent category searches.",
            "Clearer category relevance: The website communicated its role more directly to both search engines and users.",
            "Better trust before the first conversation: When a founder landed on the website, the content and structure made it easier to understand what Dariaan does and why it is relevant.",
          ],
        },
        {
          type: "paragraph",
          text: "The brand was also validated through guest-mode discovery checks across AI-led and search-led environments, which showed that the improved positioning was not limited to traditional search results alone.",
        },
        {
          type: "heading",
          text: "Why This Strategy Worked",
        },
        {
          type: "paragraph",
          text: "This worked because the project was not treated like basic SEO maintenance.",
        },
        {
          type: "paragraph",
          text: "It was not about adding keywords into pages and waiting for rankings to move. It was about understanding what Dariaan needed to be known for and then aligning the website around that direction.",
        },
        {
          type: "paragraph",
          text: "The strategy worked because four important things were connected:",
        },
        {
          type: "list",
          items: [
            "Positioning: The brand’s category became clearer.",
            "Page ownership: The right pages were aligned with the right search intent.",
            "Supporting content: Blogs and related content strengthened the main category instead of distracting from it.",
            "Internal linking: The website structure helped search engines and users understand the relationship between pages.",
          ],
        },
        {
          type: "paragraph",
          text: "That is why the result came faster than a typical scattered SEO approach. The work was focused. The category was specific. And the execution was aligned with how search engines and real users evaluate relevance.",
        },
        {
          type: "heading",
          text: "What Other Brands Can Learn From This",
        },
        {
          type: "paragraph",
          text: "The Dariaan case study is especially useful for niche businesses because many brands assume they need hundreds of blogs, a huge backlink profile, or years of waiting before they can build meaningful search visibility.",
        },
        {
          type: "paragraph",
          text: "In reality, that is not always the case.",
        },
        {
          type: "paragraph",
          text: "In many niche categories, the bigger problem is not the size of the market. The bigger problem is that the brand has not clearly claimed what it wants to be known for.",
        },
        {
          type: "paragraph",
          text: "If your brand already has a strong offer but still does not rank for the terms your best customers are searching, the issue may not be demand. It may be a clarity problem.",
        },
        {
          type: "paragraph",
          text: "Common issues usually look like this:",
        },
        {
          type: "list",
          items: [
            "Your website does not clearly own the category you want to rank for.",
            "Your service pages are not properly aligned with commercial search intent.",
            "Your blog content is published, but it does not support the pages that actually matter.",
            "Your internal linking is weak, random, or disconnected from your main growth pages.",
            "Your positioning sounds good internally, but it does not match how your audience actually searches.",
            "Your pages explain the service, but they do not build enough trust for a serious buyer to take action.",
          ],
        },
        {
          type: "paragraph",
          text: "This is where strategic SEO makes a real difference. Not SEO as a checklist. Not SEO as keyword stuffing. But SEO as a growth system that connects positioning, content, website structure, search intent, and conversion thinking together.",
        },
        {
          type: "heading",
          text: "The WebeDigital Takeaway",
        },
        {
          type: "paragraph",
          text: "For Dariaan, the win came from clarity.",
        },
        {
          type: "paragraph",
          text: "The project worked because every important part of the website started supporting the same search direction:",
        },
        {
          type: "list",
          items: [
            "Clear category positioning",
            "Clear keyword ownership",
            "Clear page structure",
            "Clear supporting content",
            "Clear internal linking",
            "Clear alignment between what the brand offered and what its audience was already searching for",
          ],
        },
        {
          type: "paragraph",
          text: "That is the kind of SEO we believe in at WebeDigital.",
        },
        {
          type: "paragraph",
          text: "Not random content. Not keyword stuffing. Not reports that look busy but do not change the business.",
        },
        {
          type: "paragraph",
          text: "We build search systems that help the right audience find the right page, understand the brand faster, and move closer to taking action.",
        },
        {
          type: "heading",
          text: "Want to Build Search Visibility Around the Keywords Your Customers Actually Use?",
        },
        {
          type: "paragraph",
          text: "If your brand has a strong offer but your search visibility does not reflect it yet, the problem may not be your product, your service, or your market.",
        },
        {
          type: "paragraph",
          text: "It may be that your website is not clearly telling search engines and customers what you should be known for.",
        },
        {
          type: "paragraph",
          text: "WebeDigital helps brands fix that through SEO strategy, content planning, on-page optimization, internal linking, website improvements, and practical growth execution.",
        },
        {
          type: "subheading",
          text: "Book a free growth audit and let’s find what is blocking your visibility.",
        },
      
    ],
    prevStudy: null,
nextStudy: {
  id: "US-based-golf-brand",
  client: "US-Based Golf Brand",
  headline:
    "80K+ Organic Clicks and 3M+ Impressions Through Structured SEO Growth",
},
relatedStudies: [
  {
    id: "US-based-golf-brand",
    client: "US-Based Golf Brand",
    headline:
      "80K+ Organic Clicks and 3M+ Impressions Through Structured SEO Growth",
    service: "SEO",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
    color: "#00c9b1",
  },
  {
    id: "mover",
    client: "MOVER",
    headline:
      "How WebeDigital Turned MOVER’s Slow Search Growth Into 45K+ Clicks and 2.94M Impressions",
    service: "Local SEO",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80",
    color: "#6366f1",
  },
],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // CASE STUDY 2 — PulseCart
  // ──────────────────────────────────────────────────────────────────────────

    {
      id: "US-based-golf-brand",
      client: "US-Based Golf Brand",
      industry: "Golf, Ecommerce, DTC",
      service: "SEO",
      headline:
        "80K+ Organic Clicks and 3M+ Impressions Through Structured SEO Growth",
      excerpt:
        "A leading US-based golf brand already had visibility, but its SEO growth was scattered and difficult to scale. WebeDigital strengthened the content system, page prioritization, and internal linking structure to create a more reliable organic growth engine.",
      image:
        "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
      stats: [
        { value: "80K+", label: "Organic Clicks" },
        { value: "3M+", label: "Search Impressions" },
        { value: "90 Days", label: "SEO Growth Window" },
      ],
      color: "#f97316",
      primaryGoal:
        "Strengthen organic growth and improve SEO structure",
      coreFocus:
        "SEO strategy, commercial page optimization, content system improvement, internal linking, and organic performance tracking",
      timeline: "90 days",
      teamSize: "4 specialists",
      seoTitle:
        "US-Based Golf Brand Case Study: 80K+ Organic Clicks and 3M+ Impressions | WebeDigital",
      seoDescription:
        "Learn how WebeDigital helped a leading US-based golf brand generate 80K+ organic clicks and 3M+ impressions through structured SEO strategy, stronger internal linking, and commercial page optimization.",
      keywords: [
        "golf ecommerce SEO",
        "SEO case study",
        "organic traffic growth",
        "Google Search Console growth",
        "SEO for ecommerce brands",
        "internal linking SEO",
        "commercial page optimization",
      ],
    
    content: [
        {
          type: "heading",
          text: "Case Study Summary",
        },
        {
          type: "paragraph",
          text: "A leading US-based golf brand already had organic visibility, but the growth was not as structured, scalable, or commercially useful as it could have been.",
        },
        {
          type: "paragraph",
          text: "The website had traffic. Some pages were ranking. The Search Console was showing movement. But when we looked deeper, the organic growth engine was not clean enough to support the next stage of scale. Important pages were not being supported properly, content was not working as a connected system, and internal linking was not giving enough strength to the pages that mattered most.",
        },
        {
          type: "paragraph",
          text: "That is where WebeDigital stepped in.",
        },
        {
          type: "paragraph",
          text: "The goal was not just to increase traffic. The goal was to turn scattered organic movement into a stronger SEO growth system, where the right pages, right content, and right internal structure could work together and create more reliable search performance.",
        },
        {
          type: "paragraph",
          text: "The result was 80K+ organic clicks and 3M+ impressions, supported by a cleaner SEO structure, stronger page prioritization, and a more intentional content and internal linking system.",
        },
        {
          type: "heading",
          text: "The Starting Point: A Brand With Organic Potential, But Not Enough Structure",
        },
        {
          type: "paragraph",
          text: "This was not a case where the brand was invisible online.",
        },
        {
          type: "paragraph",
          text: "The website already had organic activity. Rankings existed in parts of the site, some pages were bringing traffic, and there were clear signs that the brand had search potential. From the outside, that kind of situation can look healthy because the site is not starting from zero.",
        },
        {
          type: "paragraph",
          text: "But SEO performance is not only about whether traffic exists.",
        },
        {
          type: "paragraph",
          text: "The more important question is whether that traffic is being built on a system that can keep growing.",
        },
        {
          type: "paragraph",
          text: "For this golf brand, the answer was not clear enough yet.",
        },
        {
          type: "paragraph",
          text: "The site had visibility, but the visibility was scattered. Some pages were working, but they were not supported as strongly as they should have been. Content existed, but it was not doing enough to strengthen the most valuable pages. Internal links existed, but they were not creating a clear path of authority toward the pages that mattered most for growth.",
        },
        {
          type: "paragraph",
          text: "That was the real opportunity.",
        },
        {
          type: "paragraph",
          text: "Not starting from zero, but rebuilding the organic engine so the existing potential could compound better.",
        },
        {
          type: "heading",
          text: "The Real Challenge Was Not Traffic. It Was Compounding Growth.",
        },
        {
          type: "paragraph",
          text: "Many ecommerce brands look at SEO from a surface level.",
        },
        {
          type: "paragraph",
          text: "They check whether traffic is going up or down. They look at rankings. They publish content. They update a few pages. But they do not always step back and ask whether the website is actually structured to grow organically over time.",
        },
        {
          type: "paragraph",
          text: "That was the deeper challenge here.",
        },
        {
          type: "paragraph",
          text: "The brand had a movement, but the movement was not organized enough. The website was getting visibility, but the visibility was not flowing through the site in the most useful way. Some high-value pages had potential, but they needed stronger support from content, structure, and internal linking.",
        },
        {
          type: "paragraph",
          text: "In simple words, the site was not broken.",
        },
        {
          type: "paragraph",
          text: "But it was underbuilt.",
        },
        {
          type: "paragraph",
          text: "And that matters because a website can have traffic and still fail to become a strong SEO asset. It can get clicks and still leave commercial pages under-supported. It can publish content and still not build authority around the right topics.",
        },
        {
          type: "paragraph",
          text: "So our focus was clear from the beginning: we needed to make the organic system cleaner, sharper, and more useful for business growth.",
        },
        {
          type: "heading",
          text: "What WebeDigital Found During the SEO Review",
        },
        {
          type: "paragraph",
          text: "When we reviewed the website, the issue was not that the brand had no demand or no search opportunity. The issue was that the existing organic signals were not being supported properly.",
        },
        {
          type: "paragraph",
          text: "The site had potential, but the structure underneath that potential needed work.",
        },
        {
          type: "paragraph",
          text: "The main gaps looked like this:",
        },
        {
          type: "list",
          items: [
            "Important commercial pages were not being supported strongly enough.",
            "Content was active, but it was not always connected to the most valuable growth pages.",
            "Internal linking needed clearer direction and stronger intent.",
            "Existing visibility was scattered across the site instead of being shaped into a more focused organic system.",
            "Some pages had ranking potential, but they needed better relevance, stronger structure, and clearer support.",
            "The website needed better separation between what was genuinely working and what was only creating surface-level activity.",
          ],
        },
        {
          type: "paragraph",
          text: "This diagnosis changed the direction of the work.",
        },
        {
          type: "paragraph",
          text: "The answer was not simply to publish more blogs or chase more keywords. The answer was to rebuild the way the site supported its own organic growth.",
        },
        {
          type: "paragraph",
          text: "That is where serious SEO work begins.",
        },
        {
          type: "heading",
          text: "What We Changed",
        },
        {
          type: "subheading",
          text: "1. We Cleaned Up the Organic Picture",
        },
        {
          type: "paragraph",
          text: "The first step was clarity.",
        },
        {
          type: "paragraph",
          text: "Before scaling anything, we needed to understand what was actually working, what was underperforming, and where the biggest SEO upside existed. This meant looking beyond simple traffic numbers and studying the relationship between pages, queries, content, and commercial value.",
        },
        {
          type: "paragraph",
          text: "A lot of businesses skip this step.",
        },
        {
          type: "paragraph",
          text: "They see that SEO is not growing fast enough, and they immediately jump into more content, more optimization, or more activity. But if the existing structure is messy, more activity often creates more confusion.",
        },
        {
          type: "paragraph",
          text: "So we started by tightening the organic picture.",
        },
        {
          type: "paragraph",
          text: "We looked at:",
        },
        {
          type: "list",
          items: [
            "Which pages were already receiving visibility",
            "Which pages had the strongest commercial importance",
            "Which topics were supporting growth",
            "Which pages were under-supported despite having potential",
            "Which content pieces were helping the site and which ones were creating noise",
            "Where internal linking could become more intentional",
          ],
        },
        {
          type: "paragraph",
          text: "This gave us a cleaner view of where the work should actually begin.",
        },
        {
          type: "subheading",
          text: "2. We Prioritized the Pages That Mattered Most",
        },
        {
          type: "paragraph",
          text: "Not every page deserves the same level of SEO effort.",
        },
        {
          type: "paragraph",
          text: "Some pages are informational. Some pages are supportive. Some pages are commercially important. And some pages sit directly between search demand and business growth.",
        },
        {
          type: "paragraph",
          text: "For this golf brand, the key was to identify the pages that could create the strongest impact if they were improved properly.",
        },
        {
          type: "paragraph",
          text: "Instead of treating the website like one flat list of URLs, we prioritized pages based on search opportunity, business value, and their role in the buyer journey.",
        },
        {
          type: "paragraph",
          text: "That helped us focus on the areas where SEO could make a more meaningful difference.",
        },
        {
          type: "paragraph",
          text: "The goal was to make these pages:",
        },
        {
          type: "list",
          items: [
            "More relevant to the right search intent",
            "Better supported by surrounding content",
            "Easier for users to understand",
            "Stronger from an on-page SEO perspective",
            "More connected to the rest of the website",
            "Better positioned to earn and hold organic visibility",
          ],
        },
        {
          type: "paragraph",
          text: "This is where the work started becoming more strategic. The website moved away from scattered visibility and started building strength around the pages that actually mattered.",
        },
        {
          type: "subheading",
          text: "3. We Improved Content Support Around Growth Pages",
        },
        {
          type: "paragraph",
          text: "Content can either strengthen a website or scatter it.",
        },
        {
          type: "paragraph",
          text: "If content is created without a clear purpose, the site may look active, but it does not necessarily become stronger. Blogs can get published, pages can increase, and reports can look busy, but the most important pages may still remain unsupported.",
        },
        {
          type: "paragraph",
          text: "For this brand, content needed a clearer role.",
        },
        {
          type: "paragraph",
          text: "We treated content as a support system around the pages that deserved to grow. The objective was not to create content for the sake of volume. The objective was to improve how content helped users, supported search intent, and strengthened key areas of the website.",
        },
        {
          type: "paragraph",
          text: "This meant looking at content through practical questions:",
        },
        {
          type: "list",
          items: [
            "Is this content supporting a page that matters?",
            "Is it answering a real search need?",
            "Does it help users move closer to a product, category, or decision?",
            "Does it connect back to the right commercial pages?",
            "Is it strengthening topical relevance or just adding more pages?",
            "Is it useful enough to deserve organic visibility?",
          ],
        },
        {
          type: "paragraph",
          text: "That shift is important.",
        },
        {
          type: "paragraph",
          text: "Content activity makes a website look busy.",
        },
        {
          type: "paragraph",
          text: "Content strategy makes a website stronger.",
        },
        {
          type: "subheading",
          text: "4. We Made Internal Linking More Intentional",
        },
        {
          type: "paragraph",
          text: "Internal linking was one of the most important parts of the rebuild.",
        },
        {
          type: "paragraph",
          text: "For ecommerce and DTC websites, internal linking is not just a technical SEO task. It directly affects how users move through the site, how search engines understand page relationships, and how authority flows toward important pages.",
        },
        {
          type: "paragraph",
          text: "The website had pages with value, but the connections between them needed to become more deliberate.",
        },
        {
          type: "paragraph",
          text: "So we improved internal linking with a clear purpose:",
        },
        {
          type: "list",
          items: [
            "Help users move from supporting content to relevant commercial pages",
            "Help search engines understand which pages were most important",
            "Connect related topics more naturally",
            "Reduce isolation between useful pages",
            "Strengthen the relationship between content, category, and product-level pages",
            "Make the website behave more like a connected SEO system",
          ],
        },
        {
          type: "paragraph",
          text: "This helped the site stop acting like separate pieces of content and start working more like one structured organic engine.",
        },
        {
          type: "subheading",
          text: "5. We Shifted the Focus From Activity to SEO System Building",
        },
        {
          type: "paragraph",
          text: "One of the biggest changes was strategic, not just technical.",
        },
        {
          type: "paragraph",
          text: "The website did not need random SEO activity. It needed a clearer growth system.",
        },
        {
          type: "paragraph",
          text: "That means every action had to connect back to a bigger purpose. Page improvements, content updates, internal links, and keyword decisions all had to support the same direction.",
        },
        {
          type: "paragraph",
          text: "This is where many brands lose momentum.",
        },
        {
          type: "paragraph",
          text: "They keep doing SEO tasks, but the tasks do not connect. One blog goes live. One page gets updated. One keyword gets tracked. One internal link is added. But the website as a whole does not become stronger.",
        },
        {
          type: "paragraph",
          text: "For this brand, we focused on making the work connected.",
        },
        {
          type: "paragraph",
          text: "The site needed:",
        },
        {
          type: "list",
          items: [
            "Clearer page priorities",
            "Stronger support around high-value pages",
            "Better content relationships",
            "Cleaner internal linking",
            "More useful search intent alignment",
            "A stronger foundation for organic growth to compound",
          ],
        },
        {
          type: "paragraph",
          text: "That is what turned the project from SEO maintenance into SEO growth execution.",
        },
        {
          type: "heading",
          text: "The Results",
        },
        {
          type: "paragraph",
          text: "The headline result was strong: 80K+ organic clicks and 3M+ impressions.",
        },
        {
          type: "paragraph",
          text: "But the real value was not only in the numbers.",
        },
        {
          type: "paragraph",
          text: "The more important outcome was that the brand’s organic growth became cleaner, stronger, and more structured. The website was no longer depending only on scattered movement across different pages. It had a better foundation for search visibility to compound over time.",
        },
        {
          type: "paragraph",
          text: "The results showed three important shifts:",
        },
        {
          type: "list",
          items: [
            "Organic visibility became stronger: The website reached more users through search and generated a larger volume of organic discovery.",
            "The site structure became healthier: Important pages were supported more clearly through content, internal linking, and better page prioritization.",
            "Growth became more scalable: Instead of relying on random wins, the site had a stronger organic system that could support long-term performance.",
          ],
        },
        {
          type: "paragraph",
          text: "This is the difference between improving a report and improving the engine behind the report.",
        },
        {
          type: "paragraph",
          text: "A traffic spike can look exciting.",
        },
        {
          type: "paragraph",
          text: "But a stronger SEO system is far more valuable because it gives the business a better base to keep building from.",
        },
        {
          type: "heading",
          text: "Why This Strategy Worked",
        },
        {
          type: "paragraph",
          text: "This strategy worked because the problem was not treated like a simple traffic gap.",
        },
        {
          type: "paragraph",
          text: "More traffic was not the full answer. A cleaner SEO growth system was.",
        },
        {
          type: "paragraph",
          text: "The website already had potential, but the potential needed better direction. Once the right pages were prioritized, once the supporting content became more intentional, and once internal linking started reinforcing the important parts of the website, the organic picture became much stronger.",
        },
        {
          type: "paragraph",
          text: "The strategy worked because these pieces came together:",
        },
        {
          type: "list",
          items: [
            "Clear diagnosis: We separated real growth opportunities from surface-level activity.",
            "Page prioritization: We focused on the URLs that had stronger commercial and organic value.",
            "Content support: We made content work as a support layer instead of random publishing.",
            "Internal linking: We connected the website more intentionally so important pages were not left isolated.",
            "Search intent alignment: We improved how pages matched what users were actually looking for.",
            "System thinking: We treated SEO as a connected growth engine, not a list of disconnected tasks.",
          ],
        },
        {
          type: "paragraph",
          text: "That is why the project produced stronger growth.",
        },
        {
          type: "paragraph",
          text: "Not because of one trick.",
        },
        {
          type: "paragraph",
          text: "Not because of one blog.",
        },
        {
          type: "paragraph",
          text: "Not because of one technical fix.",
        },
        {
          type: "paragraph",
          text: "But because the website started working like a more complete organic system.",
        },
        {
          type: "heading",
          text: "What Other Ecommerce Brands Can Learn From This",
        },
        {
          type: "paragraph",
          text: "This case study is useful for ecommerce and DTC brands because many of them are sitting on organic potential without fully realizing it.",
        },
        {
          type: "paragraph",
          text: "They may already have traffic. They may already have products. They may already have blogs. They may even have some rankings. But if the website structure is not clear, the most valuable pages may never receive the support they need.",
        },
        {
          type: "paragraph",
          text: "That is where growth often gets stuck.",
        },
        {
          type: "paragraph",
          text: "If your ecommerce website has traffic but organic growth still feels messy, one of these issues may be happening:",
        },
        {
          type: "list",
          items: [
            "Your content is not supporting your most important commercial pages.",
            "Your internal linking does not clearly guide users or search engines toward priority pages.",
            "Your highest-value pages are not aligned strongly enough with search intent.",
            "Your blogs are active, but they are not building topical or commercial strength.",
            "Your category or product pages are not receiving enough SEO support.",
            "Your traffic exists, but it is not being shaped into a stronger business outcome.",
            "Your SEO work is happening as tasks, but not as a connected system.",
          ],
        },
        {
          type: "paragraph",
          text: "This is why ecommerce SEO needs more than content publishing.",
        },
        {
          type: "paragraph",
          text: "It needs page strategy, internal linking, technical awareness, content planning, buyer journey thinking, and conversion understanding working together.",
        },
        {
          type: "heading",
          text: "The WebeDigital Takeaway",
        },
        {
          type: "paragraph",
          text: "For this US-based golf brand, the growth came from structure.",
        },
        {
          type: "paragraph",
          text: "The opportunity was already there. The brand already had search demand, existing visibility, and organic movement. But the website needed a stronger system to convert that potential into cleaner growth.",
        },
        {
          type: "paragraph",
          text: "The project worked because the right parts of the website started supporting each other:",
        },
        {
          type: "list",
          items: [
            "Clearer organic diagnosis",
            "Stronger page prioritization",
            "Better content support",
            "More intentional internal linking",
            "Improved search intent alignment",
            "Stronger connection between SEO work and business value",
          ],
        },
        {
          type: "paragraph",
          text: "That is the kind of SEO WebeDigital believes in.",
        },
        {
          type: "paragraph",
          text: "Not random blogs.",
        },
        {
          type: "paragraph",
          text: "Not scattered optimization.",
        },
        {
          type: "paragraph",
          text: "Not reports that only show activity.",
        },
        {
          type: "paragraph",
          text: "We build SEO systems that help brands become easier to discover, easier to understand, and easier to choose.",
        },
        {
          type: "heading",
          text: "Want to Turn Scattered Organic Traffic Into a Stronger Growth System?",
        },
        {
          type: "paragraph",
          text: "If your website already has traffic but growth still feels inconsistent, the issue may not be your market, product, or brand.",
        },
        {
          type: "paragraph",
          text: "It may be the structure behind your SEO.",
        },
        {
          type: "paragraph",
          text: "WebeDigital helps ecommerce and growth-focused brands improve organic performance through SEO strategy, page optimization, content systems, internal linking, website improvements, and practical growth execution.",
        },
        {
          type: "subheading",
          text: "Book a free growth audit and let’s identify what is holding your organic growth back.",
        },
      
    ],
    prevStudy: {
      id: "1-ranking-for-fashion-startup-accelerator",
      client: "Dariaan",
      headline:
        "#1 Rankings for Fashion Startup Accelerator Keywords in 90 Days",
    },
    nextStudy: {
      id: "mover",
      client: "MOVER",
      headline:
        "How WebeDigital Turned MOVER’s Slow Search Growth Into 45K+ Clicks and 2.94M Impressions",
    },
    relatedStudies: [
      {
        id: "1-ranking-for-fashion-startup-accelerator",
        client: "Dariaan",
        headline:
          "#1 Rankings for Fashion Startup Accelerator Keywords in 90 Days",
        service: "SEO",
        image:
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
        color: "#00c9b1",
      },
      {
        id: "mover",
        client: "MOVER",
        headline:
          "How WebeDigital Turned MOVER’s Slow Search Growth Into 45K+ Clicks and 2.94M Impressions",
        service: "Local SEO",
        image:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80",
        color: "#10b981",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // CASE STUDY 3 — MOVER
  // ──────────────────────────────────────────────────────────────────────────

    {
      id: "mover",
      client: "MOVER",
      industry: "Local Moving, Packers and Movers, Intracity Logistics",
      service: "Local SEO",
      headline:
        "How WebeDigital Turned MOVER’s Slow Search Growth Into 45K+ Clicks and 2.94M Impressions",
      excerpt:
        "MOVER already had demand around its services, but its search visibility was inconsistent and under-structured. WebeDigital strengthened local SEO, service-page relevance, content systems, and internal linking to create a stronger organic growth engine.",
      image:
        "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80",
      stats: [
        { value: "45K+", label: "Organic Clicks" },
        { value: "2.94M", label: "Search Impressions" },
        { value: "7.6", label: "Average Position" },
      ],
      color: "#6366f1",
      primaryGoal:
        "Improve local search visibility and organic discovery",
      coreFocus:
        "Local SEO, service-page relevance, content systems, internal linking, and search visibility improvement",
      timeline: "90 days",
      teamSize: "4 specialists",
      seoTitle:
        "MOVER Case Study: 45K+ Clicks and 2.94M Impressions Through Local SEO | WebeDigital",
      seoDescription:
        "Learn how WebeDigital helped MOVER generate 45K+ organic clicks and 2.94M impressions through local SEO, stronger service-page relevance, content systems, and structured search visibility improvements.",
      keywords: [
        "local SEO case study",
        "packers and movers SEO",
        "moving company SEO",
        "local search visibility",
        "SEO for logistics companies",
        "organic growth case study",
        "WebeDigital SEO case study",
      ],
      content: [
        {
          type: "heading",
          text: "Case Study Summary",
        },
        {
          type: "paragraph",
          text: "MOVER is a local moving and logistics brand operating in a highly intent-driven category where customers usually search only when they need action quickly. In this kind of market, visibility matters a lot because people are not casually browsing for weeks. They are comparing service providers, checking availability, looking for trust, and making decisions fast.",
        },
        {
          type: "paragraph",
          text: "When WebeDigital worked on MOVER’s search growth, the brand already had demand around it. People were searching for moving, packing, shifting, and local logistics services. The problem was not that the market was empty. The problem was that MOVER’s organic visibility was not strong enough, consistent enough, or structured enough to capture that demand properly.",
        },
        {
          type: "paragraph",
          text: "The website was moving, but slowly.",
        },
        {
          type: "paragraph",
          text: "Some visibility existed, but it was scattered. Some pages had potential, but they were not being supported properly. The site needed stronger local SEO, better content support, clearer service relevance, and a more connected structure that could help organic growth compound.",
        },
        {
          type: "paragraph",
          text: "Through local SEO and content system improvements, MOVER generated 45K+ clicks, 2.94M impressions, an average position of 7.6, and stronger Page 1 keyword visibility within 90 days.",
        },
        {
          type: "paragraph",
          text: "This case study breaks down how WebeDigital approached the project, what we changed, and why the result came from building a stronger local search system rather than doing random SEO activity.",
        },
        {
          type: "heading",
          text: "The Starting Point: A Local Brand With Demand, But Slow Organic Momentum",
        },
        {
          type: "paragraph",
          text: "MOVER was not operating in a category where people needed to be educated from zero.",
        },
        {
          type: "paragraph",
          text: "The demand already existed.",
        },
        {
          type: "paragraph",
          text: "People were searching for packers and movers, home shifting, local moving services, truck booking, bike transport, and other local logistics needs. These are high-intent searches because the customer usually has a real requirement behind the search.",
        },
        {
          type: "paragraph",
          text: "But having demand in the market does not automatically mean the website will capture it.",
        },
        {
          type: "paragraph",
          text: "That was the issue here.",
        },
        {
          type: "paragraph",
          text: "MOVER had business relevance, but its search presence was not strong enough to turn that relevance into consistent organic growth. The website had some movement, but the growth was slow. Visibility existed in parts, but the overall search structure was not helping the brand build stronger local authority.",
        },
        {
          type: "paragraph",
          text: "For a local service business, that can become a serious growth blocker.",
        },
        {
          type: "paragraph",
          text: "Because when people search locally, they usually compare only a few options. If your website does not show up strongly at that decision moment, the lead often goes somewhere else.",
        },
        {
          type: "paragraph",
          text: "So the goal was clear.",
        },
        {
          type: "paragraph",
          text: "We had to help MOVER become easier to discover for the right local searches, and we had to make the website stronger around the services people were already looking for.",
        },
        {
          type: "heading",
          text: "The Real Challenge Was Not Demand. It Was Local Search Structure.",
        },
        {
          type: "paragraph",
          text: "A lot of local businesses assume that slow SEO growth means people are not searching enough.",
        },
        {
          type: "paragraph",
          text: "But very often, that is not the actual problem.",
        },
        {
          type: "paragraph",
          text: "The real issue is usually that the website is not structured properly around local search intent. The service pages are not strong enough. The content does not support the most important services. The internal linking is weak. The location and service relevance are not clear enough. And because of all this, Google does not get a strong enough signal about where the business should appear and for which searches.",
        },
        {
          type: "paragraph",
          text: "That was the bigger challenge with MOVER.",
        },
        {
          type: "paragraph",
          text: "The website needed to move from scattered organic activity to a stronger local SEO system. It needed clearer service visibility, better search intent alignment, stronger content reinforcement, and a structure that could support Page 1 keyword growth.",
        },
        {
          type: "paragraph",
          text: "This was not a case where the answer was simply “publish more blogs.”",
        },
        {
          type: "paragraph",
          text: "The real question was:",
        },
        {
          type: "blockquote",
          text: "How do we make MOVER’s website more relevant, more useful, and more discoverable for people who are already searching for moving and logistics services?",
        },
        {
          type: "paragraph",
          text: "That question shaped the whole strategy.",
        },
        {
          type: "heading",
          text: "What WebeDigital Found During the SEO Review",
        },
        {
          type: "paragraph",
          text: "When we reviewed MOVER’s organic visibility, we found that the brand had enough search opportunity to grow. The issue was that the website was not extracting enough value from that demand.",
        },
        {
          type: "paragraph",
          text: "The site needed stronger local relevance and better support around its key services.",
        },
        {
          type: "paragraph",
          text: "The main gaps were:",
        },
        {
          type: "list",
          items: [
            "The website had search potential, but the visibility was not compounding properly.",
            "Important service-related intent was not supported strongly enough.",
            "Local SEO signals needed clearer structure and better alignment.",
            "Content existed, but it needed to work harder for service visibility.",
            "The site needed better connection between informational content and high-value service pages.",
            "Page-level relevance needed improvement so the right pages could compete for the right searches.",
            "The website needed to behave like a connected local search system, not a loose collection of pages.",
          ],
        },
        {
          type: "paragraph",
          text: "This diagnosis was important because it stopped the project from becoming random.",
        },
        {
          type: "paragraph",
          text: "Instead of doing SEO tasks just to show activity, we focused on the parts of the website that could actually improve local discoverability and organic momentum.",
        },
        {
          type: "heading",
          text: "What We Changed",
        },
        {
          type: "subheading",
          text: "1. We Strengthened the Local SEO Foundation",
        },
        {
          type: "paragraph",
          text: "The first priority was to improve how clearly the website communicated local relevance.",
        },
        {
          type: "paragraph",
          text: "For a local service business, SEO is not only about keywords. It is about helping search engines and customers understand what you do, where you serve, and why your business is relevant for that specific local need.",
        },
        {
          type: "paragraph",
          text: "So we focused on strengthening the foundation around MOVER’s core services and local search intent.",
        },
        {
          type: "paragraph",
          text: "This included improving how the website supported:",
        },
        {
          type: "list",
          items: [
            "Moving and shifting-related searches",
            "Service-specific demand",
            "Local discovery intent",
            "High-intent customer queries",
            "Page-level relevance",
            "Search visibility around core service categories",
          ],
        },
        {
          type: "paragraph",
          text: "The purpose was simple.",
        },
        {
          type: "paragraph",
          text: "Before expecting traffic to grow faster, the website needed a stronger base that could actually carry that growth.",
        },
        {
          type: "subheading",
          text: "2. We Made Service Visibility More Clear",
        },
        {
          type: "paragraph",
          text: "Local customers usually search with a service need in mind.",
        },
        {
          type: "paragraph",
          text: "They are not only searching for a brand name. They are searching for solutions like home shifting, packers and movers, local transport, truck booking, bike transport, or moving support near them.",
        },
        {
          type: "paragraph",
          text: "That means the website must clearly show what services are offered and which pages are most relevant for each type of search.",
        },
        {
          type: "paragraph",
          text: "For MOVER, we worked on improving service visibility so the website could better match the way customers search.",
        },
        {
          type: "paragraph",
          text: "The goal was to make important services easier to understand for both users and search engines.",
        },
        {
          type: "paragraph",
          text: "This helped the website move closer to real buyer intent instead of depending only on broad or generic visibility.",
        },
        {
          type: "subheading",
          text: "3. We Built Stronger Content Support Around Local Demand",
        },
        {
          type: "paragraph",
          text: "Content was a major part of the strategy, but not in the usual “publish more and hope” way.",
        },
        {
          type: "paragraph",
          text: "We treated content as a support system for local SEO.",
        },
        {
          type: "paragraph",
          text: "For MOVER, content had to do more than bring random traffic. It had to support the services that mattered, answer real customer questions, and strengthen the website’s relevance around moving and logistics-related searches.",
        },
        {
          type: "paragraph",
          text: "Good local content helps in three ways:",
        },
        {
          type: "list",
          items: [
            "It answers the questions customers ask before choosing a service.",
            "It supports the main service pages with stronger topical relevance.",
            "It creates more entry points for people searching at different stages of the decision journey.",
          ],
        },
        {
          type: "paragraph",
          text: "That is why the content system was built around practical search needs, not generic blog topics.",
        },
        {
          type: "paragraph",
          text: "The focus was to help MOVER become more visible around the kinds of searches that could actually turn into leads, bookings, or service inquiries.",
        },
        {
          type: "subheading",
          text: "4. We Improved How Pages Supported Each Other",
        },
        {
          type: "paragraph",
          text: "One of the biggest issues in many local service websites is that pages exist, but they do not support each other.",
        },
        {
          type: "paragraph",
          text: "A service page may exist. A blog may exist. A location page may exist. But if those pages are not connected properly, the website does not build enough strength as a system.",
        },
        {
          type: "paragraph",
          text: "For MOVER, we improved the relationship between pages so the website could become more connected.",
        },
        {
          type: "paragraph",
          text: "This meant making sure that supporting content, service pages, and important growth pages were not isolated.",
        },
        {
          type: "paragraph",
          text: "The goal was to help:",
        },
        {
          type: "list",
          items: [
            "Users move from information to action more naturally.",
            "Search engines understand which pages were important.",
            "Service pages receive stronger support from related content.",
            "The website build more authority around local moving and logistics topics.",
            "Organic visibility become less scattered and more intentional.",
          ],
        },
        {
          type: "paragraph",
          text: "This is where internal linking and structure started playing a bigger role.",
        },
        {
          type: "paragraph",
          text: "The website needed to stop acting like separate pages and start working like one connected local growth engine.",
        },
        {
          type: "subheading",
          text: "5. We Shifted the SEO Work From Activity to Compounding",
        },
        {
          type: "paragraph",
          text: "The biggest change was not one single task.",
        },
        {
          type: "paragraph",
          text: "It was the shift in how the SEO work was approached.",
        },
        {
          type: "paragraph",
          text: "Instead of treating SEO as a checklist, we treated it as a compounding system.",
        },
        {
          type: "paragraph",
          text: "That means every improvement had to support the next one. Local SEO supported service relevance. Content supported service pages. Internal links supported priority pages. Better page structure supported search understanding. And all of this together helped the website build stronger visibility over time.",
        },
        {
          type: "paragraph",
          text: "This is what many local businesses miss.",
        },
        {
          type: "paragraph",
          text: "They keep doing small SEO tasks, but those tasks do not connect. One page is updated. One blog is published. One keyword is tracked. But the website as a whole does not become stronger.",
        },
        {
          type: "paragraph",
          text: "For MOVER, the strategy was different.",
        },
        {
          type: "paragraph",
          text: "The work was built around connected growth.",
        },
        {
          type: "paragraph",
          text: "That is why the curve did not just move slightly. It started changing character once the right foundation and content system began working together.",
        },
        {
          type: "heading",
          text: "The Results",
        },
        {
          type: "paragraph",
          text: "The result was a clear organic visibility breakthrough.",
        },
        {
          type: "paragraph",
          text: "MOVER generated:",
        },
        {
          type: "list",
          items: [
            "45K+ clicks",
            "2.94M impressions",
            "Average position of 7.6",
            "Page 1 keyword rankings",
            "Stronger local search visibility within 90 days",
          ],
        },
        {
          type: "paragraph",
          text: "But the most important part of this case study is not just the numbers.",
        },
        {
          type: "paragraph",
          text: "The real value is the shift in momentum.",
        },
        {
          type: "paragraph",
          text: "At first, search growth was moving slowly. That is common when a website has demand around it but does not yet have the right SEO structure underneath it. Once the local SEO foundation, service visibility, content support, and internal linking started working together, the growth curve became much stronger.",
        },
        {
          type: "paragraph",
          text: "That is what matters in local SEO.",
        },
        {
          type: "paragraph",
          text: "A short spike can happen randomly.",
        },
        {
          type: "paragraph",
          text: "But compounding visibility usually happens when the website structure becomes strong enough to support repeated discovery across important searches.",
        },
        {
          type: "paragraph",
          text: "For MOVER, the result was not just more traffic. It was better organic momentum from a stronger local search system.",
        },
        {
          type: "heading",
          text: "Why This Strategy Worked",
        },
        {
          type: "paragraph",
          text: "This strategy worked because the problem was not treated like a simple traffic problem.",
        },
        {
          type: "paragraph",
          text: "The real issue was structure.",
        },
        {
          type: "paragraph",
          text: "MOVER already had demand in the market, but the website needed a better way to capture that demand through local SEO, content, and page-level support.",
        },
        {
          type: "paragraph",
          text: "The strategy worked because these important pieces came together:",
        },
        {
          type: "list",
          items: [
            "Local SEO foundation: The website became more aligned with local search intent and service relevance.",
            "Service clarity: Important services became easier for users and search engines to understand.",
            "Content support: Content started reinforcing the pages and topics that mattered most.",
            "Internal linking: Pages were connected more intentionally so the website could build strength as a system.",
            "Search intent alignment: The website moved closer to the way real customers search before choosing a service.",
            "Compounding structure: SEO activity became connected, which helped visibility grow more consistently.",
          ],
        },
        {
          type: "paragraph",
          text: "This is why the work created stronger momentum.",
        },
        {
          type: "paragraph",
          text: "Not because of one keyword.",
        },
        {
          type: "paragraph",
          text: "Not because of one blog.",
        },
        {
          type: "paragraph",
          text: "Not because of one quick SEO fix.",
        },
        {
          type: "paragraph",
          text: "But because the website started behaving like a stronger local search engine for its own category.",
        },
        {
          type: "heading",
          text: "What Other Local Service Businesses Can Learn From This",
        },
        {
          type: "paragraph",
          text: "This case study is especially useful for local service businesses because many of them face the same problem.",
        },
        {
          type: "paragraph",
          text: "They have demand.",
        },
        {
          type: "paragraph",
          text: "They have services people are searching for.",
        },
        {
          type: "paragraph",
          text: "They may even have a decent website.",
        },
        {
          type: "paragraph",
          text: "But their search growth stays slow because the website does not clearly support local intent, service pages, content, and user journeys together.",
        },
        {
          type: "paragraph",
          text: "If your local service website is not growing the way it should, one of these issues may be holding it back:",
        },
        {
          type: "list",
          items: [
            "Your service pages are too generic and do not match real local search intent.",
            "Your website does not clearly explain what you offer and where you serve.",
            "Your content is being published, but it is not supporting the pages that generate leads.",
            "Your internal linking is weak, random, or not connected to your most important services.",
            "Your website gets some visibility, but not enough Page 1 presence for high-intent searches.",
            "Your SEO work is happening as isolated tasks instead of a connected system.",
            "Your pages are visible, but they are not strong enough to turn search demand into consistent inquiries.",
            "Your local SEO foundation is too thin to support faster growth.",
          ],
        },
        {
          type: "paragraph",
          text: "This is why local SEO needs more than basic optimization.",
        },
        {
          type: "paragraph",
          text: "It needs service understanding, local intent mapping, content support, website structure, internal linking, and conversion thinking working together.",
        },
        {
          type: "paragraph",
          text: "When those pieces connect properly, search growth becomes easier to understand, easier to improve, and much easier to scale.",
        },
        {
          type: "heading",
          text: "The WebeDigital Takeaway",
        },
        {
          type: "paragraph",
          text: "For MOVER, the growth came from structure and clarity.",
        },
        {
          type: "paragraph",
          text: "The demand was already there. People were already searching for moving and local logistics services. But the website needed a stronger system to capture that demand and turn it into consistent search visibility.",
        },
        {
          type: "paragraph",
          text: "The project worked because the right parts of the website started supporting each other:",
        },
        {
          type: "list",
          items: [
            "Stronger local SEO foundation",
            "Clearer service relevance",
            "Better content support",
            "More intentional internal linking",
            "Improved search intent alignment",
            "Stronger page-level visibility",
            "Better connection between SEO work and business growth",
          ],
        },
        {
          type: "paragraph",
          text: "That is the kind of local SEO WebeDigital believes in.",
        },
        {
          type: "paragraph",
          text: "Not random blogs.",
        },
        {
          type: "paragraph",
          text: "Not scattered keyword targeting.",
        },
        {
          type: "paragraph",
          text: "Not reports that only show activity.",
        },
        {
          type: "paragraph",
          text: "We build local SEO systems that help service businesses become easier to find, easier to trust, and easier to choose when customers are ready to take action.",
        },
        {
          type: "heading",
          text: "Want to Turn Slow Local Search Growth Into Stronger Visibility?",
        },
        {
          type: "paragraph",
          text: "If your business already has demand in the market but your website is not getting enough visibility, the problem may not be your service.",
        },
        {
          type: "paragraph",
          text: "It may be the structure behind your SEO.",
        },
        {
          type: "paragraph",
          text: "WebeDigital helps local service businesses improve organic growth through local SEO, service-page optimization, content systems, internal linking, website improvements, and practical search strategy.",
        },
        {
          type: "subheading",
          text: "Book a free growth audit and let’s find what is slowing down your local search growth.",
        },
      
    ],
    prevStudy: {
      id: "US-based-golf-brand",
      client: "US-Based Golf Brand",
      headline:
        "80K+ Organic Clicks and 3M+ Impressions Through Structured SEO Growth",
    },
    nextStudy: null,
    relatedStudies: [
      {
        id: "1-ranking-for-fashion-startup-accelerator",
        client: "Dariaan",
        headline:
          "#1 Rankings for Fashion Startup Accelerator Keywords in 90 Days",
        service: "SEO",
        image:
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
        color: "#00c9b1",
      },
      {
        id: "US-based-golf-brand",
        client: "US-Based Golf Brand",
        headline:
          "80K+ Organic Clicks and 3M+ Impressions Through Structured SEO Growth",
        service: "SEO",
        image:
          "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
        color: "#6366f1",
      },
    ],
  },
];