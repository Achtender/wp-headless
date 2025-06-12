// Copyright 2022 the Deno authors. All rights reserved. MIT license.

import { Handlers } from "fresh/server.ts";
import { getMediaBySlug } from "utils/wp.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { type, slug } = ctx.params;

    if (type === "media") {
      const media = await getMediaBySlug(slug);

      if (media?.data?.status) {
        return ctx.renderNotFound();
      }

      // ? size=small|medium|large|full
      let size = ctx.url.searchParams.get("size") || "full";
      if (!(size in media.media_details.sizes)) size = "full";

      // ? formate=jpeg|avif
      let formate = ctx.url.searchParams.get("formate") || "avif";
      if (!(`image/${formate}` in media.media_details.sizes[size].sources)) {
        formate = "jpeg";
      }

      console.log({formate, size});
      console.log(media.media_details.sizes[size]);

      const media_href =
        media.media_details.sizes[size].sources[`image/${formate}`].source_url;

      return fetch(media_href);
    }

    return ctx.renderNotFound();
  },
};

export const config: RouteConfig = {
  routeOverride: "/cdn/:type/:slug*",
};
