import "./globals.css";
import { Cormorant_Garamond, Cinzel, Inter } from "next/font/google";
import { site as staticSite } from "@/lib/site";
import { categories as staticCategories } from "@/lib/products";
import { getSiteSettings, getCategories } from "@/lib/cms";
import { InquiryProvider } from "@/components/InquiryContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import InquiryDrawer from "@/components/InquiryDrawer";
import GlobalModals from "@/components/GlobalModals";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata() {
  const site = (await getSiteSettings()) || staticSite;
  return {
    metadataBase: new URL("https://floora.example"),
    title: {
      default: `${site.name} — Premium SPC, Vinyl, Laminate & Porcelain Surfaces`,
      template: `%s · ${site.name}`,
    },
    description: site.description,
    openGraph: {
      title: `${site.name} — Surfaces for a Considered Life`,
      description: site.description,
      type: "website",
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F5",
};

export default async function RootLayout({ children }) {
  const [cmsSite, cmsCategories] = await Promise.all([getSiteSettings(), getCategories()]);
  const site = cmsSite || staticSite;
  const categories = cmsCategories?.length ? cmsCategories : staticCategories;

  return (
    <html lang="en" className={`${cormorant.variable} ${cinzel.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <InquiryProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-2 focus:text-sm focus:text-canvas"
          >
            Skip to content
          </a>
          <Header site={site} />
          <main id="main">{children}</main>
          <Footer site={site} categories={categories} />
          <FloatingContact site={site} />
          <InquiryDrawer />
          <GlobalModals />
        </InquiryProvider>
      </body>
    </html>
  );
}
