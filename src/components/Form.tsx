"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Button from "./Button";
import ReCAPTCHA from "react-google-recaptcha";
import AnimatedLottie from "./AnimatedLottie";

export default function Form() {
  const t = useTranslations("Form");

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
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
    setError(null);

    if (!isVerified) {
      setError(t("recaptcha"));
      return;
    }

    try {
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

      setSubmit(true);
    } catch {
      setError(t("error"));
    }
  }

  if (submit) {
    return (
      <div className="flex flex-col items-center">
        <h3 className="text-3xl">{t("success")}</h3>
        <AnimatedLottie src="/animations/check.json" loop={false} />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      target="_self"
      className="flex flex-col gap-6 p-7 rounded-4xl shadow-[var(--shadow)]"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <fieldset className="flex flex-col md:w-1/2 gap-2">
          <label htmlFor="entry.988830522">{t("label.name")}</label>
          <input
            id="entry.988830522"
            type="text"
            name="entry.988830522"
            required
            placeholder={t("placeholder.name")}
            className="border-2 rounded-4xl p-3"
            onChange={handleInputData("entry.988830522")}
            value={formData["entry.988830522"]}
            minLength={5}
            maxLength={50}
          />
        </fieldset>

        <fieldset className="flex flex-col md:w-1/2 gap-2">
          <label htmlFor="entry.2006082270">{t("label.email")}</label>
          <input
            id="entry.2006082270"
            type="email"
            name="entry.2006082270"
            required
            placeholder={t("placeholder.email")}
            className="border-2 rounded-4xl p-3"
            onChange={handleInputData("entry.2006082270")}
            value={formData["entry.2006082270"]}
            minLength={5}
            maxLength={50}
          />
        </fieldset>
      </div>

      <fieldset className="flex flex-col gap-2">
        <label htmlFor="entry.360444704">{t("label.subject")}</label>
        <select
          id="entry.360444704"
          name="entry.360444704"
          required
          className="border-2 rounded-4xl p-3"
          onChange={handleInputData("entry.360444704")}
          value={formData["entry.360444704"]}
        >
          <option className="bg-[var(--bg-color)]" value="" disabled>
            {t("placeholder.subject")}
          </option>
          <option className="bg-[var(--bg-color)]" value="quotation">
            {t("option.quotation")}
          </option>
          <option className="bg-[var(--bg-color)]" value="question">
            {t("option.question")}
          </option>
          <option className="bg-[var(--bg-color)]" value="compliment">
            {t("option.compliment")}
          </option>
          <option className="bg-[var(--bg-color)]" value="suggestion">
            {t("option.suggestion")}
          </option>
        </select>
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <label htmlFor="entry.1308522209">{t("label.message")}</label>
        <textarea
          id="entry.1308522209"
          name="entry.1308522209"
          required
          placeholder={t("placeholder.message")}
          className="border-2 rounded-4xl p-3 min-h-[15rem]"
          onChange={handleInputData("entry.1308522209")}
          value={formData["entry.1308522209"]}
          minLength={10}
          maxLength={1000}
        />
      </fieldset>

      {error && (
        <p className="text-red-600 font-semibold text-center">{error}</p>
      )}

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        ref={recaptchaRef}
        onChange={(token) => setIsVerified(!!token)}
        className="mx-auto"
      />

      <Button className="max-w-fit self-center" type="submit">
        {t("button")}
      </Button>
    </form>
  );
}
