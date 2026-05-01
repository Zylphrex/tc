import classNames from "classnames";
import { Polaroid } from "../components/Polaroid";
import { RSVPButton } from "../components/RSVPButton";
import { Section } from "../components/Section";
import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";
import hero3 from "../assets/images/hero-3.jpg";

export function HeroSection() {
  return (
    <Section>
      <h1 className={classNames("text-center")}>Christina & Tony</h1>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "items-center",
          "gap-4",
          "pt-12",
        )}
      >
        <div>
          <RSVPButton />
        </div>
        <div
          className={classNames(
            "flex",
            "flex-col",
            "px-4",
            "md:flex-row",
            "md:px-0",
          )}
        >
          <Polaroid src={hero1} />
          <Polaroid src={hero2} />
          <Polaroid src={hero3} />
        </div>
        <div
          className={classNames(
            "flex",
            "mt-8",
            "gap-4",
            "bold",
            "text-lg",
            "text-accent-primary",
          )}
        >
          <div>Richmond Hill, ON</div>
          <div className={classNames("border-l")} />
          <div>September 19, 2026</div>
        </div>
      </div>
    </Section>
  );
}
