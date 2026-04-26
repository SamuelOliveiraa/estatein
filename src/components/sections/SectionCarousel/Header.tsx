export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10 md:mb-16">
      {children}
    </div>
  );
}
