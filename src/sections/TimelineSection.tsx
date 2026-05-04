import classNames from "classnames";
import { Section } from "../components/Section";
import { Text } from "../components/Text";

export function TimelineSection() {
  return (
    <Section id="timeline">
      <h2>Timeline</h2>
      <div className={classNames("grid", "grid-cols-[8px_1fr]", "gap-x-8")}>
        <div className={classNames("relative")}>
          <Dot />
          <Line top />
        </div>
        <TimelineItem>
          <Text variant="muted">{"2:30 PM \u2014 3:00 PM"}</Text>
          <Text variant="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </TimelineItem>
        <div className={classNames("relative")}>
          <Dot />
          <Line />
        </div>
        <TimelineItem>
          <Text variant="muted">{"3:00 PM \u2014 4:00 PM"}</Text>
          <Text variant="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            quis turpis feugiat, vulputate turpis sed, blandit justo.
          </Text>
        </TimelineItem>
        <div className={classNames("relative")}>
          <Dot />
          <Line />
        </div>
        <TimelineItem>
          <Text variant="muted">{"4:00 PM \u2014 4:30 PM"}</Text>
          <Text variant="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius
            ultrices elit.
          </Text>
        </TimelineItem>
        <div className={classNames("relative")}>
          <Dot />
          <Line />
        </div>
        <TimelineItem>
          <Text variant="muted">{"5:30 PM \u2014 8:30 PM"}</Text>
          <Text variant="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            malesuada tortor nec libero feugiat, in interdum metus semper. Nulla
            ut molestie velit, eget porta nunc.
          </Text>
        </TimelineItem>
      </div>
    </Section>
  );
}

interface TimelineItemProps {
  children: React.ReactNode;
}

function TimelineItem({ children }: TimelineItemProps) {
  return (
    <div className={classNames("flex", "flex-col", "mb-8")}>{children}</div>
  );
}

function Dot() {
  return (
    <div
      className={classNames(
        "h-[12px]",
        "w-[12px]",
        "rounded-full",
        "bg-accent-primary",
        "absolute",
        "top-[12px]",
      )}
    />
  );
}

interface LineProps {
  top?: boolean;
}

function Line({ top }: LineProps) {
  return (
    <div
      className={classNames({
        "mx-[5px]": true,
        "h-full": true,
        "w-0": true,
        "border-x": true,
        "border-accent-primary": true,
        "mt-[12px]": top,
      })}
    />
  );
}
