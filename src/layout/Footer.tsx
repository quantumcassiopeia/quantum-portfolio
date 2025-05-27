import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Navbar from "@/components/Navbar";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex flex-col min-h-64 bg-[var(--bg-color)] pt-10 px-4 mt-auto">
      <div className="flex flex-col gap-4 md:flex-row justify-between leading-8 text-[var(--base-neutral-color)] pt-4 border-t border-[var(--base-neutral-color)]/25">
        <section>
          <Navbar showContact={false} />
        </section>
        <section>
          <h3 className="text-rainbow-gradient">{t("contactUs")}</h3>
          <Link href="/contact" className="block">
            {t("sendmessage")}
          </Link>
          <p>(91) 98566-9109</p>
          <p>quantumpeia.dev@gmail.com</p>
        </section>
        <section>
          <h3 className="text-rainbow-gradient">{t("socialmedia")}</h3>
          <SocialMediaLinks position="flex" />
        </section>
        <section>
          <h3 className="text-rainbow-gradient">Quantum</h3>

          <p>CNPJ 60.779.208/0001-82</p>
          <p>Rua Rio de Janeiro, 243 - Sala 802</p>
          <p>Belo Horizonte - MG</p>
        </section>
      </div>
      <section className="opacity-25 flex justify-center items-center min-h-14 text-center mt-6 md:mt-auto border-t border-[var(--base-neutral-color)]">
        © {new Date().getFullYear()} Quantum Soluções
      </section>
    </footer>
  );
}
