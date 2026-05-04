import classNames from "classnames";

export function RSVPButton() {
  return (
    <a
      className={classNames(
        // "bg-transparent",
        "bg-accent-secondary",
        // "text-accent-primary",
        "font-semibold",
        "text-surface-primary",
        "py-2",
        "px-4",
        "border",
        "border-accent-primary",
        "hover:border-transparent",
        "rounded",
      )}
      href="https://withjoy.com/tony-christina/rsvp"
    >
      RSVP HERE
    </a>
  );
}
