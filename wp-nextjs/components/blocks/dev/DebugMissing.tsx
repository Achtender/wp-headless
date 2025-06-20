import { CoreBlockProps } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

const DebugMissing = ({ blockName, innerBlocks }: CoreBlockProps) => {
  return nextBlock(
    {
      blockName: 'dev/warning',
      innerBlocks,
      ctx: {
        code: 'Caution',
        message: `The "${blockName}" block could not be matched with block library. You may leave it as-is, convert it to custom HTML, or remove it.`,
      },
    }
  );
};

export default DebugMissing;
