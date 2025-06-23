'use client';

import { RenderBlock } from '@/components/craft-blocks.tsx';
import CoreGroup from '@/components/blocks/core/CoreGroup.tsx';

import { QueryContext } from '@/components/craft-helpers.tsx';
import { FetchContext } from '@/components/craft-helpers.tsx';

const CoreQuery = (self: RenderBlock) => {
  return (
    <QueryContext.Provider value={self.ctx.query}>
      <FetchContext.Provider value={self.ctx.fetch}>
        <CoreGroup blockName='core/group'>{self.children}</CoreGroup>
      </FetchContext.Provider>
    </QueryContext.Provider>
  );
};

export default CoreQuery;
