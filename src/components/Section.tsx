import classNames from "classnames";

interface SectionProps {
  id: string;
  type: "odd" | "even";
  children?: React.ReactNode;
}

export function Section({ id, children, type }: SectionProps) {
  return (
    <div
      id={id}
      className={classNames(
        "flex",
        "flex-col",
        "p-10",
        type === "odd" ? "bg-surface-primary" : "bg-surface-secondary",
      )}
    >
      {children}
    </div>
  );
}
