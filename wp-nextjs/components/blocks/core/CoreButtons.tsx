import { CoreBlockProps } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

const CoreButtons = (block: CoreBlockProps) => {
  return nextBlock(
    {
      ...block,
      blockName: 'core/group',
    },
    undefined,
    block.ctx,
  );
};

export default CoreButtons;
