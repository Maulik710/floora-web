"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInquiry } from "@/components/InquiryContext";
import {
  Plus, Check, Download, ArrowRight, Droplet, Ruler, Layers, Shield, Close, Star,
} from "@/components/Icons";

const specIcon = {
  Thickness: Layers,
  "Water Resistance": Droplet,
  "Wear Layer": Shield,
};

export default function ProductDetailClient({ product, variants = [], site }) {
  const { addItem, isInInquiry, openModal, setDrawerOpen } = useInquiry();
  const added = isInInquiry(product.slug);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  const downloadSpecSheet = () => {
    const lines = [
      `FLOORA — ${product.name}`,
      `${product.categoryName} · ${product.style} · ${product.material}`,
      "".padEnd(48, "-"),
      ...Object.entries(product.specs).map(([k, v]) => `${(k + ":").padEnd(20)} ${v}`),
      "".padEnd(48, "-"),
      `Suitable rooms: ${product.rooms.join(", ")}`,
      `Enquiries: ${site.phoneDisplay} · ${site.email}`,
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Floora-${product.slug}-spec-sheet.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleAdd = () => {
    addItem(product);
    setDrawerOpen(true);
  };

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* ---------- Gallery ---------- */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <button
            type="button"
            onClick={() => setZoom(true)}
            className="group relative block aspect-square w-full overflow-hidden rounded-3xl bg-cream shadow-soft cursor-zoom-in"
            aria-label="Zoom image"
          >
            <Image
              src={product.images[active]}
              alt={`${product.name} — view ${active + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-110"
            />
            <span className="absolute bottom-4 right-4 rounded-full bg-canvas/85 px-3 py-1.5 text-xs text-charcoal backdrop-blur">
              Click to zoom
            </span>
          </button>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={`relative aspect-square overflow-hidden rounded-xl bg-cream transition-all cursor-pointer ${
                  active === i ? "ring-2 ring-clay ring-offset-2 ring-offset-canvas" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="" fill sizes="120px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* ---------- Info ---------- */}
        <div>
          <p className="eyebrow">{product.categoryName} Collection</p>
          <h1 className="mt-2 font-display text-4xl text-charcoal sm:text-5xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3 text-sm text-stone">
            <span className="flex gap-0.5 text-clay">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4" />
              ))}
            </span>
            <span>Trade favourite</span>
          </div>

          <p className="mt-5 max-w-md text-base leading-relaxed text-stone">
            A {product.style.toLowerCase()}-look {product.categoryName.toLowerCase()} crafted in{" "}
            {product.material} — engineered for lasting beauty across{" "}
            {product.rooms.slice(0, 2).join(" and ").toLowerCase()} and beyond.
          </p>

          {/* Quick facts */}
          <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-3">
            {[
              ["Material", product.material],
              ["Size", product.size],
              ["Style", product.style],
              ["Format", product.format],
            ].map(([k, v]) => (
              <div key={k} className="bg-canvas p-4">
                <dt className="text-xs uppercase tracking-wide text-stone">{k}</dt>
                <dd className="mt-1 text-sm font-medium text-charcoal">{v}</dd>
              </div>
            ))}
          </dl>

          {/* Colour */}
          <div className="mt-7">
            <p className="field-label">Colour — <span className="text-charcoal">{product.color}</span></p>
            <div className="mt-3 grid grid-cols-5 gap-3 sm:grid-cols-6">
              {variants.map((v) => {
                const isCurrent = v.slug === product.slug;
                const thumb = (
                  <>
                    <div
                      className={`relative aspect-square h-14 w-14 overflow-hidden rounded-full bg-cream transition-all ${
                        isCurrent
                          ? "ring-2 ring-clay ring-offset-2 ring-offset-canvas"
                          : "opacity-90 group-hover:opacity-100 group-hover:scale-105"
                      }`}
                    >
                      <Image src={v.images[0]} alt={v.color} fill sizes="56px" className="object-cover" />
                      {isCurrent && (
                        <span className="absolute bottom-0 right-0 grid h-4 w-4 place-items-center rounded-full bg-clay text-white">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                      )}
                    </div>
                    <p className="mt-1 max-w-[3.5rem] truncate text-center text-[0.65rem] text-stone">{v.color}</p>
                  </>
                );
                return isCurrent ? (
                  <div key={v.slug} className="group flex flex-col items-center">
                    {thumb}
                  </div>
                ) : (
                  <Link
                    key={v.slug}
                    href={`/products/${v.slug}`}
                    title={`${v.name} — ${v.color}`}
                    className="group flex cursor-pointer flex-col items-center"
                  >
                    {thumb}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => openModal("quote", product)} className="btn-accent flex-1">
              Request Quote <ArrowRight className="h-4 w-4" />
            </button>
            <button type="button" onClick={handleAdd} className={`flex-1 ${added ? "btn-primary" : "btn-outline"}`}>
              {added ? (<><Check className="h-4 w-4" /> Added to Inquiry</>) : (<><Plus className="h-4 w-4" /> Add to Inquiry</>)}
            </button>
          </div>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => openModal("sample", product)} className="btn-ghost flex-1">
              Request a Sample
            </button>
            <button type="button" onClick={downloadSpecSheet} className="btn-ghost flex-1">
              <Download className="h-4 w-4" /> Spec Sheet
            </button>
          </div>

          {/* Spec highlights */}
          <div className="mt-8 space-y-3 rounded-2xl bg-cream p-5">
            {["Water Resistance", "Wear Layer", "Thickness"].map((k) => {
              const Icon = specIcon[k] || Layers;
              return (
                <div key={k} className="flex items-center gap-3 text-sm">
                  <Icon className="h-5 w-5 shrink-0 text-clay" />
                  <span className="text-stone">{k}:</span>
                  <span className="ml-auto font-medium text-charcoal">{product.specs[k]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- Full specifications ---------- */}
      <section className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">Technical</p>
          <h2 className="mt-2 font-display text-3xl text-charcoal">Specifications</h2>
          <dl className="mt-6 divide-y divide-charcoal/10 border-t border-charcoal/10">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="flex items-start justify-between gap-6 py-3.5">
                <dt className="text-sm text-stone">{k}</dt>
                <dd className="text-right text-sm font-medium text-charcoal">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="eyebrow">Where it works</p>
          <h2 className="mt-2 font-display text-3xl text-charcoal">Application areas</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {product.rooms.map((r) => (
              <span key={r} className="rounded-full border border-charcoal/15 bg-white px-4 py-2 text-sm text-ink">
                {r}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-charcoal/10 bg-cream p-6">
            <Ruler className="h-6 w-6 text-clay" />
            <h3 className="mt-3 font-display text-xl text-charcoal">Need help estimating?</h3>
            <p className="mt-1 text-sm text-stone">
              Tell us your area in square feet and we'll calculate quantities, wastage and a delivered price.
            </p>
            <button type="button" onClick={() => openModal("quote", product)} className="btn-primary mt-4">
              Get a tailored quote
            </button>
          </div>
        </div>
      </section>

      {/* ---------- Zoom lightbox ---------- */}
      {zoom && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-4 animate-fade-in" onClick={() => setZoom(false)}>
          <button
            type="button"
            aria-label="Close zoom"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-canvas hover:bg-white/20 cursor-pointer"
          >
            <Close className="h-6 w-6" />
          </button>
          <div className="relative h-full max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image src={product.images[active]} alt={`${product.name} enlarged`} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
