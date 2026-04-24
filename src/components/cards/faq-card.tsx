import { Button } from "../ui/button";

interface FAQCardProps {
  question: string;
  answer: string;
}

export function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-10 flex flex-col gap-6 min-w-75 md:min-w-100 flex-1">
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
    </div>
  );
}
