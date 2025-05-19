import AnimatedLottie from "@/components/AnimatedLottie";
import contact from "../../../public/animations/contact.json";

export default function ContactPage() {
  return (
    <main className=" flex flex-col mx-auto gap-y-6 max-w-3xl mt-20 p-4 pb-28">
      <section className="flex flex-col items-center gap-4 ">
        <AnimatedLottie animationData={contact} speed={1.5} />
        <h1 className="text-3xl font-bold text-center ">Contato</h1>
        <p className=" leading-8 md:text-justify">
          Orçamentos, dúvidas, elogios e sugestões? Deixe sua mensagem abaixo ou
          entre em contato por um de nossos canais de atendimento.
        </p>
      </section>
      <section>FORMULÁRIO</section>
    </main>
  );
}
