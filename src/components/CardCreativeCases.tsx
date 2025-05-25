import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export default function CardCreativeCases({
  href,
  title,
  image,
  description,
}: {
  href: string;
  title: string;
  image: string | StaticImport;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="bg-multicolor shadow-[var(--shadow)] cursor-pointer h-96 w-72 rounded-4xl p-[1px] transition duration-700 ease-in-out hover:translate-y-[-10px]"
    >
      <div className="relative flex flex-col h-full w-full rounded-4xl overflow-hidden gap-y-[1px]">
        <div className="flex items-center h-2/3">
          <Image
            src={image}
            alt="Creative Cases"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="absolute opacity-80 shadow-[var(--shadow)] top-8 bg-[var(--bg-color)] text-[1rem] rounded-r-4xl p-1.5 ">
          {title}
        </h3>
        <p className="flex items-center bg-[var(--bg-color)] h-1/3 py-1.5 px-3.5">
          {description}
        </p>
      </div>
    </Link>
  );
}
