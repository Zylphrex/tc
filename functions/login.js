import { getCookieKeyValue } from "./utils.js";

export async function onRequestPost(context) {
  const { env, request } = context;
  const body = await request.formData();
  const { day, month } = Object.fromEntries(body);
  const eventDate = `${month}-${day}`;
  const cookieKeyValue = getCookieKeyValue(eventDate);

  if (eventDate === env.EVENT_DATE) {
    return new Response("", {
      status: 302,
      headers: {
        "Set-Cookie": `${cookieKeyValue}; Max-Age=${COOKIE_MAX_AGE}; Path=/; HttpOnly; Secure`,
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
