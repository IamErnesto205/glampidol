import type { MetadataRoute } from "next";
import { languageAlternates, localePath, LOCALES } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

/** Stránky webu bez jazykové předpony — při přidání stránky doplnit sem. */
const PAGES = ["", "galerie"];

/**
 * /sitemap.xml — seznam všech stránek pro Google a Seznam. Každá jazyková
 * mutace je zvlášť a nese hreflang odkazy na ostatní. lastModified schválně
 * chybí: datum buildu by se měnilo při každém deployi a Google by mu
 * přestal věřit.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(page)).map(([lang, path]) => [
        lang,
        `${SITE_URL}${path}`,
      ]),
    );

    return LOCALES.map((locale) => ({
      url: `${SITE_URL}${localePath(locale, page)}`,
      alternates: { languages },
    }));
  });
}
