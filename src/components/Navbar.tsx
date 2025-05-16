import Link from "next/link";

const animations =
  "hover:scale-105 hover:-translate-y-1 origin-left transition duration-500 ease-in-out";
export default function Navbar({
  showContact = true,
  className = "",
}: {
  showContact?: boolean;
  showHome?: boolean;
  className?: string;
}) {
  return (
    <ul className={`text-[var(--text-color)] ${className}`}>
      <li className={animations}>
        <Link href="/">Home</Link>
      </li>
      <li className={animations}>
        <Link href="/about-us">Sobre</Link>
      </li>
      <li className={animations}>
        <Link href="/cases">Cases</Link>
      </li>
      <li className={`${animations}  ${showContact ? "" : "hidden"}`}>
        <Link href="/contact">Contato</Link>
      </li>
    </ul>
  );
}
