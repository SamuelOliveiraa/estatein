export default function Description({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-neutral-400 text-sm md:text-base max-w-2xl">
      {children}
    </p>
  );
}
