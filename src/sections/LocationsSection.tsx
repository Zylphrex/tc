import classNames from "classnames";
import { Section } from "../components/Section";

export function LocationsSection() {
  return (
    <Section id="locations">
      <h2>Locations</h2>
      <div className={classNames("grid", "grid-cols-1", "md:grid-cols-2")}>
        <div>Espace Studios</div>
        <div>The Moon</div>
      </div>
    </Section>
  );
}
