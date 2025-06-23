'use client';

import { RenderBlock } from '@/components/craft-blocks.tsx';
import { findInParentCtx } from '@/components/craft-helpers.tsx';
import CoreGroup from '@/components/blocks/core/CoreGroup.tsx';

const CoreQueryNoResults = (self: RenderBlock) => {
  const fetch = findInParentCtx(self, 'fetch')?.fetch;
  const query = findInParentCtx(self, 'query')?.query;

  if (!fetch || !query) return null;
  if (fetch.posts.length) return null;

  return (
    <CoreGroup blockName='core/group'>
      {self.children}
    </CoreGroup>
  );
};

export default CoreQueryNoResults;
