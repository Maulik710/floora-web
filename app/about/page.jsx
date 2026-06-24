import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ModalButton from "@/components/ModalButton";
import { ArrowRight, Shield, Palette, Headset } from "@/components/Icons";

export const metadata = {
  title: "About",
  description:
    "The Floora story — fifteen years crafting premium SPC, vinyl, laminate and porcelain surfaces for architects, designers and homeowners.",
};

const values = [
  { icon: Shield, title: "Integrity in materials", text: "We specify only what we would lay in our own homes — tested, certified, honest." },
  { icon: Palette, title: "Design-led thinking", text: "Curated palettes and finishes developed with architects and interior designers." },
  { icon: Headset, title: "Service that stays", text: "From first sample to final installation, a dedicated advisor walks beside you." },
];

const milestones = [
  ["2009", "Founded in Morbi", "Began as a small porcelain trader with a single kiln partner."],
  ["2014", "First SPC line", "Introduced rigid-core waterproof flooring to the Indian market."],
  ["2019", "Experience Centre", "Opened our 12,000 sq.ft showroom for architects and homeowners."],
  ["2024", "500+ finishes", "Five collections spanning wood, stone, marble and concrete looks."],
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-luxe grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-balance sm:text-6xl">
              Fifteen years of surfaces with soul
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
              Floora began with a simple belief — that the surfaces underfoot shape how a space feels. Today we craft
              premium flooring and tile for the people who care most about getting it right.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/products" className="btn-primary">
                Explore products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Visit our showroom
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
              alt="Floora experience centre interior"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-24">
        <div className="container-luxe">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-5 font-display text-3xl leading-snug text-charcoal text-balance sm:text-4xl">
              “To make world-class surfaces accessible — pairing the warmth of natural materials with the resilience of
              modern engineering, so every space can feel considered, calm and built to last.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* Manufacturing / showroom imagery */}
      <section className="container-luxe py-24">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["1581094794329-c8112a89af12", "Precision manufacturing", "sm:col-span-2 aspect-[16/10]"],
            ["1565538810643-b5bdb714032a", "Quality control", "aspect-[16/10] sm:aspect-auto"],
            ["1586023492125-27b2c045efd7", "Showroom displays", "aspect-[16/10] sm:aspect-auto"],
            ["1600210492486-724fe5c67fb0", "Curated finishes", "sm:col-span-2 aspect-[16/10]"],
          ].map(([id, label, cls]) => (
            <Reveal key={id} className={`group relative overflow-hidden rounded-2xl bg-cream shadow-card ${cls}`}>
              <Image
                src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`}
                alt={label}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-xl text-canvas">{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-luxe pb-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What we stand for</p>
          <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">Principles underfoot</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 90} className="rounded-2xl border border-charcoal/10 bg-canvas p-8">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-clay/10 text-clay">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-charcoal">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{v.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-luxe py-24">
        <Reveal>
          <p className="eyebrow">The journey</p>
          <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">Milestones</h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map(([year, title, text], i) => (
            <Reveal key={year} delay={i * 80} className="bg-canvas p-7">
              <p className="font-display text-4xl text-clay">{year}</p>
              <h3 className="mt-3 font-display text-lg text-charcoal">{title}</h3>
              <p className="mt-1.5 text-sm text-stone">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="container-luxe pb-24">
        <Reveal className="rounded-3xl bg-charcoal px-6 py-16 text-center sm:px-12">
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              ["15+", "Years of craft"],
              ["10,000+", "Projects delivered"],
              ["98%", "Client satisfaction"],
            ].map(([big, small]) => (
              <div key={small}>
                <p className="font-display text-5xl text-canvas">{big}</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-canvas/60">{small}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ModalButton type="quote" className="btn-accent">
              Start your project <ArrowRight className="h-4 w-4" />
            </ModalButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
