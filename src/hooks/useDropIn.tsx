import "./useDropIn.css";
import classNames from "classnames";

export function useDropIn() {
  return classNames("opacity-0", "inline-block", "animate-drop-in");
}
