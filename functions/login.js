import { getEventDateCookie } from "./util.js";
import { COOKIE_EVENT_DATE_MAX_AGE } from "./constants.js";

export async function onRequestPost(context) {
  const { env, request } = context;
  const body = await request.formData();
  const { day, month } = Object.fromEntries(body);
  const eventDate = `${month}-${day}`;

  if (eventDate === env.EVENT_DATE) {
    const cookieKeyValue = getEventDateCookie(eventDate);
    return new Response("", {
      status: 302,
      headers: {
        "Set-Cookie": `${cookieKeyValue}; Max-Age=${COOKIE_EVENT_DATE_MAX_AGE}; Path=/; HttpOnly; Secure`,
        "Cache-Control": "no-cache",
        Location: "/",
      },
    });
  }

  return new Response("", {
    status: 302,
    headers: {
      "Cache-Control": "no-cache",
      Location: "/?error=1",
    },
  });
}
