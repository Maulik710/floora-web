"use client";

import { useEffect, useState } from "react";
import { useInquiry } from "@/components/InquiryContext";
import Modal from "@/components/Modal";
import { Check, ArrowRight } from "@/components/Icons";

const config = {
  quote: {
    eyebrow: "No obligation",
    title: "Request a Quote",
    intro: "Share a few details and our team will prepare pricing tailored to your project.",
    cta: "Send quote request",
  },
  sample: {
    eyebrow: "Free for trade",
    title: "Request a Sample",
    intro: "Feel the surface in your own space. We'll ship physical samples to your address.",
    cta: "Send sample request",
  },
  callback: {
    eyebrow: "We'll call you",
    title: "Request a Callback",
    intro: "Leave your number and a preferred time — a Floora advisor will call you back.",
    cta: "Request callback",
  },
};

function Success({ title, onClose }) {
  return (
    <div className="py-6 text-center">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-clay/15 text-clay">
        <Check className="h-8 w-8" />
      </div>
      <h3 className="mt-5 font-display text-2xl text-charcoal">Thank you</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm text-stone">
        Your {title.toLowerCase()} has been received. A member of our team will be in touch shortly.
      </p>
      <button type="button" onClick={onClose} className="btn-primary mt-6">
        Close
      </button>
    </div>
  );
}

export default function GlobalModals() {
  const { modal, closeModal, items } = useInquiry();
  const [sent, setSent] = useState(false);

  const type = modal?.type;
  const product = modal?.product;
  const cfg = type ? config[type] : null;

  // Reset success state whenever a modal opens/closes
  useEffect(() => {
    setSent(false);
  }, [modal]);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Modal open={!!modal} onClose={closeModal} eyebrow={cfg?.eyebrow} title={sent ? "" : cfg?.title}>
      {!cfg ? null : sent ? (
        <Success title={cfg.title} onClose={closeModal} />
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <p className="-mt-2 text-sm text-stone">{cfg.intro}</p>

          {product && (
            <div className="flex items-center gap-3 rounded-xl border border-charcoal/10 bg-cream px-4 py-3">
              <span className="text-xs uppercase tracking-wide text-stone">Product</span>
              <span className="font-medium text-charcoal">{product.name}</span>
              {product.finish && <span className="ml-auto text-xs text-stone">{product.finish}</span>}
            </div>
          )}

          {type === "quote" && !product && items.length > 0 && (
            <div className="rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm text-stone">
              Including <span className="font-medium text-charcoal">{items.length}</span> item
              {items.length === 1 ? "" : "s"} from your inquiry list.
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="m-name" className="field-label">Full name</label>
              <input id="m-name" required className="field" placeholder="Jane Architect" />
            </div>
            <div>
              <label htmlFor="m-phone" className="field-label">Phone</label>
              <input id="m-phone" type="tel" required className="field" placeholder="+91 •••••" />
            </div>
          </div>

          {type !== "callback" && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="m-email" className="field-label">Email</label>
                <input id="m-email" type="email" required className="field" placeholder="you@studio.com" />
              </div>
              <div>
                <label htmlFor="m-city" className="field-label">{type === "sample" ? "Shipping city" : "City / Project"}</label>
                <input id="m-city" className="field" placeholder="Ahmedabad" />
              </div>
            </div>
          )}

          {type === "callback" && (
            <div>
              <label htmlFor="m-time" className="field-label">Preferred time</label>
              <select id="m-time" className="field">
                <option>Morning (9–12)</option>
                <option>Afternoon (12–4)</option>
                <option>Evening (4–7)</option>
              </select>
            </div>
          )}

          {type === "sample" && (
            <div>
              <label htmlFor="m-address" className="field-label">Shipping address</label>
              <textarea id="m-address" rows={2} className="field resize-none" placeholder="Street, area, pincode" />
            </div>
          )}

          {type === "quote" && (
            <div>
              <label htmlFor="m-msg" className="field-label">Project details (optional)</label>
              <textarea id="m-msg" rows={3} className="field resize-none" placeholder="Area in sq.ft, rooms, timeline…" />
            </div>
          )}

          <button type="submit" className="btn-accent w-full">
            {cfg.cta} <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-center text-xs text-stone/70">
            By submitting you agree to be contacted by Floora regarding your enquiry.
          </p>
        </form>
      )}
    </Modal>
  );
}
