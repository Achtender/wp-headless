'use client';

import { RenderBlock } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

const CoreGallery = ({ ctx, attrs, innerBlocks }: RenderBlock) => {
  return (
    <div className={`grid gap-4 grid-cols-${attrs.columns || 1}`}>
      {' '}
      {innerBlocks && innerBlocks.length && innerBlocks.map((block, i) => nextBlock(block, i, ctx))}
    </div>
  );
};

export default CoreGallery;
