"use client";

import { useInquiry } from "@/components/InquiryContext";

/**
 * Opens a global modal (quote | sample | callback) from anywhere,
 * including server-rendered pages. Pass `product` for product-scoped requests.
 */
export default function ModalButton({ type = "quote", product = null, className = "btn-accent", children }) {
  const { openModal } = useInquiry();
  return (
    <button type="button" onClick={() => openModal(type, product)} className={className}>
      {children}
    </button>
  );
}
