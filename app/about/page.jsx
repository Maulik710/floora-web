import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ModalButton from "@/components/ModalButton";
import { getAboutPage } from "@/lib/cms";
import { ArrowRight, Shield, Palette, Headset } from "@/components/Icons";

export const metadata = {
  title: "About",
  description:
    "The Floora story — fifteen years crafting premium SPC, vinyl, laminate and porcelain surfaces for architects, designers and homeowners.",
};

const iconMap = { Shield, Palette, Headset };

// Fixed presentational grid spans for the manufacturing gallery — layout, not
// content, so it stays here rather than in the CMS.
const manufacturingLayout = [
  "sm:col-span-2 aspect-[16/10]",
  "aspect-[16/10] sm:aspect-auto",
  "aspect-[16/10] sm:aspect-auto",
  "sm:col-span-2 aspect-[16/10]",
];

const fallbackAbout = {
  heroEyebrow: "Our Story",
  heroHeading: "Fifteen years of surfaces with soul",
  heroDescription:
    "Floora began with a simple belief — that the surfaces underfoot shape how a space feels. Today we craft premium flooring and tile for the people who care most about getting it right.",
  heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
  missionQuote:
    "To make world-class surfaces accessible — pairing the warmth of natural materials with the resilience of modern engineering, so every space can feel considered, calm and built to last.",
  manufacturingImages: [
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      label: "Precision manufacturing",
    },
    {
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
      label: "Quality control",
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      label: "Showroom displays",
    },
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      label: "Curated finishes",
    },
  ],
  values: [
    { icon: "Shield", title: "Integrity in materials", text: "We specify only what we would lay in our own homes — tested, certified, honest." },
    { icon: "Palette", title: "Design-led thinking", text: "Curated palettes and finishes developed with architects and interior designers." },
    { icon: "Headset", title: "Service that stays", text: "From first sample to final installation, a dedicated advisor walks beside you." },
  ],
  milestones: [
    { year: "2009", title: "Founded in Morbi", text: "Began as a small porcelain trader with a single kiln partner." },
    { year: "2014", title: "First SPC line", text: "Introduced rigid-core waterproof flooring to the Indian market." },
    { year: "2019", title: "Experience Centre", text: "Opened our 12,000 sq.ft showroom for architects and homeowners." },
    { year: "2024", title: "500+ finishes", text: "Five collections spanning wood, stone, marble and concrete looks." },
  ],
  stats: [
    { value: "15+", label: "Years of craft" },
    { value: "10,000+", label: "Projects delivered" },
    { value: "98%", label: "Client satisfaction" },
  ],
};

export default async function AboutPage() {
  const cmsAbout = await getAboutPage();
  const about = cmsAbout || fallbackAbout;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-luxe grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <p className="eyebrow">{about.heroEyebrow}</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-balance sm:text-6xl">
              {about.heroHeading}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">{about.heroDescription}</p>
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
              src={about.heroImage}
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
              “{about.missionQuote}”
            </p>
          </Reveal>
        </div>
      </section>

      {/* Manufacturing / showroom imagery */}
      <section className="container-luxe py-24">
        <div className="grid gap-4 sm:grid-cols-3">
          {about.manufacturingImages.map((m, i) => (
            <Reveal
              key={m.label}
              className={`group relative overflow-hidden rounded-2xl bg-cream shadow-card ${manufacturingLayout[i] || "aspect-[16/10]"}`}
            >
              <Image
                src={m.image}
                alt={m.label}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-xl text-canvas">{m.label}</span>
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
          {about.values.map((v, i) => {
            const Icon = iconMap[v.icon] || Shield;
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
          {about.milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 80} className="bg-canvas p-7">
              <p className="font-display text-4xl text-clay">{m.year}</p>
              <h3 className="mt-3 font-display text-lg text-charcoal">{m.title}</h3>
              <p className="mt-1.5 text-sm text-stone">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="container-luxe pb-24">
        <Reveal className="rounded-3xl bg-charcoal px-6 py-16 text-center sm:px-12">
          <div className="grid gap-10 sm:grid-cols-3">
            {about.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-5xl text-canvas">{s.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-canvas/60">{s.label}</p>
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
