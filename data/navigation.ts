import { NavGroup } from "@/lib/types";

export const primaryNavigation: NavGroup[] = [
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about" },
    ]
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "SEO & GEO", href: "/services/seo-geo" },
      { label: "Paid Media", href: "/services/paid-media" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Content & PR", href: "/services/content-pr" },
      { label: "Branding & Creative", href: "/services/branding-creative" },
      { label: "Amazon", href: "/services/amazon" }
    ]
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Case Studies",
   href: "/resources/case-studies" ,
    
  },
  { label: "Contact Us", href: "/contact-us" }
];
