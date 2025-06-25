import { MetadataRoute } from "next";
import { Locale } from "next-intl";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const caseSlugs = ["1", "2", "3", "4", "5"];

const host = "https://quantum-portfolio-alpha.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...getEntries("/"),
    ...getEntries("/about-us"),
    ...getEntries("/cases"),
    ...getEntries("/contact"),
    ...getDynamicCaseEntries(caseSlugs),
  ];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      ),
    },
  }));
}

function getDynamicCaseEntries(slugs: string[]) {
  return slugs.flatMap((slug) => getEntries(`/cases/${slug}`));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
