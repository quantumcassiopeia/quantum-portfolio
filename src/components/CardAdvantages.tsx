import AnimatedLottie from "./AnimatedLottie";
export default function CardAdvantages({
  title,
  description,
  animation,
}: {
  title: string;
  description: string;
  animation: object;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[20rem]">
      <div className="overflow-hidden h-70 flex items-center justify-center">
        <AnimatedLottie animationData={animation} />
      </div>
      <h3 className="text-2xl">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}
