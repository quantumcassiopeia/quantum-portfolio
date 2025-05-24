import AnimatedLottie from "@/components/AnimatedLottie";
import Form from "@/components/Form";

import contact from "../../../public/animations/contact.json";

export default function ContactPage() {
  return (
    <main className=" flex flex-col mx-auto max-w-3xl mt-20 p-4 pb-28">
      <section className="flex flex-col items-center gap-4 ">
        <AnimatedLottie animationData={contact} speed={1.5} />
        <h1 className="text-3xl font-bold text-center ">Contato</h1>
        <p className=" leading-8 md:text-justify">
          Orçamentos, dúvidas, elogios ou sugestões? Deixe sua mensagem no
          formulário abaixo ou entre em contato por um de nossos canais de
          atendimento no rodapé da página.
        </p>
      </section>
      <section className="mt-16">
        <Form />
      </section>
    </main>
  );
}
