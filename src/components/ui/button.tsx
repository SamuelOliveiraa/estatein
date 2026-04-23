import { tv } from "tailwind-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const buttonVariants = tv({
  base: "inline-block text-white px-6 py-4 rounded-xl font-medium transition-all duration-200 whitespace-nowrap cursor-pointer border border-transparent",
  variants: {
    variant: {
      primary: "bg-neutral-900 border border-neutral-800 hover:bg-neutral-850",
      secondary: "bg-purple-600"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});

export function Button({ children, className, variant, ...rest }: ButtonProps) {
  return (
    <button className={buttonVariants({ className, variant })} {...rest}>
      {children}
    </button>
  );
}
