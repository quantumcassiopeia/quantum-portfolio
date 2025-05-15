import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <div>Quantum Soluções</div>
      <div className="flex items-center gap-4">
        <Navbar className="flex gap-4" />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
