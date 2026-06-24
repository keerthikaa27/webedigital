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
    
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Case Studies",
   href: "/case-studies" ,
    
  },
  { label: "Contact Us", href: "/contact-us" }
];
