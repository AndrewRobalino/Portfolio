import Image from "next/image";

export default function PhotoPanels() {
  return (
    <div className="grid h-full w-full grid-cols-[1.4fr_1fr] grid-rows-[1fr_1fr] gap-1.5">
      {/* Main panel — spans full left column */}
      <div className="relative row-span-2 overflow-hidden border border-white/15">
        <Image
          src="/images/andrew-main.jpg"
          alt="Andrew on a city bridge"
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 25vw, 40vw"
          priority
        />
      </div>

      {/* Top-right panel */}
      <div className="relative overflow-hidden border border-white/15">
        <Image
          src="/images/andrew-2.jpg"
          alt="Andrew on subway stairs"
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 15vw, 20vw"
        />
      </div>

      {/* Bottom-right panel */}
      <div className="relative overflow-hidden border border-white/15">
        <Image
          src="/images/andrew-3.jpg"
          alt="Andrew at torii gates"
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 15vw, 20vw"
        />
      </div>
    </div>
  );
}
