import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

function buttonClasses(variant: ButtonBaseProps["variant"]) {
  switch (variant) {
    case "secondary":
      return "border border-black/10 bg-white text-charcoal-30 hover:border-brand-500/30 hover:bg-brand-50";
    case "ghost":
      return "border border-transparent bg-transparent text-charcoal-30 hover:bg-black/5 hover:border-black/5";
    case "primary":
    default:
      return "bg-brand-500 text-white shadow-glow hover:bg-brand-600";
  }
}

export function Button({
  children,
  className = "",
  variant = "primary",
  ...rest
}: ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-brand-400/70 focus:ring-offset-2 focus:ring-offset-white",
        "shadow-soft",
        buttonClasses(variant),
        className
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary"
}: { href: string } & ButtonBaseProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-brand-400/70 focus:ring-offset-2 focus:ring-offset-white",
        "shadow-soft",
        buttonClasses(variant),
        className
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

