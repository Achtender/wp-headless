import { CoreBlockProps } from '../core.tsx';

const DebugMissing = ({ blockName,  ctx, innerBlocks }: CoreBlockProps) => {
  return ctx.nextBlock({
    blockName: 'dev/warning',
    innerBlocks,
    ctx: {
      code: 'Caution',
      message:
        `The "${blockName}" block could not be matched with block library. You may leave it as-is, convert it to custom HTML, or remove it.`,
    },
  });
};

export default DebugMissing;
