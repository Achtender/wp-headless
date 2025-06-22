'use client';

import { RenderBlock } from '@/components/craft-blocks.tsx';
import { findInParentCtx } from '@/components/craft-helpers.tsx';
import CoreGroup from '@/components/blocks/core/CoreGroup.tsx';

const CorePostTemplate = (self: RenderBlock) => {
  const fetch = findInParentCtx(self, 'fetch')?.fetch;
  const query = findInParentCtx(self, 'query')?.query;

  if (!fetch || !query) return null;

  // ---
  // console.log('findInParentCtx', findInParentCtx(self, 'query'));
  // console.log({ fetch });
  // console.log({ query });
  // ---

  const _ = fetch.posts.map((post, k) => {
    // return <div key={k}>{post.id}</div>;
    return <CoreGroup key={k} blockName='core/group'>{post.id}</CoreGroup>;
  });

  return <CoreGroup {...self} blockName='core/group'>{_}</CoreGroup>;
};

export default CorePostTemplate;
