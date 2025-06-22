'use client';

import { RenderBlock } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

const CoreQueryPagination = (block: RenderBlock) => {
  return nextBlock(
    {
      ...block,
      blockName: 'core/group',
    },
    undefined,
    block.ctx,
  );
};

export default CoreQueryPagination;
