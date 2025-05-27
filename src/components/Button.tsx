import React from "react";

type ButtonProps =
  | ({
      children: React.ReactNode;
      variant?: "theme" | "transparent";
      as?: "button";
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      children: React.ReactNode;
      variant?: "theme" | "transparent";
      as: "a";
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>);

export default function Button({
  children,
  className,
  variant = "theme",
  as = "button",
  ...props
}: ButtonProps) {
  const baseStyle =
    "px-4 py-1.5 shadow-[0_3px_8px_rgba(0,0,0,0.24)] whitespace-nowrap rounded-4xl backdrop-blur-sm hover:cursor-pointer hover:scale-105 transition duration-300 ease-out";

  const variantStyle =
    variant === "transparent"
      ? "bg-blur-lg text-black"
      : "bg-[var(--bg-color-invert)] text-[var(--text-color-invert)]";

  if (as === "a") {
    return (
      <a
        className={`${baseStyle} ${variantStyle} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
