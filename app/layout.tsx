import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const raleway = localFont({
  src: [
    {
      path: "./fonts/Raleway-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-Italic-VariableFont_wght.ttf",
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
      path: "./fonts/MerriweatherSans-VariableFont_wght.ttf",
      weight: "300 800",
      style: "normal",
    },
    {
      path: "./fonts/MerriweatherSans-Italic-VariableFont_wght.ttf",
      weight: "300 800",
      style: "italic",
    },
  ],
  variable: "--font-merriweather-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glampidol | Tiny house se saunou v trnkovém sadu",
  description:
    "Soukromý glamping v Lípě u Vizovických vrchů. Tiny house až pro 4 osoby, finská sauna v ceně, terasa, gril, ohniště a výhledy do přírody.",
  keywords: [
    "glamping Lípa",
    "glamping Zlínský kraj",
    "tiny house Zlínský kraj",
    "glamping se saunou",
    "ubytování se saunou",
    "Vizovické vrchy",
    "romantický pobyt v přírodě",
  ],
  openGraph: {
    title: "Glampidol | Tiny house se saunou v trnkovém sadu",
    description:
      "Soukromý glamping v Lípě u Vizovických vrchů. Tiny house až pro 4 osoby, finská sauna v ceně, terasa, gril, ohniště a výhledy do přírody.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${raleway.variable} ${merriweatherSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
