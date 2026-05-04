import classNames from "classnames";

interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

export function Section({ id, children }: SectionProps) {
  return (
    <div
      id={id}
      className={classNames("flex", "flex-col", "p-10", "bg-surface-primary")}
    >
      {children}
    </div>
  );
}
