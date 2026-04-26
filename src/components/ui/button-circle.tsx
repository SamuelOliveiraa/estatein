interface ButtonCircleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ButtonCircle({ children, ...rest }: ButtonCircleProps) {
  return (
    <button
      className="w-10 h-10 border border-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-neutral-850 transition-colors"
      {...rest}
    >
      {children}
    </button>
  );
}
