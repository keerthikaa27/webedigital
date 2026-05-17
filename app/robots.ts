import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/tmp/",
        ],
      },

      // Optional: stronger Googlebot instructions
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],

    sitemap: "https://www.webedigital.com/sitemap.xml",

    host: "https://www.webedigital.com",
  };
}