"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import {
  products as staticProducts,
  categories as staticCategories,
  colorsList as staticColorsList,
  rooms as staticRooms,
} from "@/lib/products";
import { Close, ChevronDown, Search } from "@/components/Icons";

const emptyFilters = { category: [], finish: [], style: [], color: [], size: [], room: [] };

function FacetGroup({ title, options, selected, onToggle, renderSwatch }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-charcoal/10 py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-roman text-xs uppercase tracking-luxe text-charcoal">{title}</span>
        <ChevronDown className={`h-4 w-4 text-stone transition-transform duration-300 ${open ? "" : "-rotate-90"}`} />
      </button>
      {open && (
        <div className="mt-4 space-y-2.5">
          {options.map((opt) => {
            const value = typeof opt === "string" ? opt : opt.name;
            const checked = selected.includes(value);
            return (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-3 text-sm text-ink transition-colors hover:text-charcoal"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(value)}
                  className="peer sr-only"
                />
                <span
                  className={`grid h-4 w-4 place-items-center rounded border transition-colors ${
                    checked ? "border-clay bg-clay text-white" : "border-charcoal/30 bg-white"
                  }`}
                >
                  {checked && (
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12.5 10 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {renderSwatch && (
                  <span
                    className="h-4 w-4 rounded-full border border-charcoal/15"
                    style={{ backgroundColor: opt.hex }}
                  />
                )}
                <span>{value}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function CatalogClient({
  products: productsProp,
  categories: categoriesProp,
  colorsList: colorsListProp,
  rooms: roomsProp,
} = {}) {
  const products = productsProp?.length ? productsProp : staticProducts;
  const categories = categoriesProp?.length ? categoriesProp : staticCategories;
  const colorsList = colorsListProp?.length ? colorsListProp : staticColorsList;
  const rooms = roomsProp?.length ? roomsProp : staticRooms;
  // Finish/style/size facets are derived from whatever the current catalogue
  // actually contains, so a CMS-driven product list stays in sync with no
  // separate taxonomy list to maintain.
  const finishes = useMemo(() => [...new Set(products.map((p) => p.finish))].sort(), [products]);
  const styles = useMemo(() => [...new Set(products.map((p) => p.style))].sort(), [products]);
  const sizes = useMemo(() => [...new Set(products.map((p) => p.size))].sort(), [products]);

  const params = useSearchParams();
  const [filters, setFilters] = useState(emptyFilters);
  const [query, setQuery] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);

  // Seed from URL (?category=, ?q=)
  useEffect(() => {
    const cat = params.get("category");
    const q = params.get("q");
    setFilters((f) => ({ ...emptyFilters, category: cat ? [cat] : [] }));
    setQuery(q || "");
  }, [params]);

  const toggle = (key, value) =>
    setFilters((f) => ({
      ...f,
      [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value],
    }));

  const clearAll = () => {
    setFilters(emptyFilters);
    setQuery("");
  };

  const activeCount =
    Object.values(filters).reduce((n, arr) => n + arr.length, 0) + (query ? 1 : 0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (filters.category.length && !filters.category.includes(p.category)) return false;
      if (filters.finish.length && !filters.finish.includes(p.finish)) return false;
      if (filters.style.length && !filters.style.includes(p.style)) return false;
      if (filters.color.length && !filters.color.includes(p.color)) return false;
      if (filters.size.length && !filters.size.includes(p.size)) return false;
      if (filters.room.length && !p.rooms.some((r) => filters.room.includes(r))) return false;
      if (q) {
        const hay = `${p.name} ${p.style} ${p.color} ${p.finish} ${p.category} ${p.rooms.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [filters, query]);

  const FiltersPanel = (
    <>
      <FacetGroup
        title="Material"
        options={categories.map((c) => c.short)}
        selected={filters.category.map((slug) => categories.find((c) => c.slug === slug)?.short || slug)}
        onToggle={(label) => {
          const slug = categories.find((c) => c.short === label)?.slug;
          if (slug) toggle("category", slug);
        }}
      />
      <FacetGroup title="Finish" options={finishes} selected={filters.finish} onToggle={(v) => toggle("finish", v)} />
      <FacetGroup title="Style" options={styles} selected={filters.style} onToggle={(v) => toggle("style", v)} />
      <FacetGroup title="Colour" options={colorsList} selected={filters.color} onToggle={(v) => toggle("color", v)} renderSwatch />
      <FacetGroup title="Size" options={sizes} selected={filters.size} onToggle={(v) => toggle("size", v)} />
      <FacetGroup title="Room / Application" options={rooms} selected={filters.room} onToggle={(v) => toggle("room", v)} />
    </>
  );

  return (
    <div className="container-luxe py-12 lg:py-16">
      {/* Page heading */}
      <div className="max-w-2xl">
        <p className="eyebrow">The Catalog</p>
        <h1 className="mt-3 font-display text-4xl text-balance sm:text-5xl">Explore every surface</h1>
        <p className="mt-3 text-base text-stone">
          Filter by material, finish, colour, style, size and room to find the perfect match for your project.
        </p>
      </div>

      {/* Search + mobile filter trigger */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, colour or style…"
            aria-label="Search products"
            className="field pl-12"
          />
        </div>
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="btn-outline shrink-0 lg:hidden"
        >
          Filters{activeCount > 0 ? ` (${activeCount})` : ""}
        </button>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl text-charcoal">Filters</h2>
              {activeCount > 0 && (
                <button onClick={clearAll} className="text-xs text-clay hover:underline cursor-pointer">
                  Clear all
                </button>
              )}
            </div>
            <div className="mt-2">{FiltersPanel}</div>
          </div>
        </aside>

        {/* Results */}
        <div>
          <p className="mb-6 text-sm text-stone">
            Showing <span className="font-medium text-charcoal">{filtered.length}</span> of {products.length} surfaces
          </p>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-charcoal/20 bg-cream/50 py-20 text-center">
              <p className="font-display text-2xl text-charcoal">No surfaces match those filters</p>
              <p className="mt-2 text-sm text-stone">Try removing a filter or broadening your search.</p>
              <button onClick={clearAll} className="btn-primary mt-6">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p, i) => (
                <ProductCard key={p.slug} product={p} priority={i < 3} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter sheet */}
      {sheetOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm animate-fade-in" onClick={() => setSheetOpen(false)} aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-canvas p-6 shadow-soft-lg animate-fade-up">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-display text-2xl text-charcoal">Filters</h2>
              <button
                onClick={() => setSheetOpen(false)}
                aria-label="Close filters"
                className="grid h-10 w-10 place-items-center rounded-full text-stone hover:bg-charcoal/5 cursor-pointer"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>
            {FiltersPanel}
            <div className="sticky bottom-0 mt-4 flex gap-3 bg-canvas pt-4">
              <button onClick={clearAll} className="btn-outline flex-1">
                Clear
              </button>
              <button onClick={() => setSheetOpen(false)} className="btn-accent flex-1">
                Show {filtered.length} results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
