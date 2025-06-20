import { CoreBlockProps } from '@/components/craft-blocks.tsx';

import { Button } from '@/components/ui/button.tsx';
import { ArrowRight } from 'lucide-react';

const CoreQueryPaginationNext = ({ ctx }: CoreBlockProps) => {
  return (
    <Button
      disabled={ctx.query.offset >= ctx.query.total - ctx.query.perPage} //
      variant='outline'
      className='flex-none px-0 border w-10 text-base'
    >
      <ArrowRight className='h-5 w-5' />
      <span className='sr-only'>Next Page</span>
    </Button>
  );
};

export default CoreQueryPaginationNext;
