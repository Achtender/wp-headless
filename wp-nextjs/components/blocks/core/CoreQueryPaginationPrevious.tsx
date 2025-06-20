import { CoreBlockProps } from '@/components/blocks/core.tsx';

import { Button } from '@/components/ui/button.tsx';
import { ArrowLeft } from 'lucide-react';

const CoreQueryPaginationPrevious = ({ ctx }: CoreBlockProps) => {
  return (
    <Button
      disabled={ctx.query.offset <= 0} //
      variant='outline'
      className='flex-none px-0 border w-10 text-base'
    >
      <ArrowLeft className='h-5 w-5' />
      <span className='sr-only'>Previous Page</span>
    </Button>
  );
};

export default CoreQueryPaginationPrevious;
