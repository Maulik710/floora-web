"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { useInquiry } from "@/components/InquiryContext";
import { Search, Menu, Close, Bag, Phone, ArrowRight } from "@/components/Icons";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { count, setDrawerOpen, openModal } = useInquiry();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const submitSearch = (e) => {
    e.preventDefault();
    router.push(query.trim() ? `/products?q=${encodeURIComponent(query.trim())}` : "/products");
    setSearchOpen(false);
    setMobileOpen(false);
  };

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Slim top utility bar */}
      <div className="hidden bg-charcoal text-canvas/80 md:block">
        <div className="container-luxe flex h-9 items-center justify-between text-xs tracking-wide">
          <p className="text-canvas/70">Trade & retail enquiries welcome — samples shipped nationwide</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phone}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-clay">
              <Phone className="h-3.5 w-3.5" /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-clay">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ease-luxe ${
          scrolled
            ? "border-b border-charcoal/10 bg-canvas/85 backdrop-blur-md shadow-[0_1px_24px_-12px_rgba(28,27,25,0.25)]"
            : "border-b border-transparent bg-canvas/70 backdrop-blur-sm"
        }`}
      >
        <div className="container-luxe flex h-16 items-center justify-between gap-4 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center" aria-label={`${site.name} home`}>
            <Image
              src="/assets/logo/Floora_logo_dark.png"
              alt={`${site.name} logo`}
              width={1403}
              height={311}
              quality={100}
              priority
              className="h-9 w-auto lg:h-10"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-sm tracking-wide transition-colors ${
                  isActive(item.href) ? "text-charcoal after:w-full" : "text-stone hover:text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="Search products"
              aria-expanded={searchOpen}
              className="grid h-10 w-10 place-items-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 cursor-pointer"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label={`Open inquiry list, ${count} item${count === 1 ? "" : "s"}`}
              className="relative grid h-10 w-10 place-items-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 cursor-pointer"
            >
              <Bag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-[1.05rem] min-w-[1.05rem] place-items-center rounded-full bg-clay px-1 text-[0.625rem] font-semibold leading-none text-white">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => openModal("quote")}
              className="btn-accent ml-1 hidden h-10 px-5 py-0 text-xs sm:inline-flex"
            >
              Get Quote
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 cursor-pointer lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Expandable search */}
        <div
          className={`overflow-hidden border-charcoal/10 bg-canvas/95 backdrop-blur-md transition-all duration-300 ease-luxe ${
            searchOpen ? "max-h-24 border-t" : "max-h-0"
          }`}
        >
          <form onSubmit={submitSearch} className="container-luxe flex items-center gap-3 py-4">
            <Search className="h-5 w-5 shrink-0 text-stone" />
            <input
              autoFocus={searchOpen}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search surfaces — oak, marble, matte, porcelain…"
              aria-label="Search products"
              className="w-full bg-transparent py-1 text-base text-charcoal placeholder:text-stone/60 focus:outline-none"
            />
            <button type="submit" className="btn-primary h-9 px-5 py-0 text-xs">
              Search
            </button>
          </form>
        </div>
      </header>

      {/* Mobile drawer menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-canvas shadow-soft-lg animate-slide-in">
            <div className="flex h-16 items-center justify-between border-b border-charcoal/10 px-5">
              <Image
                src="/assets/logo/Floora_logo_dark.png"
                alt={`${site.name} logo`}
                width={1403}
                height={311}
                quality={100}
                className="h-8 w-auto"
              />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full text-charcoal hover:bg-charcoal/5 cursor-pointer"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={submitSearch} className="flex items-center gap-2 border-b border-charcoal/10 px-5 py-4">
              <Search className="h-5 w-5 shrink-0 text-stone" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search surfaces…"
                aria-label="Search products"
                className="w-full bg-transparent text-base text-charcoal placeholder:text-stone/60 focus:outline-none"
              />
            </form>

            <nav className="flex-1 overflow-y-auto px-5 py-2" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between border-b border-charcoal/5 py-4 font-display text-2xl transition-colors ${
                    isActive(item.href) ? "text-clay" : "text-charcoal hover:text-clay"
                  }`}
                >
                  {item.label}
                  <ArrowRight className="h-5 w-5 opacity-40" />
                </Link>
              ))}
            </nav>

            <div className="space-y-3 border-t border-charcoal/10 p-5">
              <button type="button" onClick={() => openModal("quote")} className="btn-accent w-full">
                Get a Quote
              </button>
              <a href={`tel:${site.phone}`} className="btn-outline w-full">
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
