import { WpCategory, WpComment, WpPost, WpTag, WpUser } from "utils/wp.ts";
// import LeaveReplyForm from "../islands/LeaveReplyForm.tsx";

export function AnimalMain({ post }: { post: WpPost }) {

  const gallery = !Boolean(post?.acf?.gallery) ? false :post?.acf?.gallery?.map((k: number) => {
    const media = Array.isArray(post?._embedded?.["acf:attachment"])
      ? post._embedded["acf:attachment"].filter((_: any) => _ && _.id === k)[0]
      : undefined;

    if (!media) return undefined;

    return (
      <div>
        <img
          class="aspect-square object-cover w-full"
          loading="lazy"
          
          src={`/cdn/media/${media.id}?size=medium`}
          alt=""
        />
      </div>
    );
  });

  return (
    <main class="mx-auto max-w-screen-lg pb-10 flex-1 my-12">
      <section class="mx-auto text-lg lex flex-col gap-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="flex flex-col px-10 justify-center">
            <h1 class="mb-10">Hi, my name is {post?.acf?.banner.animal_name}!</h1>
            <p>{post?.acf?.banner.animal_description}</p>
          </div>
          <div class="flex flex-col px-10">
            {
              <img
                class="w-full object-cover md:aspect-9/16"
                style="aspect-ratio: 9/16;"
                loading="lazy"
                fetchPriority="high"
                src={`/cdn/media/${post.featured_media}?size=medium_large`}
                alt=""
              />
            }
          </div>
        </div>

        <div class="flex flex-col py-10 my-10">
          <h2 class="mb-6">Gallery</h2>
          <div class="grid grid-cols-3 gap-4">
            {gallery ? gallery : (
              <p>No gallery available for this animal.</p>
            )}

          </div>
        </div>
      </section>
    </main>
  );
}
