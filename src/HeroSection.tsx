import classNames from "classnames";
import heroImage from "./assets/hero.jpg";
import { Section } from "./components/Section";
import { useDropIn } from "./hooks/useDropIn";

export function HeroSection() {
  const heroText = classNames(
    "font-[Lavishly_Yours]",
    "italic",
    "text-4xl",
    "sm:text-6xl",
    "md:text-8xl",
  );

  const infoText = classNames(
    "font-[Italiana]",
    "text-md",
    "sm:text-lg",
    "md:text-xl",
  );

  const dropIn = useDropIn();

  return (
    <Section
      odd
      className={classNames(
        "flex",
        "flex-col",
        "items-center",
        "justify-between",
      )}
    >
      <div className="z-1">
        <h1 className={heroText}>
          <span className={classNames(dropIn, "animation-delay-1")}>
            Christina
          </span>
          &nbsp;
          <span className={classNames(dropIn, "animation-delay-2")}>&</span>
          &nbsp;
          <span className={classNames(dropIn, "animation-delay-3")}>Tony</span>
        </h1>
        <h1 className={heroText}>
          <span className={classNames(dropIn, "animation-delay-4")}>are</span>
          &nbsp;
          <span className={classNames(dropIn, "animation-delay-5")}>
            getting
          </span>
          &nbsp;
          <span className={classNames(dropIn, "animation-delay-6")}>
            married
          </span>
        </h1>
      </div>
      <img
        src={heroImage}
        alt="hero"
        className={classNames(
          "object-scale-down",
          "max-h-2/3",
          dropIn,
          "animation-delay-8",
        )}
      />
      <div
        className={classNames(
          "flex",
          "flex-col",
          "sm:flex-row",
          "items-center",
          "justify-between",
          "gap-4",
          "w-3/4",
          infoText,
          "mb-16",
          "sm:mb-0",
        )}
      >
        <span>Saturday, September 19, 2026</span>
        <span>Richmond Hill, ON</span>
        <button>RSVP</button>
      </div>
    </Section>
  );
}
