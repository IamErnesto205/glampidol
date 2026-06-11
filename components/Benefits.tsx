import Reveal from "./Reveal";
import { BENEFITS } from "@/lib/content";

export default function Benefits() {
  return (
    <section className="bg-linen">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.1}>
              <div className="border-t border-olive/30 pt-6">
                <span className="font-display text-[0.72rem] font-semibold tracking-[0.2em] text-amber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.8] font-light text-ink/70">
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
