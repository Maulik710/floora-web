"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav } from "@/lib/site";
import { Phone, Mail, MapPin, ArrowRight, Check, Instagram, Pinterest, LinkedIn, Houzz } from "@/components/Icons";

const socialIcons = { Instagram, Pinterest, LinkedIn, Houzz };

export default function Footer({ site, categories = [] }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <footer className="mt-24 bg-charcoal text-canvas/70">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="container-luxe grid gap-8 py-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-clay">The Floora Journal</p>
            <h3 className="mt-3 font-display text-3xl text-canvas md:text-4xl">
              New surfaces, design notes & trade offers
            </h3>
            <p className="mt-2 max-w-md text-sm text-canvas/60">
              Join our newsletter for early access to collections and curated inspiration. No clutter, only good design.
            </p>
          </div>
          <form onSubmit={subscribe} className="flex w-full flex-col gap-3 sm:flex-row md:justify-end">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-canvas placeholder:text-canvas/40 transition-colors focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30 sm:max-w-xs"
            />
            <button type="submit" className="btn-accent shrink-0">
              {done ? (
                <>
                  <Check className="h-4 w-4" /> Subscribed
                </>
              ) : (
                <>
                  Subscribe <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Image
            src="/assets/logo/Floora_logo_light.png"
            alt={`${site.name} logo`}
            width={1403}
            height={311}
            quality={100}
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-canvas/60">{site.description}</p>
          <div className="mt-6 flex items-center gap-3">
            {site.social.map((s) => {
              const Icon = socialIcons[s.name];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-canvas/70 transition-colors hover:border-clay hover:text-clay"
                >
                  {Icon ? <Icon className="h-4.5 w-4.5" /> : s.name[0]}
                </a>
              );
            })}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-roman text-xs uppercase tracking-luxe text-canvas/50">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-canvas/70 transition-colors hover:text-canvas">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h4 className="font-roman text-xs uppercase tracking-luxe text-canvas/50">Collections</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products?category=${c.slug}`}
                  className="link-underline text-canvas/70 transition-colors hover:text-canvas"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-roman text-xs uppercase tracking-luxe text-canvas/50">Visit & Contact</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-clay" />
              <span className="text-canvas/70">{site.addressLines.join(", ")}</span>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="flex items-center gap-3 text-canvas/70 transition-colors hover:text-canvas">
                <Phone className="h-4.5 w-4.5 shrink-0 text-clay" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-canvas/70 transition-colors hover:text-canvas">
                <Mail className="h-4.5 w-4.5 shrink-0 text-clay" /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-canvas/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Floora Surfaces. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-canvas/70">Privacy</Link>
            <Link href="#" className="transition-colors hover:text-canvas/70">Terms</Link>
            <span className="text-canvas/30">Crafted for considered spaces</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
