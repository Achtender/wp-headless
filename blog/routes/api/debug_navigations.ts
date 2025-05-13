// Copyright 2022 the Deno authors. All rights reserved. MIT license.

import { Handlers } from "fresh/server.ts";
import { getNavigationBySearch } from "utils/wp.ts";
import { parse } from "utils/html.ts";


export const handler: Handlers = {
  async GET(_req) {
    const [navigation] = await Promise.all([
        // getNavigationBySearch("_heading"),
        getNavigationBySearch("_main"),
    ]);

    return Response.json({
        navigation,
      prased: parse(navigation?.content?.rendered || ''),
    });
  },
};
