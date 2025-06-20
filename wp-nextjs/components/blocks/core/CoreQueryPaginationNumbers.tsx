import { CoreBlockProps } from '@/components/craft-blocks.tsx';

import { Button } from '@/components/ui/button.tsx';
import { CircleSmall, Dot } from 'lucide-react';

const CoreQueryPaginationNumbers = ({ ctx, attrs }: CoreBlockProps) => {
  const pageNum = 1 + (ctx.query.offset > 0 ? ctx.query.offset / ctx.query.perPage : 0);
  const totalPages = ctx.query.totalPages;

  const text = `${pageNum} / ${totalPages}`;

  const query_pages = [];

  for (let k = 0; k < totalPages; k++) {
    query_pages.push({ offset: k * ctx.query.perPage });
  }

  return (
    <div className='flex flex-row gap-2 items-center'>
      {query_pages.map((_query_page, k) => {
        const isCurrent = k === pageNum - 1;

        const renderIcon = isCurrent ? ( //
          <CircleSmall className='h-4 w-4' fill='true' />
        ) : (
          <CircleSmall className='h-5 w-5' />
        );

        // TODO(@all): add logic to switch to _query_page

        return (
          <Button
            key={k} //
            // disabled={isCurrent}
            variant='link'
            className='flex-none px-0 border w-7 h-7 [&:not(:hover)]:border-none text-base'
          >
            {renderIcon}
            <span className='sr-only'>{text}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default CoreQueryPaginationNumbers;
