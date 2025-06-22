'use client';

import { RenderBlock } from '@/components/craft-blocks.tsx';
import CoreGroup from '@/components/blocks/core/CoreGroup.tsx';

const CoreQueryWrap = (self: RenderBlock) => {
  return (
    <CoreGroup  blockName='core/group'>{self.children}</CoreGroup>
  )
};

export default CoreQueryWrap;
