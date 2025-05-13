// import { Handlers, PageProps, RouteConfig } from "fresh/server.ts";
import { Handlers, PageProps } from "fresh/server.ts";
import {
  getNavigationBySearch,
  getPageBySlug,
  getPages,
  getSiteName,
  WpPost,
} from "utils/wp.ts";
import { Header } from "components/Header.tsx";
import { Footer } from "components/Footer.tsx";
import { PostMain } from "components/PostMain.tsx";
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
      getPageBySlug(lastSlug),
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
      <PostMain post={post} />
      <Footer siteName={siteName} />
    </>
  );
}

// // Copyright 2022 the Deno authors. All rights reserved. MIT license.

// import { Handlers, PageProps } from "fresh/server.ts";
// import {
//   getPages,
//   getPosts,
//   getSiteName,
//   getStickyPost,
//   WpPost,
//   WpResponseMetadata,
// } from "utils/wp.ts";
// import { Header } from "components/Header.tsx";
// import { Footer } from "components/Footer.tsx";
// import { Pagination } from "components/Pagination.tsx";
// import { Post } from "components/Post.tsx";

// type PageData = {
//   pages: WpPost[];
//   posts: WpPost[];
//   siteName: string;
//   metadata: WpResponseMetadata;
// };

// export const handler: Handlers<PageData> = {
//   async GET(_req, ctx) {
//     const [pages, siteName, [posts, metadata], stickyPost] = await Promise.all([
//       getPages(),
//       getSiteName(),
//       getPosts(1),
//       getStickyPost(),
//     ]);
//     if (stickyPost) {
//       posts.unshift(stickyPost);
//     }
//     return ctx.render({ pages, siteName, posts, metadata });
//   },
// };

// export default function Index({ data }: PageProps<PageData>) {
//   const { pages, siteName, posts, metadata } = data;
//   return (
//     <div>
//       <Header siteName={siteName} pages={pages} style="dark">
//         <img class="my-10" src="cover.png" alt="Deno chasing a butterfly" />
//       </Header>
//       <main class="p-4 mx-auto max-w-screen-lg">
//         {posts.map((post) => <Post post={post} />)}
//       </main>
//       <Pagination currentPage={1} metadata={metadata} />
//       <Footer siteName={siteName} />
//     </div>
//   );
// }

// Copyright 2022 the Deno authors. All rights reserved. MIT license.
