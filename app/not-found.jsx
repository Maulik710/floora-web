import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="container-luxe flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl text-charcoal sm:text-6xl">This surface isn't here</h1>
      <p className="mt-4 max-w-md text-base text-stone">
        The page you're looking for may have moved. Let's get you back to something beautiful.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          Back home <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/products" className="btn-outline">
          Browse products
        </Link>
      </div>
    </div>
  );
}
