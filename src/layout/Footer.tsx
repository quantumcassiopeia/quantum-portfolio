import Link from "next/link";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Navbar from "@/components/Navbar";

export default function Footer() {
  return (
    <footer className="flex flex-col min-h-64 bg-[var(--bg-color)] pt-10 px-4 mt-auto border-t border-[var(--base-text-color)] ">
      <div className="flex flex-col gap-4 md:flex-row justify-between leading-8 text-[var(--base-text-color)]">
        <section>
          <Navbar showContact={false} />
        </section>
        <section>
          <h3 className="text-rainbow-gradient">Fale conosco</h3>
          <Link href="/contact" className="block">
            Envie uma mensagem
          </Link>
          <p>(91) 98566-9109</p>
          <p>quantumpeia.dev@gmail.com</p>
        </section>
        <section>
          <h3 className="text-rainbow-gradient">Redes Sociais</h3>
          <SocialMediaLinks position="flex" />
        </section>
        <section>
          <h3 className="text-rainbow-gradient">Quantum</h3>

          <p>CNPJ 60.779.208/0001-82</p>
          <p>Rua Rio de Janeiro, 243 - Sala 802</p>
          <p>Belo Horizonte - MG</p>
        </section>
      </div>
      <section className="opacity-25 flex justify-center items-center min-h-14 text-center mt-6 md:mt-auto border-t border-[var(--base-text-color)]">
        © {new Date().getFullYear()} Quantum Soluções
      </section>
    </footer>
  );
}
