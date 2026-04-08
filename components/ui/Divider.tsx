import { cn } from "../../lib/cn";

export default function Divider({ className = "" }: { className?: string }) {
  return <div className={cn("h-px w-full bg-ink-100", className)} />;
}

