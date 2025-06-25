import { MetadataRoute } from "next";

const host = "https://quantum-portfolio-alpha.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${host}/en`,
      alternates: {
        languages: {
          en: `${host}/en`,
          "pt-BR": `${host}/pt-BR`,
        },
      },
    },
    {
      url: `${host}/en/about-us`,
      alternates: {
        languages: {
          en: `${host}/en/about-us`,
          "pt-BR": `${host}/pt-BR/about-us`,
        },
      },
    },
  ];
}
