import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const animations = "hover:-translate-y-1 transition duration-500 ease-in-out";
export default function Navbar({
  showContact = true,
  className = "",
  fontSize = "",
}: {
  showContact?: boolean;
  showHome?: boolean;
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
      <li className="scale-y-110 relative top-1">
        <ThemeSwitcher />
      </li>
    </ul>
  );
}
