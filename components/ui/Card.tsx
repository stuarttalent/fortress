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
        "rounded-xl border border-ink-100 bg-white",
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}

