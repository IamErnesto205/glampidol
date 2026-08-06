import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fotky jsou lokální v public/images/, žádné externí zdroje.

  /**
   * Web běží pod jazykovou předponou (/cs, /en, /de). Kořen a staré
   * adresy bez předpony vedou na češtinu, aby odkazy zvenčí nepadaly
   * na 404 — čeština je hlavní trh.
   */
  async redirects() {
    return [
      { source: "/", destination: "/cs", permanent: false },
      { source: "/galerie", destination: "/cs/galerie", permanent: true },
    ];
  },
};

export default nextConfig;
