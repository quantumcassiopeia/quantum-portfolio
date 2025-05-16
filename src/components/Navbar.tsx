import Link from "next/link";

export default function Navbar({
  showContact = true,
  showHome = true,
  className = "",
}: {
  showContact?: boolean;
  showHome?: boolean;
  className?: string;
}) {
  return (
    <ul className={className}>
      <li className={showHome ? "text-rainbow-gradient" : "hidden"}>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about-us">Sobre</Link>
      </li>
      <li>
        <Link href="/cases">Cases</Link>
      </li>
      <li className={showContact ? "" : "hidden"}>
        <Link href="/contact">Contato</Link>
      </li>
    </ul>
  );
}
