import { COOKIE_EVENT_DATE_KEY } from "./constants";

export function getEventDateCookie(eventDate) {
  return `${COOKIE_EVENT_DATE_KEY}=${eventDate}`;
}
