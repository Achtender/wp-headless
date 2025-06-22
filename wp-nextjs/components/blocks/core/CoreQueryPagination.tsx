'use client';

import { RenderBlock } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

const CorePagination = (block: RenderBlock) => {
  return nextBlock(
    {
      ...block,
      attrs: {
        ...block.attrs,
        layout: {
          ...block.attrs.layout,
          type: 'flex',
          verticalAlign: 'center',
          justifyContent: 'space-between',
        },
      },
      blockName: 'core/group',
    },
    undefined,
    block.ctx,
  );
};

export default CorePagination;
