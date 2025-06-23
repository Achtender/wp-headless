'use client';

import { useContext } from 'react';
import { RenderBlock } from '@/components/craft-blocks.tsx';

import CoreGroup from '@/components/blocks/core/CoreGroup.tsx';

import { QueryContext } from '@/components/craft-helpers.tsx';
import { FetchContext } from '@/components/craft-helpers.tsx';
import { ScopeContext } from '@/components/craft-helpers.tsx';

const CorePostTemplate = (self: RenderBlock) => {
  const fetch = useContext(FetchContext);
  const query = useContext(QueryContext);

  if (!fetch || !query) return null;

  const post_loop = fetch.posts.map((post, k) => {
    const post_wrap: RenderBlock = {
      blockName: 'core/group',
      children: self.children,
      innerBlocks: [],
      attrs: undefined,
      ctx: {},
      innerHTML: '',
      innerContent: [],
    };

    // console.log(post_wrap)

    return (
      <ScopeContext.Provider key={k} value={post}>
        <CoreGroup {...post_wrap} />
      </ScopeContext.Provider>
    );
  });

  return <CoreGroup {...self} blockName='core/group'>{post_loop}</CoreGroup>;
};

export default CorePostTemplate;
