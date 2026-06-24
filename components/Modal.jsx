"use client";

import { useEffect } from "react";
import { Close } from "@/components/Icons";

export default function Modal({ open, onClose, title, eyebrow, children, maxWidth = "max-w-lg" }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm animate-fade-in" onClick={onClose} aria-hidden />
      <div
        className={`relative z-10 w-full ${maxWidth} max-h-[92vh] overflow-y-auto rounded-t-3xl bg-canvas p-6 shadow-soft-lg animate-fade-up sm:rounded-3xl sm:p-8`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-stone transition-colors hover:bg-charcoal/5 hover:text-charcoal cursor-pointer"
        >
          <Close className="h-5 w-5" />
        </button>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="mt-2 font-display text-3xl text-charcoal">{title}</h2>}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
