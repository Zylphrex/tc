export async function onRequestPost(context) {
  const { env, request } = context;
  const body = await request.formData();
  const { date, month } = Object.fromEntries(body);
  const eventDate = `${date}-${month}`;

  if (eventDate === env.EVENT_DATE) {
    return new Response("", {
      status: 302,
      headers: {
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
