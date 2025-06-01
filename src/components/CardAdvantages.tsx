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
    <div className="flex flex-col items-center gap-y-3 w-[20rem] h-[27rem]">
      <div className="overflow-clip h-70 flex items-center justify-center">
        <AnimatedLottie animationData={animation} />
      </div>
      <h3 className="text-2xl">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}
