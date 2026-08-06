import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, LOCALES } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

const raleway = localFont({
  src: [
    {
      path: "../fonts/Raleway-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/Raleway-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-raleway",
  display: "swap",
});

const merriweatherSans = localFont({
  src: [
    {
      path: "../fonts/MerriweatherSans-VariableFont_wght.ttf",
      weight: "300 800",
      style: "normal",
    },
    {
      path: "../fonts/MerriweatherSans-Italic-VariableFont_wght.ttf",
      weight: "300 800",
      style: "italic",
    },
  ],
  variable: "--font-merriweather-sans",
  display: "swap",
});

/** Předgenerování všech jazykových mutací při buildu. */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

const OG_LOCALES: Record<string, string> = {
  cs: "cs_CZ",
  en: "en_GB",
  de: "de_DE",
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `/${lang}`,
      // hreflang — ať Google nepovažuje jazyky za duplicitní obsah
      languages: Object.fromEntries(
        LOCALES.map((locale) => [locale, `/${locale}`]),
      ),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: OG_LOCALES[lang],
      type: "website",
      url: `/${lang}`,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <html
      lang={dict.htmlLang}
      className={`${raleway.variable} ${merriweatherSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
