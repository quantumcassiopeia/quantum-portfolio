import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-6 justify-center bg-rainbow-gradient min-h-[595px] mx-1.5 mt-1.5 p-4 lg:pl-48 rounded-4xl">
        <h1 className="text-6xl md:text-9xl text-black">Close every deal.</h1>
        <h2 className="text-[1.25rem] md:text-2xl md:w-[32rem] text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          expedita facere harum quo.
        </h2>
        <div className="flex flex-wrap gap-4 mt-6">
          <Button variant="dark">Get Started</Button>
          <Button variant="transparent">Get Started</Button>
        </div>
      </section>
    </div>
  );
}
