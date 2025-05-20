"use client";

import { useState } from "react";
import Button from "./Button";
import AnimatedLottie from "./AnimatedLottie";

import check from "../../public/animations/check.json";

export default function Form() {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.988830522": "",
    "entry.2006082270": "",
    "entry.360444704": "",
    "entry.1308522209": "",
  });

  const handleInputData =
    (input: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [input]: value,
      }));
    };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmit(true);

    const url =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe5enfGttKdAD_zMbC8Ki43q_-CxZiuw5Ld-bpKJx7jCNawxg/formResponse";

    const params = new URLSearchParams(formData).toString();

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      mode: "no-cors",
      body: params,
    });
  }

  return (
    <div>
      {submit ? (
        <div className="flex flex-col items-center">
          <h3 className="text-3xl">Mensagem enviada!</h3>
          <AnimatedLottie animationData={check} loop={false} />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          target="_self"
          className="flex flex-col gap-6 p-7 rounded-4xl shadow-[var(--shadow)]"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <fieldset className="flex flex-col md:w-1/2 gap-2">
              <label htmlFor="entry.988830522">Nome</label>
              <input
                id="entry.988830522"
                type="text"
                name="entry.988830522"
                required
                placeholder="Digite seu nome"
                className="border-2 rounded-4xl p-3"
                onChange={handleInputData("entry.988830522")}
                value={formData["entry.988830522"]}
                minLength={5}
                maxLength={50}
              />
            </fieldset>

            <fieldset className="flex flex-col md:w-1/2 gap-2">
              <label htmlFor="entry.2006082270">Email</label>
              <input
                id="entry.2006082270"
                type="email"
                name="entry.2006082270"
                required
                placeholder="Digite seu email"
                className="border-2 rounded-4xl p-3"
                onChange={handleInputData("entry.2006082270")}
                value={formData["entry.2006082270"]}
                minLength={5}
                maxLength={50}
              />
            </fieldset>
          </div>

          <fieldset className="flex flex-col gap-2">
            <label htmlFor="entry.360444704">Assunto</label>
            <select
              id="entry.360444704"
              name="entry.360444704"
              required
              className="border-2 rounded-4xl p-3"
              onChange={handleInputData("entry.360444704")}
              value={formData["entry.360444704"]}
            >
              <option className="bg-[var(--bg-color)]" value="">
                Selecione um assunto
              </option>
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

          <fieldset className="flex flex-col gap-2">
            <label htmlFor="entry.1308522209">Mensagem</label>
            <textarea
              id="entry.1308522209"
              name="entry.1308522209"
              required
              placeholder="Digite sua mensagem"
              className="border-2 rounded-4xl p-3 min-h-[15rem]"
              onChange={handleInputData("entry.1308522209")}
              value={formData["entry.1308522209"]}
              minLength={10}
              maxLength={1000}
            />
          </fieldset>

          <Button className="max-w-fit self-center" type="submit">
            Enviar
          </Button>
        </form>
      )}
    </div>
  );
}
