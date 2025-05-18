import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="flex flex-col items-center mt-20 h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Sobre a Quantum Soluções</h1>
      <p className="max-w-3xl leading-8">
        A Quantum é uma empresa fundada em 2025 por{" "}
        <a
          href="https://www.linkedin.com/in/robert-rsouza/"
          className="text-rainbow-gradient"
        >
          Robert Souza
        </a>{" "}
        com o propósito de criar sites modernos, responsivos e focados na
        experiência do usuário. Atua no desenvolvimento de soluções digitais
        personalizadas, aliando design, performance e usabilidade. A missão é
        entregar sites que representem bem cada cliente, com qualidade, clareza
        e atenção aos detalhes. Cada projeto é tratado de forma única, com foco
        em resultados reais e comunicação eficiente.
      </p>
      <div className="flex flex-col gap-2 items-start mr-auto ">
        <Link href="./pdfs/curriculo.pdf" target="_blank">
          Currículo
        </Link>
        <Link href="./pdfs/resume.pdf" target="_blank">
          Resume
        </Link>
      </div>
    </main>
  );
}
