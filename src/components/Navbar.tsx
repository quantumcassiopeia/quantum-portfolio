import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

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
  return (
    <ul
      className={`text-[var(--text-color)] font-jetbrains-mono ${className} ${fontSize} `}
    >
      <li className={animations}>
        <Link href="/">Home</Link>
      </li>
      <li className={animations}>
        <Link href="/about-us">Sobre</Link>
      </li>
      <li className={animations}>
        <Link href="/cases">Cases</Link>
      </li>
      <li className={`${animations}  ${showContact ? "" : "hidden"} `}>
        <Link href="/contact">Contato</Link>
      </li>
      {showThemeSwitcher && (
        <li className="scale-y-110 relative top-1">
          <ThemeSwitcher />
        </li>
      )}
    </ul>
  );
}
