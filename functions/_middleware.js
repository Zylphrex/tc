export async function onRequest(context) {
  const { next, request } = context;
  const { pathname } = new URL(request.url);
  const cookie = request.headers.get("cookie") || "";

  if (request.method == "POST" && pathname === "/cfp_login") {
    return next();
  }

  return new Response(`this should ask for password:\ncookies: ${cookie}`, {
    headers: {
      "content-type": "text/html",
      "cache-control": "no-cache",
    },
  });
}
