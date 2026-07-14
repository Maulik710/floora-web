"use client";

import Image from "next/image";
import Link from "next/link";
import { useInquiry } from "@/components/InquiryContext";
import { categoryName } from "@/lib/products";
import { Plus, Check, ArrowRight } from "@/components/Icons";

export default function ProductCard({ product, priority = false }) {
  const { isInInquiry, toggleItem } = useInquiry();
  const added = isInInquiry(product.slug);

  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream shadow-card">
        <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
          <Image
            src={product.images[0]}
            alt={`${product.name} — ${product.style.toLowerCase()} ${categoryName(product.category)} in ${product.material}`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </Link>

        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-canvas/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-charcoal backdrop-blur">
            {product.tag}
          </span>
        )}

        {/* Add to inquiry */}
        <button
          type="button"
          onClick={() => toggleItem(product)}
          aria-pressed={added}
          aria-label={added ? `Remove ${product.name} from inquiry` : `Add ${product.name} to inquiry`}
          className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full shadow-soft transition-all duration-300 cursor-pointer ${
            added ? "bg-clay text-white" : "bg-canvas/90 text-charcoal backdrop-blur hover:bg-canvas"
          }`}
        >
          {added ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>
      </div>

      {/* Meta */}
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-display text-xl leading-tight text-charcoal transition-colors group-hover:text-clay">
              {product.name}
            </h3>
          </Link>
          <span className="shrink-0 text-xs uppercase tracking-wide text-taupe">{categoryName(product.category)}</span>
        </div>
        <p className="mt-1 text-sm text-stone">
          {product.material} · {product.size}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal link-underline self-start"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
