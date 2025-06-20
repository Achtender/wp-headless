import { CoreBlockProps } from '@/components/blocks/core.tsx';

const CoreGallery = ({ ctx, attrs, innerBlocks }: CoreBlockProps) => {
  return <div className={`grid gap-4 grid-cols-${attrs.columns || 1}`}>{innerBlocks && innerBlocks.length && innerBlocks.map((block, i) => ctx.nextBlock(block, i))}</div>;
};


export default CoreGallery;