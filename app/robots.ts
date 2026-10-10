import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** /robots.txt — web je celý veřejný, jen ukazuje vyhledávačům na sitemapu. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
