import Image from "next/image";

export default function StarsSection() {
  return (
    <Image
      src="/stars.png"
      alt="Stars"
      width={50}
      height={50}
      className="mb-2 md:-ml-4"
    />
  );
}
