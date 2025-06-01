import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function CardCreativeCases({
  href = "/cases",
  title,
  image,
  description,
}: {
  href?: string;
  title: string;
  image: string | StaticImport;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="bg-multicolor shadow-[var(--shadow)] cursor-pointer h-96 w-72 rounded-4xl p-[1px] transition duration-700 ease-in-out hover:translate-y-[-10px]"
    >
      <div className="relative flex flex-col h-full w-full rounded-4xl overflow-clip gap-y-[1px]">
        <div className="relative w-full h-2/3 overflow-clip">
          <Image src={image} alt={title} fill className="object-cover" />
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
