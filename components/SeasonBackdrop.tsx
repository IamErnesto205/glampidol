import Image from "next/image";

/** Sezónní větve v rozích jako dekorace pozadí béžových (linen) sekcí. */
export type Season = "jaro" | "leto" | "podzim" | "zima";

const SEASON_SRC: Record<Season, string> = {
  jaro: "/images/seasons/jaro.png",
  leto: "/images/seasons/leto.png",
  podzim: "/images/seasons/podzim.png",
  zima: "/images/seasons/zima.png",
};

const SEASON_LABEL: Record<Season, string> = {
  jaro: "Jaro 🌷",
  leto: "Léto 🌻",
  podzim: "Podzim 🍂",
  zima: "Zima ❄",
};

/**
 * Dekorativní rámeček z větví. Obrázky mají průhledný střed, takže větve
 * zůstanou jen v rozích a obsah sekce prosvítá skrz. Vloží se jako první
 * dítě sekce, která musí mít `relative overflow-hidden`; obsah pak dejte
 * do vrstvy `relative z-10`.
 */
export default function SeasonBackdrop({
  season,
  className = "",
}: {
  season: Season;
  className?: string;
}) {
  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 z-0 select-none ${className}`}
      >
        <Image
          src={SEASON_SRC[season]}
          alt=""
          width={1672}
          height={941}
          sizes="100vw"
          className="h-auto w-full opacity-[0.49]"
        />
      </div>

      {/* Nápis se sezónou v pravém horním rohu */}
      <span className="absolute top-6 right-6 z-20 inline-flex items-center rounded-full border border-olive/20 bg-cream/70 px-3.5 py-1.5 font-display text-[0.8rem] font-semibold tracking-[0.06em] text-olive backdrop-blur-sm lg:top-8 lg:right-8">
        {SEASON_LABEL[season]}
      </span>
    </>
  );
}
