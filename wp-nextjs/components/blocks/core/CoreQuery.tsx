import { getAllPosts } from '@/lib/wordpress';
import { CoreBlockProps } from '@/components/blocks/core';
import { nextBlock } from '@/components/craft';

const CoreQuery = async ({ ctx, attrs, innerBlocks }: CoreBlockProps) => {
  const query_no_results = innerBlocks.find((_: any) =>
    _.blockName === 'core/query-no-results'
  );

  const post_template = innerBlocks.find((_: any) =>
    _.blockName === 'core/post-template'
  );

  const posts = await getAllPosts({
    author: attrs.query.author || undefined,
    post_type: attrs.query.postType || undefined,
    search: attrs.query.search || undefined,
    per_page: attrs.query.perPage,
    order: attrs.query.order,
    order_by: attrs.query.orderBy,
  });

  const render_blocks = post_template
    ? [{
      blockName: 'core/group', // or 'core/post-template'
      attrs: { ...post_template.attrs },
      innerBlocks: posts.map((post): CoreBlockProps => {
        return {
          ctx: { post },
          blockName: 'core/group',
          attrs: { layout: {} },
          innerBlocks: post_template?.innerBlocks,
          innerHTML: '',
          innerContent: [],
        };
      }),
      innerHTML: post_template?.innerHTML,
      innerContent: post_template?.innerContent,
    }]
    : [];

  const render_blocks_no_results = query_no_results && posts.length === 0 //
    ? query_no_results?.innerBlocks
    : [];

  return (
    <>
      {render_blocks_no_results.map((block, i) => ctx.nextBlock(block, i))}
      {render_blocks.map((block, i) => ctx.nextBlock(block, i))}
    </>
  );
};

export default CoreQuery;
