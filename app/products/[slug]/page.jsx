import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import ProductDetailClient from "@/components/ProductDetailClient";
import { products as staticProducts, getProduct as getStaticProduct, categoryName } from "@/lib/products";
import { getProducts, getProductBySlug, getRelatedFrom, getColorVariantsFrom } from "@/lib/cms";
import { ChevronRight } from "@/components/Icons";

async function resolveCatalog() {
  const cmsProducts = await getProducts();
  return cmsProducts?.length ? cmsProducts : staticProducts;
}

async function resolveProduct(slug, catalog) {
  const cmsProduct = await getProductBySlug(slug);
  if (cmsProduct) return cmsProduct;
  return catalog.find((p) => p.slug === slug) || getStaticProduct(slug) || null;
}

export async function generateStaticParams() {
  const catalog = await resolveCatalog();
  return catalog.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const catalog = await resolveCatalog();
  const product = await resolveProduct(params.slug, catalog);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: `${product.name} — ${categoryName(product.category)} in a ${product.finish.toLowerCase()} ${product.style.toLowerCase()} finish, ${product.size}. View specs, variants and request a quote.`,
  };
}

export default async function ProductDetailPage({ params }) {
  const catalog = await resolveCatalog();
  const product = await resolveProduct(params.slug, catalog);
  if (!product) notFound();
  const related = getRelatedFrom(catalog, product, 4);
  const variants = getColorVariantsFrom(catalog, product, 6);

  return (
    <div className="container-luxe py-10 lg:py-14">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-stone">
        <Link href="/" className="hover:text-charcoal">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/products" className="hover:text-charcoal">Products</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/products?category=${product.category}`} className="hover:text-charcoal">
          {categoryName(product.category)}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-charcoal">{product.name}</span>
      </nav>

      <div className="mt-8">
        <ProductDetailClient product={product} variants={variants} />
      </div>

      {/* Related */}
      <section className="mt-24">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Pairs well with</p>
            <h2 className="mt-2 font-display text-3xl text-charcoal sm:text-4xl">You may also like</h2>
          </div>
          <Link href="/products" className="link-underline shrink-0 text-sm font-medium text-charcoal">
            All products
          </Link>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
