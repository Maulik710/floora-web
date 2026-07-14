"use client";

import Image from "next/image";
import Link from "next/link";
import { useInquiry } from "@/components/InquiryContext";
import { Close, Bag, ArrowRight, Check } from "@/components/Icons";

export default function InquiryDrawer() {
  const { drawerOpen, setDrawerOpen, items, removeItem, clear, openModal } = useInquiry();

  if (!drawerOpen) return null;

  const sendCombined = () => {
    setDrawerOpen(false);
    openModal("quote"); // quote modal detects items in the list
  };

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Inquiry list">
      <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm animate-fade-in" onClick={() => setDrawerOpen(false)} aria-hidden />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-canvas shadow-soft-lg animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
          <div>
            <p className="eyebrow">Your selection</p>
            <h2 className="font-display text-2xl text-charcoal">Inquiry List</h2>
          </div>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close inquiry list"
            className="grid h-10 w-10 place-items-center rounded-full text-stone hover:bg-charcoal/5 hover:text-charcoal cursor-pointer"
          >
            <Close className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-cream text-taupe">
              <Bag className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display text-xl text-charcoal">Your list is empty</h3>
            <p className="mt-2 text-sm text-stone">
              Add surfaces you love and send them as one combined inquiry — no need to ask page by page.
            </p>
            <Link href="/products" onClick={() => setDrawerOpen(false)} className="btn-primary mt-6">
              Browse products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.slug} className="flex gap-4">
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={() => setDrawerOpen(false)}
                      className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream"
                    >
                      <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                    </Link>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <Link
                        href={`/products/${item.slug}`}
                        onClick={() => setDrawerOpen(false)}
                        className="font-display text-lg leading-tight text-charcoal hover:text-clay"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-stone">
                        {item.categoryName} · {item.material} · {item.size}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        className="mt-auto self-start text-xs text-stone underline-offset-2 transition-colors hover:text-clay hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={clear}
                className="mt-6 text-xs text-stone underline-offset-2 transition-colors hover:text-charcoal hover:underline cursor-pointer"
              >
                Clear all
              </button>
            </div>

            {/* Footer */}
            <div className="border-t border-charcoal/10 bg-cream/60 px-6 py-5">
              <div className="mb-3 flex items-center gap-2 text-sm text-ink">
                <Check className="h-4 w-4 text-clay" />
                <span>
                  <span className="font-medium text-charcoal">{items.length}</span> surface
                  {items.length === 1 ? "" : "s"} ready to send as one inquiry
                </span>
              </div>
              <button type="button" onClick={sendCombined} className="btn-accent w-full">
                Send combined inquiry <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="mt-2 w-full text-center text-xs text-stone transition-colors hover:text-charcoal cursor-pointer"
              >
                Continue browsing
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
