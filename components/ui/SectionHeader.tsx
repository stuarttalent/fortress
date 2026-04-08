import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

export default function SectionHeader({
  title,
  subtitle,
  right,
  className = ""
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  right?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-end justify-between gap-4", className)}>
      <div>
        <div className="text-xl font-semibold tracking-tight text-ink-900">
          {title}
        </div>
        {subtitle ? (
          <div className="mt-1 text-sm font-medium text-ink-600">
            {subtitle}
          </div>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

