import classNames from "classnames";
import { Polaroid } from "../components/Polaroid";
import { RSVPButton } from "../components/RSVPButton";
import { Section } from "../components/Section";
import hero1 from "../assets/images/hero-1.jpg";

export function HeroSection() {
  return (
    <Section id="hero">
      <h1 className={classNames("text-center")}>Christina & Tony</h1>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "items-center",
          "gap-4",
          "pt-4",
        )}
      >
        <div>
          <RSVPButton />
        </div>
        <div
          className={classNames(
            "flex",
            "justify-center",
            "mt-8",
            "gap-4",
            "bold",
            "text-lg",
            "text-accent-primary",
            "w-full",
          )}
        >
          <div className={classNames("flex", "justify-center", "text-center")}>
            Richmond Hill, ON
          </div>
          <div className={classNames("border-l", "border-r")} />
          <div className={classNames("flex", "justify-center", "text-center")}>
            September 19, 2026
          </div>
        </div>
        <div className={classNames("w-full", "md:w-3/4", "xl:w-3/5")}>
          <Polaroid src={hero1} />
        </div>
      </div>
    </Section>
  );
}
