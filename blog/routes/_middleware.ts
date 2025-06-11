import { FreshContext } from "fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);

  if (url.searchParams.has("wp-proxy")) {
    const response = await ctx.next();
    const origin = new URL(req.url).origin;

    if (response.headers.get("content-type")?.includes("text/html")) {
      let text = await response.text();

      text = text //
        .replaceAll('src="/', `src="${origin}/`)
        .replaceAll('href="/', `href="${origin}/`);

      const headers = new Headers(response.headers);
      headers.set(
        "Content-Type",
        response.headers.get("content-type") || "text/html",
      );

      return new Response(text, {
        status: response.status,
        headers,
      });
    }

    return response;
  }

  // Otherwise, continue as normal
  return await ctx.next();
}
