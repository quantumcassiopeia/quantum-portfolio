// React Config

// Animations

import crossplatform from "../../public/animations/crossplatform.json";
import fast from "../../public/animations/fast.json";
import intuitive from "../../public/animations/intuitive.json";
import search from "../../public/animations/search.json";

// Components
import TextAnimation from "@/components/TextAnimation";
import AnimatedLottie from "../components/AnimatedLottie";
import CardCreativeCases from "@/components/CardCreativeCases";

// Code

export default function Home() {
  return (
    <main className="pb-28">
      {/* Hero */}

      <section className="flex flex-col gap-6 justify-center bg-rainbow-gradient min-h-[595px] mx-1.5 mt-2.5 p-4 lg:pl-48 lg:pr-20 rounded-4xl overflow-x-hidden ">
        <TextAnimation className="text-6xl md:text-9xl text-black">
          Bem-vindo à Quantum.
        </TextAnimation>

        <TextAnimation
          delay={1}
          className="text-[1.25rem] md:text-2xl md:w-[32rem] text-gray-700 "
        >
          Soluções inteligentes para o seu negócio
        </TextAnimation>
      </section>

      {/* Advantages */}

      <section className="flex flex-col items-center md:items-start flex-wrap sm:flex-row  justify-center gap-10 py-12 ">
        <div className="flex flex-col items-center gap-4 max-w-[20rem] ">
          <AnimatedLottie animationData={crossplatform} />
          <h3 className="text-3xl">Cross-platform</h3>
          <p>
            Site totalmente responsivo. Perfeito em celulares, tablets e
            computadores — com ótima experiência em qualquer dispositivo.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 max-w-[20rem] ">
          <AnimatedLottie animationData={fast} />
          <h3 className="text-3xl">Carregamento rápido</h3>
          <p>
            Otimização de imagens, código limpo e uso das melhores práticas para
            garantir velocidade e performance.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 max-w-[20rem] ">
          <AnimatedLottie animationData={intuitive} className="h-80" />
          <h3 className="text-3xl">Foco em Navegação Intuitiva</h3>
          <p>
            Layouts claros e objetivos para que o usuário encontre o que precisa
            com facilidade.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 max-w-[20rem] ">
          <AnimatedLottie animationData={search} className="h-80" />
          <h3 className="text-3xl">SEO</h3>
          <p>
            Com Search Engine Optimization, a estrutura é pensada para ajudar
            seu site a aparecer melhor nos resultados do Google.
          </p>
        </div>
      </section>

      {/* Creative Cases */}

      <section className="justify-center items-center">
        <h2 className="text-4xl leading-30 text-center  ">Cases criativos</h2>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <CardCreativeCases
            title="Portifólio"
            image="/cases/1/case1.png"
            description="Criação de portifólio com animações e efeito parallax."
          />
        </div>
      </section>
    </main>
  );
}
