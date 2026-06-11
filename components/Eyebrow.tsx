type EyebrowProps = {
  children: React.ReactNode;
  light?: boolean;
};

/** Malý nadtitulek sekce s linkou. `light` pro tmavá pozadí. */
export default function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 font-display text-[0.72rem] font-semibold tracking-[0.22em] uppercase ${
        light ? "text-amber-soft" : "text-olive"
      }`}
    >
      <span
        aria-hidden
        className={`h-px w-10 ${light ? "bg-amber-soft/60" : "bg-olive/50"}`}
      />
      {children}
    </p>
  );
}
