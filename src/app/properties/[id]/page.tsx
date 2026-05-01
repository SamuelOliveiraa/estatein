"use client";
import { FAQSection } from "@/components/sections/faq-section";
import { useParams } from "next/navigation";

export default function PropertiesIDPage() {
  const { id } = useParams();
  return (
    <>
      <FAQSection />
    </>
  );
}
