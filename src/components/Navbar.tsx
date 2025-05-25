import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTranslations } from "next-intl";

const animations = "hover:-translate-y-1 transition duration-500 ease-in-out";
export default function Navbar({
  showContact = true,
  className = "",
  fontSize = "",
  showThemeSwitcher = false,
}: {
  showContact?: boolean;
  showHome?: boolean;
  showThemeSwitcher?: boolean;
  className?: string;
  fontSize?: string;
}) {
  const t = useTranslations("Navbar");

  return (
    <ul
      className={`text-[var(--text-color)] font-jetbrains-mono ${className} ${fontSize} `}
    >
      <li className={animations}>
        <Link href="/">{t("home")}</Link>
      </li>
      <li className={animations}>
        <Link href="/about-us">{t("about")}</Link>
      </li>
      <li className={animations}>
        <Link href="/cases">{t("cases")}</Link>
      </li>
      <li className={`${animations}  ${showContact ? "" : "hidden"} `}>
        <Link href="/contact">{t("contact")}</Link>
      </li>
      {showThemeSwitcher && (
        <li className="scale-y-110 relative top-1">
          <ThemeSwitcher />
        </li>
      )}
    </ul>
  );
}
