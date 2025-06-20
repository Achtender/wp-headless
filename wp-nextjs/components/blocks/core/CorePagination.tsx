import { CoreBlockProps } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

const CoreQueryPagination = (block: CoreBlockProps) => {
  return nextBlock(
    {
      ...block,
      blockName: 'core/group',
    },
    undefined,
    block.ctx
  );
};

export default CoreQueryPagination;
