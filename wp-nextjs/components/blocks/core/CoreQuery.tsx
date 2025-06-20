import { getQueryPosts } from '@/lib/wordpress';
import { CoreBlockProps } from '@/components/blocks/core';

const CoreQuery = async ({ ctx, attrs, innerBlocks }: CoreBlockProps) => {
  const query_other = innerBlocks.filter(
    (_: any) =>
      _.blockName !== 'core/query-no-results' && //
      _.blockName !== 'core/post-template'
  ) as CoreBlockProps[];

  const query_no_results = innerBlocks.find(
    (_: any) => _.blockName === 'core/query-no-results' //
  );

  const post_template = innerBlocks.find(
    (_: any) => _.blockName === 'core/post-template' //
  );

  const query = await getQueryPosts({
    author: attrs.query.author || undefined,
    post_type: attrs.query.postType || undefined,
    search: attrs.query.search || undefined,
    per_page: attrs.query.perPage,
    order: attrs.query.order,
    order_by: attrs.query.orderBy,
  });

  const query_ctx = {
    ...attrs.query,
    totalPages: query.total_pages,
    total: query.total,
  };

  const render_blocks = post_template
    ? [
        {
          blockName: 'core/group', // or 'core/post-template'
          attrs: { ...post_template.attrs },
          innerBlocks: query.posts.map((post): CoreBlockProps => {
            return {
              ctx: { post, ...query_ctx },
              blockName: 'core/group',
              attrs: { layout: {} },
              innerBlocks: post_template?.innerBlocks,
              innerHTML: '',
              innerContent: [],
            };
          }),
          innerHTML: post_template?.innerHTML,
          innerContent: post_template?.innerContent,
        },
      ]
    : [];

  const render_other_blocks = query_other.map((block) => {
    block.ctx = {
      ...(block.ctx ?? {}),
      query: query_ctx,
    };

    return block;
  });

  const render_blocks_no_results =
    query_no_results && query.posts.length === 0 //
      ? query_no_results?.innerBlocks
      : [];

  return (
    <>
      {render_blocks_no_results.map((block, i) => ctx.nextBlock(block, i))}
      {render_blocks.map((block, i) => ctx.nextBlock(block, i))}
      {render_other_blocks?.map((block, i) => ctx.nextBlock(block, i))}
    </>
  );
};

export default CoreQuery;
