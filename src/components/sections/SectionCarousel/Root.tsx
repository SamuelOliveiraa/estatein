export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full py-16 px-4 md:px-20" id="faq-section">
      <div className="max-w-360 mx-auto">{children}</div>
    </section>
  );
}
