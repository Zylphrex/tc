import classNames from "classnames";

import "./Polaroid.css";

interface PolaroidProps {
  src: string;
}

export function Polaroid({ src }: PolaroidProps) {
  return (
    <div className={classNames("item")}>
      <div className={classNames("polaroid", "p-2", "md:p-4")}>
        <img src={src} />
      </div>
    </div>
  );
}
