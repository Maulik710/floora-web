"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { Handshake, Palette, Ruler, Calendar, Wrench, Smile, ChevronDown, ChevronUp } from "@/components/Icons";

const iconMap = { Handshake, Palette, Ruler, Calendar, Wrench, Smile };

export default function ClientJourney({ steps }) {
  const [expandedStep, setExpandedStep] = useState(null);

  if (!steps?.length) return null;

  const toggleStep = (i) => setExpandedStep((cur) => (cur === i ? null : i));

  return (
    <section className="py-24">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Client Process</p>
          <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
            Your journey to beautiful floors
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone">
            We&apos;ve perfected our process to ensure a seamless experience from consultation to
            completion, guiding you through every step with personalized care.
          </p>
        </Reveal>

        {/* ---------- Desktop timeline ---------- */}
        <Reveal delay={100} className="relative mt-16 hidden md:block">
          <div className="absolute left-[50px] right-[50px] top-8 h-px bg-charcoal/10" />
          <div className="relative flex items-start justify-between">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] || Handshake;
              const isOpen = expandedStep === i;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => toggleStep(i)}
                  className="group flex flex-1 flex-col items-center px-2 text-center"
                >
                  <span
                    className={`grid h-16 w-16 place-items-center rounded-full shadow-md transition-transform duration-300 group-hover:-translate-y-1 ${
                      isOpen ? "bg-clay text-canvas" : "bg-canvas text-clay ring-1 ring-charcoal/10"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-3 max-w-[9rem] text-sm font-medium text-charcoal">{step.title}</p>
                  <span className="mt-1 rounded-full bg-clay/10 px-2 py-0.5 text-xs text-clay">
                    {step.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {expandedStep !== null && (
            <div className="mt-8 rounded-2xl border border-charcoal/10 bg-canvas p-8 shadow-card">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-clay/10 text-clay">
                    {(() => {
                      const Icon = iconMap[steps[expandedStep].icon] || Handshake;
                      return <Icon className="h-5 w-5" />;
                    })()}
                  </span>
                  <h3 className="font-display text-xl text-charcoal">{steps[expandedStep].title}</h3>
                </div>
                <span className="rounded-full bg-clay/10 px-3 py-1 text-xs text-clay">
                  {steps[expandedStep].duration}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-stone">{steps[expandedStep].description}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {steps[expandedStep].details.map((detail) => (
                  <div key={detail} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    <p className="text-sm text-ink">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Reveal>

        {/* ---------- Mobile accordion ---------- */}
        <div className="mt-12 flex flex-col gap-3 md:hidden">
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon] || Handshake;
            const isOpen = expandedStep === i;
            return (
              <Reveal
                key={step.title}
                delay={i * 60}
                className="overflow-hidden rounded-2xl border border-charcoal/10 bg-canvas shadow-card"
              >
                <button
                  type="button"
                  onClick={() => toggleStep(i)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-clay/10 text-clay">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-medium text-charcoal">{step.title}</p>
                      <span className="mt-0.5 inline-block rounded-full bg-clay/10 px-2 py-0.5 text-xs text-clay">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 shrink-0 text-clay" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 text-stone" />
                  )}
                </button>
                {isOpen && (
                  <div className="flex flex-col gap-3 px-4 pb-4">
                    <p className="text-sm leading-relaxed text-stone">{step.description}</p>
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                        <p className="text-xs text-ink">{detail}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
