import Image from "next/image";

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full py-16 px-4 md:px-20" id="faq-section">
      <div className="max-w-360 mx-auto">
        <Image
          src="/stars.png"
          alt="Stars"
          width={50}
          height={50}
          className="mb-2 -ml-4"
        />
        {children}
      </div>
    </section>
  );
}
