import { FreshContext } from "fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const response = await ctx.next();
  const headers = new Headers(response.headers);
  const pathname = new URL(req.url).pathname;
  
  if (
    pathname.startsWith("/cdn/") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".svg")
  ) {
    // If the request is for the CDN, set the Cache-Control header
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else {
    // For other requests, set a shorter cache duration
    headers.set("Cache-Control", "public, max-age=86400");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
