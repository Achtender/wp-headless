'use client';

import { RenderBlock } from '@/components/craft-blocks.tsx';

const CoreParagraph = (self: RenderBlock) => {
  return <div dangerouslySetInnerHTML={{ __html: self.ctx.content as string }}></div>;
};

export default CoreParagraph;
