import { type ReactNode } from "react";

export default function Card({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-black/5 bg-white shadow-soft",
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}

