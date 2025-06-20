'use client';

import { CoreBlockProps } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

type CoreBlockPropsQuery = CoreBlockProps & {
  query: {
    posts: unknown[],
    total_pages: number;
    total: number;
  };
};

const CoreQueryWrap = ({ ctx, attrs, innerBlocks, query }: CoreBlockPropsQuery) => {
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
      {/* {render_blocks_no_results.map((block, i) => nextBlock(block, i, ctx))} */}
      {/* {render_blocks.map((block, i) => nextBlock(block, i, ctx))} */}
      {/* {render_other_blocks?.map((block, i) => nextBlock(block, i, ctx))} */}
    </>
  );
};

export default CoreQueryWrap;
