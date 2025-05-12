export default function Footer() {
  return (
    <footer className="flex flex-col min-h-64 bg-[var(--bg-color]] pt-10 px-4 mt-auto">
      <div className="flex flex-col gap-4 md:flex-row justify-between leading-8 text-[var(--base-text-color)]">
        <section>
          <h3 className="text-rainbow-gradient">Home</h3>
          <p>Sobre</p>
          <p>Cases</p>
        </section>
        <section>
          <h3 className="text-rainbow-gradient">Contato</h3>
          <p>(11) 1234-5678</p>
          <p>E-mail: 3m6v8@example.com</p>
        </section>
        <section>
          <h3 className="text-rainbow-gradient">Redes Sociais</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </section>
        <section>
          <h3 className="text-rainbow-gradient">Quantum</h3>

          <p>CNPJ XX.XXX.XXX/0001-XX</p>
          <p>Av. Paulista, 1234 São Paulo - SP</p>
        </section>
      </div>
      <section className="opacity-25 flex justify-center items-center min-h-14 text-center mt-6 md:mt-auto  border-t border-[var(--base-text-color)]">
        © {new Date().getFullYear()} Quantum Soluções
      </section>
    </footer>
  );
}
