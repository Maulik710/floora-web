"use client";

import { useState } from "react";
import { Check, ArrowRight } from "@/components/Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl border border-charcoal/10 bg-cream p-10 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-clay/15 text-clay">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl text-charcoal">Message sent</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-stone">
          Thank you for reaching out. A Floora advisor will respond within one business day.
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn-primary mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-charcoal/10 bg-canvas p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="field-label">Full name</label>
          <input id="c-name" required className="field" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="c-phone" className="field-label">Phone</label>
          <input id="c-phone" type="tel" required className="field" placeholder="+91 •••••" />
        </div>
        <div>
          <label htmlFor="c-email" className="field-label">Email</label>
          <input id="c-email" type="email" required className="field" placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="c-subject" className="field-label">I'm interested in</label>
          <select id="c-subject" className="field">
            <option>General enquiry</option>
            <option>Product quote</option>
            <option>Samples</option>
            <option>Trade / project pricing</option>
            <option>Showroom visit</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="c-message" className="field-label">Message</label>
        <textarea id="c-message" rows={5} className="field resize-none" placeholder="Tell us about your project…" />
      </div>
      <button type="submit" className="btn-accent mt-6 w-full sm:w-auto">
        Send message <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
