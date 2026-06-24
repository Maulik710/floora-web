"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const InquiryContext = createContext(null);
const STORAGE_KEY = "floora_inquiry_v1";

export function InquiryProvider({ children }) {
  const [items, setItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // modal = { type: "quote" | "sample" | "callback", product?: {...} } | null
  const [modal, setModal] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted inquiry list on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  // Persist on change (after hydration to avoid clobbering)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      /* storage full / unavailable */
    }
  }, [items, hydrated]);

  // Lock body scroll when an overlay is open
  useEffect(() => {
    const open = drawerOpen || modal;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, modal]);

  const addItem = useCallback((product) => {
    setItems((prev) => {
      if (prev.some((p) => p.slug === product.slug)) return prev;
      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          category: product.category,
          finish: product.finish,
          size: product.size,
          image: product.images?.[0] || product.image,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((slug) => {
    setItems((prev) => prev.filter((p) => p.slug !== slug));
  }, []);

  const toggleItem = useCallback((product) => {
    setItems((prev) =>
      prev.some((p) => p.slug === product.slug)
        ? prev.filter((p) => p.slug !== product.slug)
        : [
            ...prev,
            {
              slug: product.slug,
              name: product.name,
              category: product.category,
              finish: product.finish,
              size: product.size,
              image: product.images?.[0] || product.image,
            },
          ]
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const isInInquiry = useCallback((slug) => items.some((p) => p.slug === slug), [items]);

  const openModal = useCallback((type, product = null) => setModal({ type, product }), []);
  const closeModal = useCallback(() => setModal(null), []);

  const value = {
    items,
    count: items.length,
    hydrated,
    addItem,
    removeItem,
    toggleItem,
    clear,
    isInInquiry,
    drawerOpen,
    setDrawerOpen,
    modal,
    openModal,
    closeModal,
  };

  return <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>;
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
  return ctx;
}
