"use client";

import { useState } from "react";
import { site as staticSite, whatsappLink } from "@/lib/site";
import { useInquiry } from "@/components/InquiryContext";
import { WhatsApp, Phone, Headset, Close, Plus } from "@/components/Icons";

export default function FloatingContact({ site: siteProp }) {
  const site = siteProp || staticSite;
  const [open, setOpen] = useState(false);
  const { openModal } = useInquiry();

  const actions = [
    {
      label: "Chat on WhatsApp",
      sub: "Typically replies in minutes",
      icon: WhatsApp,
      className: "bg-[#25D366] text-white",
      href: whatsappLink(undefined, site.whatsapp),
      external: true,
    },
    {
      label: "Call us",
      sub: site.phoneDisplay,
      icon: Phone,
      className: "bg-charcoal text-canvas",
      href: `tel:${site.phone}`,
    },
    {
      label: "Request a callback",
      sub: "We'll ring you back",
      icon: Headset,
      className: "bg-clay text-white",
      onClick: () => {
        setOpen(false);
        openModal("callback");
      },
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {/* Expanded actions */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ease-luxe ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {actions.map((a) => {
          const Icon = a.icon;
          const inner = (
            <>
              <span className="hidden rounded-full bg-white px-4 py-2 text-right text-xs shadow-soft sm:block">
                <span className="block font-medium text-charcoal">{a.label}</span>
                <span className="block text-stone">{a.sub}</span>
              </span>
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full shadow-soft ${a.className}`}>
                <Icon className="h-5 w-5" />
              </span>
            </>
          );
          const cls = "flex items-center gap-3 cursor-pointer";
          return a.href ? (
            <a
              key={a.label}
              href={a.href}
              target={a.external ? "_blank" : undefined}
              rel={a.external ? "noopener noreferrer" : undefined}
              className={cls}
              aria-label={a.label}
            >
              {inner}
            </a>
          ) : (
            <button key={a.label} type="button" onClick={a.onClick} className={cls} aria-label={a.label}>
              {inner}
            </button>
          );
        })}
      </div>

      {/* Toggle FAB */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        className={`grid h-14 w-14 place-items-center rounded-full text-white shadow-soft-lg transition-all duration-300 ease-luxe hover:scale-105 cursor-pointer ${
          open ? "bg-charcoal rotate-90" : "bg-[#25D366]"
        }`}
      >
        {open ? <Close className="h-6 w-6" /> : <WhatsApp className="h-7 w-7" />}
      </button>
    </div>
  );
}
