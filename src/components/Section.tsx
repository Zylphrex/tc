import classNames from "classnames";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  odd?: boolean;
}

export function Section({ children, className, odd }: SectionProps) {
  const sectionStyles = classNames(
    {
      "h-screen": true,
      "p-12": true,
      "bg-[#fff4f0]": odd,
    },
    className,
  );
  return <div className={sectionStyles}>{children}</div>;
}
