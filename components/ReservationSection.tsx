"use client";

import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { CONTACT } from "@/lib/site";

const inputClass =
  "w-full rounded-sm border border-cream/20 bg-cream/5 px-4 py-3 text-[0.95rem] font-light text-cream placeholder:text-cream/35 transition-colors duration-300 focus:border-amber-soft/70 focus:outline-none";

const labelClass =
  "block font-display text-[0.72rem] font-semibold tracking-[0.16em] text-cream/70 uppercase";

/**
 * Poptávkový formulář zatím bez backendu — odesláním se otevře e-mailový
 * klient s předvyplněnou zprávou na CONTACT.email. Později lze napojit
 * na API route / rezervační systém.
 */
export default function ReservationSection() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Poptávka pobytu — ${data.get("name")}`;
    const body = [
      `Jméno: ${data.get("name")}`,
      `E-mail: ${data.get("email")}`,
      `Telefon: ${data.get("phone")}`,
      `Termín: ${data.get("dateFrom")} až ${data.get("dateTo")}`,
      `Počet osob: ${data.get("guests")}`,
      "",
      `${data.get("message") ?? ""}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="rezervace" className="bg-bark">
      <div className="mx-auto grid w-full max-w-[1280px] gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-20 lg:px-8 lg:py-32">
        {/* Text + kontakt */}
        <Reveal className="lg:col-span-5">
          <Eyebrow light>Rezervace</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-cream sm:text-4xl lg:text-[2.6rem]">
            Vyberte si termín a přijeďte vypnout
          </h2>
          <p className="mt-6 max-w-md text-base leading-[1.85] font-light text-cream/80">
            Napište nám termín, počet osob a případně pár slov k pobytu.
            Ozveme se vám s potvrzením dostupnosti a všemi informacemi
            k příjezdu.
          </p>

          <dl id="kontakt" className="mt-12 space-y-5">
            {[
              { label: "Telefon", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
              { label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { label: "Lokalita", value: CONTACT.location },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-cream/50 uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1 text-lg font-light text-cream">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors duration-300 hover:text-amber-soft"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Formulář */}
        <Reveal delay={0.15} className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Jméno
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={`${inputClass} mt-2`}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={`${inputClass} mt-2`}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={`${inputClass} mt-2`}
              />
            </div>
            <div>
              <label htmlFor="guests" className={labelClass}>
                Počet osob
              </label>
              <select
                id="guests"
                name="guests"
                defaultValue="2"
                className={`${inputClass} mt-2 appearance-none`}
              >
                {["1", "2", "3", "4"].map((count) => (
                  <option key={count} value={count} className="bg-bark">
                    {count}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="dateFrom" className={labelClass}>
                Termín od
              </label>
              <input
                id="dateFrom"
                name="dateFrom"
                type="date"
                required
                className={`${inputClass} mt-2 [color-scheme:dark]`}
              />
            </div>
            <div>
              <label htmlFor="dateTo" className={labelClass}>
                Termín do
              </label>
              <input
                id="dateTo"
                name="dateTo"
                type="date"
                required
                className={`${inputClass} mt-2 [color-scheme:dark]`}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Zpráva
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${inputClass} mt-2 resize-y`}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-full bg-olive px-9 py-4 font-display text-sm font-semibold tracking-[0.1em] text-cream uppercase transition-all duration-300 hover:bg-olive-deep hover:-translate-y-0.5"
              >
                Odeslat poptávku
                <span aria-hidden>→</span>
              </button>
              <p className="mt-4 text-[0.8rem] font-light text-cream/50">
                Rezervace je platná až po potvrzení termínu.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
