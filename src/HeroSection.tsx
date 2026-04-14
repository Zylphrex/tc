import classNames from "classnames";
import heroImage from "./assets/hero.jpg";
import { Section } from "./components/Section.tsx";
import { useDropIn } from "./hooks/useDropIn.tsx";

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
          "animation-delay-7",
        )}
      />
      <div
        className={classNames(
          "grid",
          "grid-cols-1",
          "sm:grid-cols-3",
          "gap-4",
          "w-3/4",
          infoText,
          "mb-16",
          "sm:mb-0",
        )}
      >
        <span
          className={classNames("text-center", dropIn, "animation-delay-8")}
        >
          Sat., Sept. 19, 2026
        </span>
        <span
          className={classNames("text-center", dropIn, "animation-delay-9")}
        >
          Richmond Hill, ON
        </span>
        <button className={classNames(dropIn, "animation-delay-10")}>
          RSVP
        </button>
      </div>
    </Section>
  );
}
