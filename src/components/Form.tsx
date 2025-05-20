export default function Form() {
  return (
    <form className=" flex flex-col gap-6 p-7 rounded-4xl shadow-[var(--shadow)]">
      <div className="flex flex-col md:flex-row gap-4 ">
        <fieldset className="flex flex-col md:w-1/2 gap-2 ">
          <label>Nome</label>
          <input
            type="text"
            name="entry.198465000"
            required
            placeholder="Digite seu nome"
            className="border-2 rounded-4xl p-3 "
          />
        </fieldset>

        <fieldset className="flex flex-col md:w-1/2 gap-2 ">
          <label>Email</label>
          <input
            type="email"
            name="entry.548514286"
            required
            placeholder="Digite seu email"
            className="border-2 rounded-4xl p-3"
          />
        </fieldset>
      </div>
      <fieldset className="flex flex-col gap-2 ">
        <label>Assunto</label>
        <select className="border-2 rounded-4xl p-3 " name="" required>
          <option className="bg-[var(--bg-color)]" value="Orçamento">
            Orçamento
          </option>
          <option className="bg-[var(--bg-color)]" value="Dúvida">
            Dúvida
          </option>
          <option className="bg-[var(--bg-color)]" value="Elogio">
            Elogio
          </option>
          <option className="bg-[var(--bg-color)]" value="Sugestão">
            Sugestão
          </option>
        </select>
      </fieldset>
      <fieldset className="flex flex-col gap-2 ">
        <label>Mensagem</label>
        <textarea
          name="entry.254435891"
          required
          placeholder="Digite sua mensagem"
          className="border-2 rounded-4xl p-3 min-h-40 "
        />
      </fieldset>
    </form>
  );
}
