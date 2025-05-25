import maintenance from "../../public/animations/maintenance.json";
import AnimatedLottie from "./AnimatedLottie";

export default function UnderMaintenance() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full p-4 ">
      <h3 className="text-3xl text-center ">Estamos trabalhando nisso.</h3>
      <div className="md:scale-150">
        <AnimatedLottie animationData={maintenance} />
      </div>
      <h3 className="text-3xl text-center ">Volte outra hora!</h3>
      <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-cyan-200 opacity-20 blur-3xl z-[-1]"></div>
    </div>
  );
}
