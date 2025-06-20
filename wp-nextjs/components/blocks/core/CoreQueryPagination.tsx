import { CoreBlockProps } from '@/components/blocks/core.tsx';

const CorePagination = (block: CoreBlockProps) => {
  return block.ctx.nextBlock({
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
  });
};

export default CorePagination;
