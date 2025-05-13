// Copyright 2022 the Deno authors. All rights reserved. MIT license.

import { Handlers, PageProps, RouteConfig } from "fresh/server.ts";
import {
  getNavigationBySearch,
  getPages,
  getPostTaxAndSlug,
  getSiteName,
  WpPost,
} from "utils/wp.ts";
import { Header } from "components/Header.tsx";
import { Footer } from "components/Footer.tsx";
import { AnimalMain } from "components/AnimalMain.tsx";
import { parse } from "utils/html.ts";

type PageData = {
  pages: WpPost[];
  post: WpPost;
  siteName: string;
  navigation: Record<string, unknown>;
};

async function getNavigation() {
  const [nav_main, nav_heading, nav_quicklink] = await Promise.all([
    getNavigationBySearch("_main"),
    getNavigationBySearch("_heading"),
    getNavigationBySearch("_quicklink"),
  ]);

  return {
    nav_main: {
      id: nav_main?.id,
      tree: parse(nav_main?.content?.rendered || ""),
    },
    nav_heading: {
      id: nav_heading?.id,
      tree: parse(nav_heading?.content?.rendered || ""),
    },
    nav_quicklink: {
      id: nav_quicklink?.id,
      tree: parse(nav_quicklink?.content?.rendered || ""),
    },
  };
}

export const handler: Handlers<PageData> = {
  async GET(_req, ctx) {
    const lastSlug = (ctx.params?.slug ?? "_index").split("/").at(-1)!;
    const [pages, siteName, post, navigation] = await Promise.all([
      getPages(),
      getSiteName(),
      getPostTaxAndSlug(ctx.params?.taxonomie, lastSlug),
      getNavigation(),
    ]);

    if (!post) {
      return ctx.renderNotFound();
    }

    return ctx.render({ pages, siteName, post, navigation });
  },
};

export default function Post({ data }: PageProps<PageData>) {
  const { pages, siteName, post, navigation } = data;

  return (
    <>
      <Header
        siteName={siteName}
        post={post}
        pages={pages}
        navigation={navigation}
        style="light"
      />
      <AnimalMain post={post} />
      <Footer siteName={siteName} />
    </>
  );
}

export const config: RouteConfig = {
  // FIXME(@all): this needs to be made dynamic 
  routeOverride: "/:taxonomie(all-about-cats|all-about-dogs)/:slug",
};
