'use client';

import { findInParentCtx, RenderBlock } from '@/components/craft-blocks.tsx';

import { Button } from '@/components/ui/button.tsx';
import { ArrowRight } from 'lucide-react';

const CoreQueryPaginationNext = (self: RenderBlock) => {
  const query = findInParentCtx(self, 'query');

  if (!query) {
    return <>No query</>
  }

  const offset = query?.query.offset ?? null;
  const offset_limit = query
    ? query?.total - query?.query.per_page
    : 0;

  return (
    <Button
      disabled={!offset || offset >= offset_limit} //
      variant='outline'
      className='flex-none px-0 border w-10 text-base'
    >
      <ArrowRight className='h-5 w-5' />
      <span className='sr-only'>Next Page</span>
    </Button>
  );
};

export default CoreQueryPaginationNext;
