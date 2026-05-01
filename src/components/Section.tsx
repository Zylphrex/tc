import classNames from "classnames";

interface SectionProps {
  children?: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "items-center",
        "px-10",
        "py-16",
        "bg-surface-primary",
      )}
    >
      {children}
    </div>
  );
}
