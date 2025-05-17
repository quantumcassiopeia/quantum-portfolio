import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function HamburgerMenu({ className }: { className?: string }) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleMouseClick = () => setIsOpened(false);
    if (isOpened === true) {
      document.addEventListener("click", handleMouseClick);
    }
    return () => document.removeEventListener("click", handleMouseClick);
  }, [isOpened]);

  const hamburgerLines =
    "bg-black h-1 w-7 block rounded-full absolute transition duration-500 ease-in-out";

  const hamburgerSpans = (
    <>
      <span
        className={`${
          isOpened ? "translate-x-8 opacity-0" : ""
        } ${hamburgerLines} top-2`}
      ></span>
      <span
        className={`${isOpened ? "-rotate-45" : ""} ${hamburgerLines}`}
      ></span>
      <span
        className={`${isOpened ? "rotate-45" : ""} ${hamburgerLines}`}
      ></span>
      <span
        className={`${
          isOpened ? "translate-x-8 opacity-0" : ""
        } ${hamburgerLines} -top-2`}
      ></span>
    </>
  );

  return (
    <div className={className}>
      <div
        onClick={() => setIsOpened((prev) => !prev)}
        className="relative z-50  right-4 cursor-pointer"
      >
        {hamburgerSpans}
      </div>

      <div
        className={`
          fixed top-0 left-0 h-screen w-screen backdrop-blur-sm
          transition-opacity duration-500 ease-in-out
          ${
            isOpened
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <Navbar className="flex flex-col gap-4 relative top-10 left-5" />
      </div>
    </div>
  );
}
