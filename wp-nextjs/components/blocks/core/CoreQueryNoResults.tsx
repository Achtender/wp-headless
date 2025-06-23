'use client';

import { useContext } from 'react';

import { RenderBlock } from '@/components/craft-blocks.tsx';
import CoreGroup from '@/components/blocks/core/CoreGroup.tsx';

import { QueryContext } from '@/components/craft-helpers.tsx';
import { FetchContext } from '@/components/craft-helpers.tsx';

const CoreQueryNoResults = (self: RenderBlock) => {
  const fetch = useContext(FetchContext);
  const query = useContext(QueryContext);

  if (!fetch || !query) return null;
  if (fetch.posts.length) return null;

  const no_post_wrap: RenderBlock = {
    blockName: 'core/group',
    children: self.children,
    innerBlocks: [],
    attrs: undefined,
    ctx: {},
    innerHTML: '',
    innerContent: [],
  };

  return <CoreGroup {...no_post_wrap} />;
};

export default CoreQueryNoResults;
