import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import ModalButton from "@/components/ModalButton";
import { categories, products } from "@/lib/products";
import { site } from "@/lib/site";
import { Shield, Droplet, Palette, Headset, ArrowRight, ArrowUpRight, Star, Quote, Check } from "@/components/Icons";

const heroImg =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";

const whyChoose = [
  { icon: Shield, title: "Uncompromising Quality", text: "Every surface is engineered and inspected to architectural-grade standards." },
  { icon: Droplet, title: "Built to Endure", text: "Waterproof cores and high wear layers that hold their beauty for decades." },
  { icon: Palette, title: "Design Variety", text: "From honed marble to hand-scraped oak — finishes for every vision." },
  { icon: Headset, title: "Expert Support", text: "Specifiers, samples and on-site guidance from a dedicated advisor." },
];

const certifications = ["ISO 9001", "CE Certified", "FloorScore®", "GREENGUARD Gold", "25-Year Warranty"];

const testimonials = [
  {
    quote:
      "Floora's porcelain transformed our boutique hotel lobby. The book-matched marble look is indistinguishable from natural stone — at a fraction of the maintenance.",
    name: "Aanya Mehta",
    role: "Principal Architect, Studio AM",
  },
  {
    quote:
      "The sampling service is the best in the industry. We specified Floora SPC across 40 apartments and the consistency was flawless.",
    name: "Rohan Desai",
    role: "Interior Designer, Form & Field",
  },
  {
    quote:
      "Premium feel, honest pricing and a team that actually answers the phone. Floora has become our default for residential flooring.",
    name: "Priya Nair",
    role: "Founder, Nair Build Co.",
  },
];

export default function HomePage() {
  const featured = products.filter((p) => p.tag).slice(0, 4);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[88vh] w-full overflow-hidden">
        <Image
          src={heroImg}
          alt="A serene, sunlit living room finished in warm Floora wood-look flooring"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />

        <div className="container-luxe relative flex min-h-[88vh] flex-col justify-center py-24">
          <div className="max-w-2xl animate-fade-up">
            <p className="eyebrow text-clay">Premium Surfaces · Est. 2009</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-canvas text-balance sm:text-6xl lg:text-7xl">
            Every step,<br className="hidden sm:block" /> perfectly placed.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-canvas/80 text-pretty">
              SPC, WPC, laminate, luxury vinyl and porcelain tile — crafted in matte, gloss, textured, wood-grain and
              stone-look finishes for spaces that endure.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn-accent">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <ModalButton type="quote" className="btn bg-canvas/95 text-charcoal hover:bg-canvas shadow-soft">
                Get a Quote
              </ModalButton>
            </div>
          </div>
        </div>

        {/* Floating stat ribbon */}
        <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/15 bg-charcoal/30 backdrop-blur-md md:block">
          <div className="container-luxe grid grid-cols-3 divide-x divide-white/15">
            {[
              ["15+ Years", "Surface craftsmanship"],
              ["500+ Finishes", "Across five collections"],
              ["10,000+ Projects", "Homes & commercial spaces"],
            ].map(([big, small]) => (
              <div key={big} className="px-2 py-6 text-center">
                <p className="font-display text-2xl text-canvas">{big}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-canvas/60">{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CATEGORIES ---------- */}
      <section className="container-luxe py-24">
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div>
            <p className="eyebrow">The Collections</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl text-balance sm:text-5xl">
              Five material families, endless possibility
            </h2>
          </div>
          <Link href="/products" className="link-underline shrink-0 text-sm font-medium text-charcoal">
            View full catalog
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.slug}
              delay={i * 80}
              className={i === 0 ? "col-span-2 lg:col-span-1" : ""}
            >
              <Link
                href={`/products?category=${cat.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl bg-cream shadow-card"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={cat.image}
                    alt={`${cat.name} flooring`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="flex items-center gap-1.5 font-display text-2xl text-canvas">
                    {cat.short}
                    <ArrowUpRight className="h-5 w-5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-canvas/70">{cat.blurb}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="bg-cream py-24">
        <div className="container-luxe">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why Floora</p>
            <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
              The quiet confidence of a surface done right
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 80} className="bg-canvas p-8 transition-colors duration-300 hover:bg-white">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-clay/10 text-clay">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- FEATURED / NEW ARRIVALS ---------- */}
      <section className="container-luxe py-24">
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div>
            <p className="eyebrow">New & Notable</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl text-balance sm:text-5xl">Featured arrivals</h2>
          </div>
          <Link href="/products" className="link-underline shrink-0 text-sm font-medium text-charcoal">
            See all products
          </Link>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- TRUST / CERTIFICATIONS ---------- */}
      <section className="border-y border-charcoal/10 bg-canvas py-14">
        <div className="container-luxe">
          <p className="text-center text-xs uppercase tracking-luxe text-stone">
            Certified, tested & trusted by leading studios
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {certifications.map((c) => (
              <span key={c} className="font-roman text-lg tracking-wide text-taupe transition-colors hover:text-charcoal">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INSPIRATION SPLIT ---------- */}
      <section className="container-luxe py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80"
              alt="Designer bathroom finished in Floora porcelain tile"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Inspiration</p>
            <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
              See our surfaces in real spaces
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
              Browse a curated gallery of completed homes, bathrooms, kitchens and commercial interiors — organised by
              room — to picture the perfect finish for your project.
            </p>
            <ul className="mt-6 space-y-3">
              {["Living rooms & bedrooms", "Bathrooms & wet areas", "Kitchens & dining", "Hospitality & commercial"].map(
                (li) => (
                  <li key={li} className="flex items-center gap-3 text-sm text-ink">
                    <Check className="h-4 w-4 text-clay" /> {li}
                  </li>
                )
              )}
            </ul>
            <Link href="/gallery" className="btn-outline mt-8">
              Explore the gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="bg-cream py-24">
        <div className="container-luxe">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Client Voices</p>
            <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
              Trusted by architects & homeowners alike
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-2xl bg-canvas p-8 shadow-card">
                  <Quote className="h-8 w-8 text-clay/40" />
                  <div className="mt-3 flex gap-0.5 text-clay">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[0.95rem] italic leading-relaxed text-ink">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-charcoal/10 pt-4">
                    <p className="font-display text-lg text-charcoal">{t.name}</p>
                    <p className="text-xs uppercase tracking-wide text-stone">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section className="container-luxe py-24">
        <Reveal className="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-20 text-center sm:px-12">
          <Image
            src="https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow text-clay">Start your project</p>
            <h2 className="mt-3 font-display text-4xl text-canvas text-balance sm:text-5xl">
              Let's find your perfect surface
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-canvas/70">
              Request a tailored quote or order free samples shipped to your door. Our advisors are ready to help.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ModalButton type="quote" className="btn-accent">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </ModalButton>
              <ModalButton type="sample" className="btn border border-white/25 text-canvas hover:bg-white hover:text-charcoal">
                Request Samples
              </ModalButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
