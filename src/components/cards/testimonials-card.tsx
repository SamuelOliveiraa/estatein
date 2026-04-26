import Image from "next/image";
import { Stars } from "../ui/stars";
import { CardRoot } from "./card-root";

interface TestimonialsCardProps {
  rating: number;
  title: string;
  description: string;
  imageURL: string;
  name: string;
}

export function TestimonialsCard({
  rating,
  title,
  description,
  imageURL,
  name
}: TestimonialsCardProps) {
  return (
    <CardRoot>
      <Stars rating={rating} />
      <div className="flex gap-1 flex-col">
        <h2 className="text-white text-md md:text-xl font-semibold">{title}</h2>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Image
          src={imageURL}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />

        <div className="flex flex-col">
          <strong className="text-lg">{name}</strong>
          <span className="text-neutral-400">USA, California</span>
        </div>
      </div>
    </CardRoot>
  );
}
