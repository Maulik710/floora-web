import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ModalButton from "@/components/ModalButton";
import { site as staticSite, whatsappLink } from "@/lib/site";
import { getSiteSettings } from "@/lib/cms";
import { Phone, Mail, MapPin, Clock, WhatsApp, Headset } from "@/components/Icons";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Floora — call, email, WhatsApp or visit our experience centre in Morbi, Gujarat.",
};

export default async function ContactPage() {
  const site = (await getSiteSettings()) || staticSite;
  return (
    <div className="container-luxe py-12 lg:py-16">
      {/* Heading */}
      <div className="max-w-2xl">
        <p className="eyebrow">Get in touch</p>
        <h1 className="mt-3 font-display text-4xl text-balance sm:text-5xl">Let's talk surfaces</h1>
        <p className="mt-3 text-base text-stone">
          Whether you're specifying for a project or finishing a home, our team is here to help. Reach us however suits
          you best.
        </p>
      </div>

      {/* Quick contact tiles */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a href={`tel:${site.phone}`} className="group rounded-2xl border border-charcoal/10 bg-canvas p-6 transition-colors hover:border-clay/50 hover:bg-white">
          <Phone className="h-6 w-6 text-clay" />
          <p className="mt-4 text-xs uppercase tracking-wide text-stone">Call us</p>
          <p className="mt-1 font-display text-xl text-charcoal">{site.phoneDisplay}</p>
        </a>
        <a href={`mailto:${site.email}`} className="group rounded-2xl border border-charcoal/10 bg-canvas p-6 transition-colors hover:border-clay/50 hover:bg-white">
          <Mail className="h-6 w-6 text-clay" />
          <p className="mt-4 text-xs uppercase tracking-wide text-stone">Email</p>
          <p className="mt-1 break-all font-display text-xl text-charcoal">{site.email}</p>
        </a>
        <a href={whatsappLink(undefined, site.whatsapp)} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-charcoal/10 bg-canvas p-6 transition-colors hover:border-clay/50 hover:bg-white">
          <WhatsApp className="h-6 w-6 text-[#25D366]" />
          <p className="mt-4 text-xs uppercase tracking-wide text-stone">WhatsApp</p>
          <p className="mt-1 font-display text-xl text-charcoal">Chat now</p>
        </a>
        <div className="rounded-2xl border border-charcoal/10 bg-charcoal p-6 text-canvas">
          <Headset className="h-6 w-6 text-clay" />
          <p className="mt-4 text-xs uppercase tracking-wide text-canvas/60">Prefer a call back?</p>
          <ModalButton type="callback" className="mt-1 font-display text-xl text-canvas underline-offset-4 hover:underline cursor-pointer">
            Request a callback
          </ModalButton>
        </div>
      </div>

      {/* Form + details */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <h2 className="font-display text-2xl text-charcoal">Send us a message</h2>
          <p className="mt-1 text-sm text-stone">We typically reply within one business day.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-8">
          <div>
            <h2 className="font-display text-2xl text-charcoal">Experience Centre</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <span className="text-ink">{site.addressLines.join(", ")}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <a href={`tel:${site.phone}`} className="text-ink hover:text-charcoal">{site.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <a href={`mailto:${site.email}`} className="text-ink hover:text-charcoal">{site.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-display text-xl text-charcoal">
              <Clock className="h-5 w-5 text-clay" /> Business hours
            </h3>
            <ul className="mt-4 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {site.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-stone">{h.day}</span>
                  <span className="font-medium text-charcoal">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Map */}
      <div className="mt-14 overflow-hidden rounded-3xl border border-charcoal/10 shadow-card">
        <iframe
          title={`Map to ${site.name}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=12&output=embed`}
          className="h-[360px] w-full grayscale-[0.2]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
