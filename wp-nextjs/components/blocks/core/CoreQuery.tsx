'use client';

import { useState } from 'react';
import querystring from 'query-string';

import { RenderBlock } from '@/components/craft-blocks';
import CoreGroup from '@/components/blocks/core/CoreGroup';

import { QueryContext } from '@/components/utils/client-contexts';
import { FetchContext } from '@/components/utils/client-contexts';
import { useEffect } from 'react';
const CoreQuery = (self: RenderBlock) => {
  const [query, setQuery] = useState(self.ctx?.query);
  const [entry, setFetch] = useState(self.ctx?.fetch);

  // Prevent effect from running on initial mount
  const [didMount, setDidMount] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      return;
    }

    (async () => {
      const params = querystring.stringify(query!);
      const url = new URL(
        `${location.origin}/api/revalidate/query${params ? `?${params}` : ''}`,
      );

      setFetch(await (await fetch(url)).json());
    })();
  }, [query]);

  const query_wrap: RenderBlock = {
    blockName: 'core/group',
    attrs: undefined,
    innerBlocks: [],
    innerHTML: '',
    innerContent: []
  }

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      <FetchContext.Provider value={{ fetch: entry, setFetch }}>
        <CoreGroup {...query_wrap}>{self.children}</CoreGroup>
      </FetchContext.Provider>
    </QueryContext.Provider>
  );
};

export default CoreQuery;
