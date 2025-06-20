import { CoreBlockProps } from '@/components/blocks/core.tsx';

const CoreButtons = (block: CoreBlockProps) => {
  return block.ctx.nextBlock({
    ...block,
    blockName: 'core/group',
  });
};

export default CoreButtons;
