'use client';

import { RenderBlock } from '@/components/craft-blocks.tsx';
import { JSX } from 'react';

const CoreHeading = (self: RenderBlock) => {
  const Tag = `h${self.ctx.level}` as keyof JSX.IntrinsicElements;
  return <Tag dangerouslySetInnerHTML={{ __html: self.ctx.content as string }}></Tag>;
};

export default CoreHeading;
