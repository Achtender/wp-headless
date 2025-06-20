import { CoreBlockProps } from '@/components/blocks/core.tsx';

const CoreQueryPagination = (block: CoreBlockProps) => {
  return block.ctx.nextBlock({
    ...block,
    blockName: 'core/group',
  });
};

export default CoreQueryPagination;
