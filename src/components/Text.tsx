import classNames from "classnames";

interface TextProps {
  children: React.ReactNode;
  variant: "muted" | "primary";
}

export function Text({ children, variant }: TextProps) {
  return (
    <span
      className={classNames({
        "text-gray-400": variant === "muted",
        "text-gray-500": variant === "primary",
        "text-sm/8": true,
      })}
    >
      {children}
    </span>
  );
}
