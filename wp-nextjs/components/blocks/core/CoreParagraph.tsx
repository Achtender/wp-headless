'use client';

import { RenderBlock } from '@/components/craft-blocks';

const CoreParagraph = (self: RenderBlock) => {
  const text = self.ctx?.content as string ?? '';
  return <div dangerouslySetInnerHTML={{ __html: text }}></div>;
};

export default CoreParagraph;
