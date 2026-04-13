export async function onRequest(context) {
  const { next, request } = context;
  const { pathname, searchParams } = new URL(request.url);
  const { error } = Object.fromEntries(searchParams);
  const cookie = request.headers.get("cookie") || "";

  if (request.method == "POST" && pathname === "/login") {
    return next();
  }

  return new Response(loginPage({ errored: !!error }), {
    headers: {
      "content-type": "text/html",
      "cache-control": "no-cache",
    },
  });
}

function loginPage({ errored }) {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Christina & Tony</title>
      <meta name="description" content="Enter the event date to access the details">
    </head>
    <body>
      <main>
        <article>
          <hgroup>
            <h1>Date</h1>
            <h2>Please the event date to access the details.</h2>
          </hgroup>
          ${withError ? `<p>Incorrect password, please try again.</p>` : ""}
          ${loginForm()}
        </article>
      </main>
    </body>

  </html>
`;
}

function loginForm() {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return `
    <form method="POST" action="/login">
      <label for="month">Month</label>
      <select name="month" id="month">
        ${months
          .map((month) => {
            const value = month.toString().padStart(2, "0");
            return `<option value="${value}">${value}</option>`;
          })
          .join("\n")}
      </select>
      <label for="day">Day</label>
      <select name="day" id="day">
        ${days
          .map((day) => {
            const value = day.toString().padStart(2, "0");
            return `<option value="${value}">${value}</option>`;
          })
          .join("\n")}
      </select>
      <button type="submit">Enter</button>
    </form>
  `;
}
