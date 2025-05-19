import AnimatedLottie from "@/components/AnimatedLottie";

import team from "../../../public/animations/team.json";

export default function AboutUsPage() {
  return (
    <main className=" flex flex-col mx-auto gap-y-6 max-w-3xl mt-20 p-4 pb-28">
      <section className="flex flex-col items-center">
        <AnimatedLottie animationData={team} />
        <h1 className="text-3xl font-bold mb-8 text-center ">
          Sobre a Quantum Soluções
        </h1>
        <p className=" leading-8 md:text-justify">
          A Quantum é uma empresa fundada em 2025 por{" "}
          <a
            href="https://www.linkedin.com/in/robert-rsouza/"
            className="text-rainbow-gradient"
            target="_blank"
          >
            Robert Souza
          </a>{" "}
          com o propósito de criar sites modernos, responsivos e focados na
          experiência do usuário. Atua no desenvolvimento de soluções digitais
          personalizadas, aliando design, performance e usabilidade. A missão é
          entregar sites que representem bem cada cliente, com qualidade,
          clareza e atenção aos detalhes. Cada projeto é tratado de forma única,
          com foco em resultados reais e comunicação eficiente.
        </p>
      </section>

      <section>
        Acesse mais informações sobre o criador da Quantum no currículo
        disponível em{" "}
        <a
          className="text-rainbow-gradient"
          href="./pdfs/curriculo.pdf"
          target="_blank"
        >
          Português
        </a>{" "}
        |{" "}
        <a
          className="text-rainbow-gradient"
          href="./pdfs/resume.pdf"
          target="_blank"
        >
          English
        </a>
        .
      </section>
    </main>
  );
}
