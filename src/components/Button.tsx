import React from "react";

type ButtonProps =
  | ({
      children: React.ReactNode;
      variant?: "light" | "dark" | "transparent";
      as?: "button";
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      children: React.ReactNode;
      variant?: "light" | "dark" | "transparent";
      as: "a";
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>);

export default function Button({
  children,
  variant = "light",
  as = "button",
  ...props
}: ButtonProps) {
  const baseStyle =
    "px-4 py-1.5 shadow-[0_3px_8px_rgba(0,0,0,0.24)] whitespace-nowrap rounded-4xl backdrop-blur-sm hover:cursor-pointer hover:scale-105 transition duration-300 ease-out";

  if (as === "a") {
    return (
      <a
        className={`${baseStyle} ${variant}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyle} ${variant}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
