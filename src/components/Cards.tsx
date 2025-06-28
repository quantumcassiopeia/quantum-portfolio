import { Link } from "@/i18n/navigation";
import Image from "next/image";
import AnimatedLottie from "./AnimatedLottie";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function AdvantageCard({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  return (
    <div className="flex flex-col items-center gap-y-3 w-[20rem] h-[27rem]">
      <div className="overflow-clip h-70 flex items-center justify-center">
        <AnimatedLottie src={src} />
      </div>
      <h3 className="text-2xl">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}

export function CaseCard({
  href = "/cases",
  title,
  src,
  summary,
}: {
  href?: string;
  title: string;
  src: string | StaticImport;
  summary: string;
}) {
  return (
    <Link
      // @ts-expect-error unknown pathname
      href={href}
      className="bg-multicolor shadow-[var(--shadow)] cursor-pointer h-96 w-72 rounded-4xl p-[1px] transition duration-700 ease-in-out hover:translate-y-[-10px]"
    >
      <div className="relative flex flex-col h-full w-full rounded-4xl overflow-clip gap-y-[1px]">
        <div className="relative w-full h-2/3 overflow-clip">
          <Image
            src={src}
            alt={title}
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <h3 className="absolute opacity-80 shadow-[var(--shadow)] top-8 bg-[var(--bg-color)] text-[1rem] rounded-r-4xl p-1.5 ">
          {title}
        </h3>
        <p className="flex items-center bg-[var(--bg-color)] h-1/3 py-1.5 px-3.5">
          {summary}
        </p>
      </div>
    </Link>
  );
}
