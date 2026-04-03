import { type ReactNode, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from "react";

export function Label({ children }: { children: ReactNode }) {
  return <label className="text-sm font-semibold text-charcoal-30">{children}</label>;
}

export function HelperText({ children }: { children: ReactNode }) {
  return <div className="text-xs font-medium text-charcoal-20">{children}</div>;
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-2xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none transition",
        "focus:border-brand-500/60 focus:ring-2 focus:ring-brand-400/30",
        props.className ?? ""
      ].join(" ")}
    />
  );
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={5}
      className={[
        "w-full resize-y rounded-2xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none transition",
        "focus:border-brand-500/60 focus:ring-2 focus:ring-brand-400/30",
        props.className ?? ""
      ].join(" ")}
    />
  );
}

export function Select({
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <select
      {...props}
      className={[
        "w-full rounded-2xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none transition",
        "focus:border-brand-500/60 focus:ring-2 focus:ring-brand-400/30",
        props.className ?? ""
      ].join(" ")}
    >
      {children}
    </select>
  );
}

