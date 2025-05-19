import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function CardCreativeCases({
  title,
  image,
  description,
}: {
  title: string;
  image: string | StaticImport;
  description: string;
}) {
  return (
    <div className="relative border-t-[#ff9170] border-l-[#ff9bbd] border-r-[#ff9bbd] border-b-[#ff9170] border-2 rounded-4xl flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ease-in-out h-96 w-[20rem]">
      <h2 className="bg-[var(--bg-color)] absolute inline-block top-7 px-2 rounded-r-4xl ">
        {title}
      </h2>
      <div className="w-full h-2/3">
        <Image src={image} alt={title} width={500} height={700} />
      </div>
      <p className="h-1/3 p-4 bg-[var(--bg-color)] ">{description}</p>
    </div>
  );
}
