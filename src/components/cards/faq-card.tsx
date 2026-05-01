import { Button } from "@/components/ui";
import { CardRoot } from "@/components/cards";

interface FAQCardProps {
  question: string;
  answer: string;
}

export function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <CardRoot>
      <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
        {question}
      </h3>
      <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
        {answer}
      </p>
      <div className="mt-auto">
        <Button variant="primary" className="py-3 px-6 text-sm">
          Read More
        </Button>
      </div>
    </CardRoot>
  );
}
