// React Config

// Animations

import crossplatform from "../../public/animations/crossplatform.json";
import fast from "../../public/animations/fast.json";
import intuitive from "../../public/animations/intuitive.json";
import search from "../../public/animations/search.json";

// Components
import TextAnimation from "@/components/TextAnimation";
import CardAdvantages from "@/components/CardAdvantages";
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

      <section className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-12 p-8">
        <CardAdvantages
          title="Cross-platform"
          description="Uma experiência fluida em qualquer dispositivo — do celular ao
            desktop."
          animation={crossplatform}
        />
        <CardAdvantages
          title="Carregamento rápido"
          description="Imagens otimizadas, código limpo e as melhores práticas para
            garantir velocidade e performance."
          animation={fast}
        />
        <CardAdvantages
          title="Cross-platform"
          description="Design limpo e intuitivo para que o usuário encontre o que precisa
            com facilidade."
          animation={intuitive}
        />
        <CardAdvantages
          title="Cross-platform"
          description="SEO estratégico para que seu site se destaque nos mecanismos de
            busca."
          animation={search}
        />
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
