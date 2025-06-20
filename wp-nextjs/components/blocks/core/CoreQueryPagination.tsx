import { CoreBlockProps } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

const CorePagination = (block: CoreBlockProps) => {
  return nextBlock({
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
  }, undefined, block.ctx);
};

export default CorePagination;
