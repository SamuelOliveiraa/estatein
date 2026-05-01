import Image from "next/image";
import { CardRoot } from "./card-root";
import { Badge, Button } from "../ui";

import { FaBed } from "react-icons/fa";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { PiBathtubFill } from "react-icons/pi";

interface PropertiesCardProps {
  imageURL: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  category: string;
  price: number;
}

export function PropertiesCard({
  imageURL,
  title,
  description,
  bedrooms,
  bathrooms,
  category,
  price
}: PropertiesCardProps) {
  return (
    <CardRoot className="md:p-8">
      <Image
        src={imageURL}
        alt={title}
        width={350}
        height={250}
        className="min-w-[350] max-w-[350] min-h-[250] max-h-[250] rounded-md aspect-video"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-md md:text-xl font-semibold">{title}</h2>
        <p className="text-neutral-400 line-clamp-2 max-w-80">{description}</p>
      </div>
      <div className="flex gap-2">
        <Badge>
          <FaBed className="size-4" />
          {bedrooms} Bedrooms
        </Badge>
        <Badge>
          <PiBathtubFill className="size-4" />
          {bathrooms} Bathrooms
        </Badge>
        <Badge>
          <BuildingOfficeIcon className="size-4" />
          {category}
        </Badge>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col">
          <span className="text-base text-neutral-600 font-semibold">
            Price
          </span>
          <span className="text-2xl text-white font-semibold">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0
            })}
          </span>
        </div>

        <Button variant="secondary">View Property Details</Button>
      </div>
    </CardRoot>
  );
}
