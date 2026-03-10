import Image from "next/image";

export default function AboutPhotos() {
  return (
    <div className="mt-4 md:hidden">
      <p className="text-white/30 text-xs mb-2 font-mono">// photos</p>
      <div className="flex gap-2 h-48">
        <div className="relative flex-[0.5] overflow-hidden border-2 border-white">
          <Image
            src="/images/andrew-main.jpg"
            alt="Andrew on a city bridge"
            fill
            className="object-cover object-[60%_center]"
            sizes="40vw"
          />
        </div>
        <div className="flex flex-col gap-2 flex-[0.5]">
          <div className="relative flex-1 overflow-hidden border-2 border-white">
            <Image
              src="/images/andrew-2.jpg"
              alt="Andrew on subway stairs"
              fill
              className="object-cover object-center"
              sizes="30vw"
            />
          </div>
          <div className="relative flex-1 overflow-hidden border-2 border-white">
            <Image
              src="/images/andrew-3.jpg"
              alt="Andrew at torii gates"
              fill
              className="object-cover object-center saturate-[0.6] brightness-[0.9]"
              sizes="30vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
