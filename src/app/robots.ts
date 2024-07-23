import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/user/",
    },
    sitemap: `${process.env.WEB_URL}/sitemap.xml`,
  };
}
