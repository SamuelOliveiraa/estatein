"use client";
import { useParams } from "next/navigation";

export default function PropertiesIDPage() {
  const { id } = useParams();
  return (
    <main>
      <div>Hello Properties! {id}</div>
    </main>
  );
}
