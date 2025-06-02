import { WpCategory, WpComment, WpPost, WpTag, WpUser } from "utils/wp.ts";
// import LeaveReplyForm from "../islands/LeaveReplyForm.tsx";

export function AnimalMain({ post }: { post: WpPost }) {
  const gallery = post?.acf?.gallery.map((k: number) => {
    const media = Array.isArray(post?._embedded?.["acf:attachment"])
      ? post._embedded["acf:attachment"].filter((_: any) => _.id === k)[0]
      : undefined;

    return (
      <div>
        <img
          class="aspect-square object-cover w-full"
          loading="lazy"
          src={media.media_details.sizes.medium_large.source_url}
          alt=""
        />
      </div>
    );
  });

  const media_banner = post._embedded["wp:featuredmedia"]
    .filter((_: any) => _.id === post.featured_media)[0];

 

  return (
    <main class="mx-auto max-w-screen-lg pb-10 flex-1 my-12">
      <section class="mx-auto text-lg lex flex-col gap-10">
        <div class="grid grid-cols-2 gap-10">
          <div class="flex flex-col px-10 justify-center">
            <h1 class="mb-10">Hi, my name is {post?.acf?.banner.name}!</h1>
            <p>{post?.acf?.banner.description}</p>
          </div>
          <div class="flex flex-col px-10">
            {
              <img
                class="object-cover"
                style="aspect-ratio: 9/16;"
                loading="lazy"
                src={media_banner.media_details.sizes.medium_large.source_url}
                alt=""
              />
            }
          </div>
        </div>

        <div class="flex flex-col py-10 my-10">
          <h2 class="mb-6">Gallery</h2>
          <div class="grid grid-cols-3 gap-4">
            {gallery}
          </div>
        </div>
      </section>
    </main>
  );
}
