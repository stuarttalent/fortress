import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/cn";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

function buttonClasses(variant: ButtonBaseProps["variant"]) {
  switch (variant) {
    case "secondary":
      return "border border-ink-200/70 bg-white text-ink-900 hover:border-ink-300 hover:bg-ink-50";
    case "ghost":
      return "border border-transparent bg-transparent text-ink-900 hover:bg-ink-50";
    case "primary":
    default:
      return "bg-ink-900 text-white hover:bg-ink-800";
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
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:ring-offset-2 focus:ring-offset-white",
        "disabled:pointer-events-none disabled:opacity-60",
        buttonClasses(variant),
        className
      )}
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
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:ring-offset-2 focus:ring-offset-white",
        buttonClasses(variant),
        className
      )}
    >
      {children}
    </Link>
  );
}

