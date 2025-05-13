// Copyright 2022 the Deno authors. All rights reserved. MIT license.

import { WpPost } from "utils/wp.ts";
import cx from "utils/cx.ts";
// import { makePageMap } from "utils/page.ts";

type Props = {
  style: "dark" | "light";
  siteName: string;
  pages: WpPost[];
  post?: WpPost;
  children?: unknown;
  navigation: Record<string, unknown>;
};

const WP_API = Deno.env.get("WP_API")!;
const WP_BASEPATH = Deno.env.get("WP_BASEPATH")!;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function navigationFromTree(nav: any) {
  const result: {
    title: string;
    description?: string;
    link: string;
    children?: unknown[];
  }[] = [];

  const traverse = (li: any) => {
    if (li.attributes?.class.includes("wp-block-page-list")) {
      li.children?.map(traverse, true);
      return;
    }

    switch (true) {
      case li.children[0].attributes?.class.includes(
        "wp-block-pages-list__item__link",
      ):
        result.push({
          title: li.children[0]?.innerHTML, // span
          description: undefined,
          link: li.children[0].attributes["href"],
        });
        break;
      case li.children[0].attributes?.class.includes(
        "wp-block-navigation-item__content",
      ):
        result.push({
          title: li.children[0].children[0]?.innerHTML, // span
          description: li.children[0].children[1]?.innerHTML, // span
          link: li.children[0].attributes["href"],
        });
        break;
    }
  };

  nav?.children?.map(traverse);

  return result;
}

export function Header(
  { siteName, pages, style, children, post, navigation }: Props,
) {
  // console.log(navigation);

  // const pageMap = makePageMap(pages);
  // const nav_main_option = navigationFromTree(navigation.nav_heading);
  const nav_main_option = navigationFromTree(navigation.nav_main.tree);
  const nav_quicklink_option = navigationFromTree(
    navigation!.nav_quicklink.tree,
  );

  const render_main_nav = (page: any) => {
    const href_origin = new URL(WP_API).origin;
    const href_active = new URL(post!.link).pathname.replace(
      WP_BASEPATH,
      "/",
    );

    const link = new URL(page.link);
    let link_href;

    if (link.origin !== href_origin) {
      link_href = link.href; // external link
    } else {
      link_href = link.pathname.replace(WP_BASEPATH, "/");
    }

    const isCurrent = link_href === href_active;
    const isExternal = link.origin !== href_origin;

    return (
      <a
        href={link_href}
        aria-current={isCurrent ? "page" : undefined}
        target={isExternal ? "_blank" : "_self"}
        className={classNames(
          isCurrent
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "rounded-md px-3 py-2 text-sm font-medium",
        )}
      >
        {page.title}
      </a>
    );
  };

  return (
    <div>
      <div class="min-h-full">
        <nav class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
              <div class="flex items-center">
                <div class="shrink-0">
                  <img class="size-8" src="/logo.svg" alt="Your Company" />
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    {nav_main_option.map(render_main_nav)}
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    {nav_quicklink_option.map(render_main_nav)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {
        /* <header
        class={cx(
          "w-full text-lg font-light",
          style === "dark" && " text-white bg-black",
        )}
      >
        <div class="p-4 mx-auto max-w-screen-lg pt-20">
          <a href="/" class="wp-block-site-title">{siteName}</a>
          <ul class="mx-4 mt-6 flex gap-6 flex-wrap justify-end">
            {pages.filter((page) => page.parent === 0).map((
              page,
            ) => (
              <li class="group">
                <a
                  class="no-underline hover:underline"
                  href={new URL(page.link).pathname.replace(WP_BASEPATH, "/")}
                >
                  {page.title.rendered}
                </a>
                {pageMap[page.id] && <span class="text-xs">{" "}▼</span>}
                {pageMap[page.id] && (
                  <div class="pt-4 absolute invisible group-hover:visible">
                    <ul class="border bg-white text-black">
                      <ListItems
                        level={1}
                        pages={pageMap[page.id]}
                        pageMap={pageMap}
                      />
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {children}
        </div>
      </header> */
      }
    </div>
  );
}

function ListItems(
  { pages, pageMap, level }: {
    level: number;
    pages: WpPost[];
    pageMap: Record<string, WpPost[]>;
  },
) {
  return (
    <>
      {pages.map((page) => (
        <li
          class={cx(
            "px-" + (level * 4 + 4),
            "py-4 border-b-1 last:border-b-0",
          )}
        >
          <a
            class="no-underline hover:underline"
            href={new URL(page.link).pathname.replace(WP_BASEPATH, "/")}
          >
            {page.title.rendered}
          </a>
          {pageMap[page.id] && (
            <ListItems
              level={level + 1}
              pages={pageMap[page.id]}
              pageMap={pageMap}
            />
          )}
        </li>
      ))}
    </>
  );
}
