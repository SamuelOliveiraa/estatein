interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="bg-[linear-gradient(95.93deg,#262626_-26.82%,#26262600_40.46%)] flex items-center justify-center  px-4 md:px-20 lg:px-40 h-80 md:h-85">
      <div className="max-w-360 w-full h-full flex flex-col items-start justify-center gap-4">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold">{title}</h2>

        <p className="text-neutral-500 text-sm md:text-base lg:text-lg max-w-290">
          {description}
        </p>
      </div>
    </div>
  );
}
