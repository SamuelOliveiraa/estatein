export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
      {children}
    </h2>
  );
}
