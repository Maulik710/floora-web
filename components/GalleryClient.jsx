"use client";

import Image from "next/image";
import { useState } from "react";
import { Close, ArrowUpRight } from "@/components/Icons";

const tabs = ["All", "Living Room", "Bathroom", "Kitchen", "Commercial"];

// Curated project shots tagged by room — used whenever no CMS gallery items are available
const fallbackGallery = [
  { id: "1600585154340-be6161a56a0c", room: "Living Room", caption: "Nordic Oak SPC · Private Residence" },
  { id: "1600210492493-0946911123ea", room: "Bathroom", caption: "Carrara Statuario · Spa Bath" },
  { id: "1600566753086-00f18fb6b3ea", room: "Living Room", caption: "Urban Cement Porcelain · Loft" },
  { id: "1556909114-f6e7ad7d3136", room: "Kitchen", caption: "Highland Ash WPC · Open Kitchen" },
  { id: "1600607687939-ce8a6c25118c", room: "Commercial", caption: "Noir Plank · Boutique Hotel" },
  { id: "1600566752355-35792bedcfea", room: "Living Room", caption: "Smoked Walnut SPC · Lounge" },
  { id: "1616486338812-3dadae4b4ace", room: "Bathroom", caption: "Travertine Sand · Ensuite" },
  { id: "1600210492486-724fe5c67fb0", room: "Kitchen", caption: "Alabaster Stone · Galley Kitchen" },
  { id: "1615875605825-5eb9bb5d52ac", room: "Commercial", caption: "Atelier Concrete · Showroom" },
  { id: "1586023492125-27b2c045efd7", room: "Living Room", caption: "Manor Oak Laminate · Family Room" },
  { id: "1565538810643-b5bdb714032a", room: "Commercial", caption: "Urban Cement · Café Floor" },
  { id: "1616594039964-ae9021a400a0", room: "Bathroom", caption: "Linen Greige · Powder Room" },
];

export default function GalleryClient({ items: itemsProp }) {
  const gallery = itemsProp?.length ? itemsProp : fallbackGallery;
  const [tab, setTab] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const items = tab === "All" ? gallery : gallery.filter((g) => g.room === tab);

  return (
    <div className="container-luxe py-12 lg:py-16">
      <div className="max-w-2xl">
        <p className="eyebrow">Inspiration</p>
        <h1 className="mt-3 font-display text-4xl text-balance sm:text-5xl">Spaces brought to life</h1>
        <p className="mt-3 text-base text-stone">
          A curated gallery of completed homes and commercial interiors finished in Floora surfaces. Filter by room to
          picture your own space.
        </p>
      </div>

      {/* Tabs */}
      <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition-colors cursor-pointer ${
              tab === t
                ? "border-charcoal bg-charcoal text-canvas"
                : "border-charcoal/15 bg-white text-stone hover:border-charcoal/40 hover:text-charcoal"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((g, i) => (
          <button
            key={g.id + i}
            type="button"
            onClick={() => setLightbox(g)}
            className="group relative block w-full overflow-hidden rounded-2xl bg-cream shadow-card cursor-pointer"
          >
            <Image
              src={g.image || `https://images.unsplash.com/photo-${g.id}?auto=format&fit=crop&w=900&q=80`}
              alt={g.caption}
              width={900}
              height={i % 3 === 0 ? 1100 : i % 2 === 0 ? 700 : 900}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="text-left">
                <p className="text-xs uppercase tracking-wide text-clay">{g.room}</p>
                <p className="font-display text-lg text-canvas">{g.caption}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-canvas" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-canvas hover:bg-white/20 cursor-pointer"
          >
            <Close className="h-6 w-6" />
          </button>
          <figure className="relative max-h-[88vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[80vh] w-full">
              <Image
                src={lightbox.image || `https://images.unsplash.com/photo-${lightbox.id}?auto=format&fit=crop&w=1800&q=80`}
                alt={lightbox.caption}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-canvas/80">
              <span className="text-clay">{lightbox.room}</span> · {lightbox.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
