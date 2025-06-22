'use client';

import { RenderBlock } from '@/components/craft-blocks.tsx';
import CoreGroup from '@/components/blocks/core/CoreGroup.tsx';

const CoreButtons = (self: RenderBlock) => {
  return (
    <CoreGroup {...self} blockName='core/group'/>
  )
};

export default CoreButtons;
