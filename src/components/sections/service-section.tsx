export default function ServiceSection({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-1 bg-neutral-850">
      <div className="bg-neutral-900 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-3">
        {children}
      </div>
    </section>
  );
}
