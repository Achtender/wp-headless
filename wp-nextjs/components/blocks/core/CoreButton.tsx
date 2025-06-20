import { trimWordPressHref } from '@/components/craft-blocks.tsx';
import { CoreBlockProps } from '@/components/craft-blocks.tsx';

import { Button } from '@/components/ui/button.tsx';
import Link from 'next/link';
// import { ArrowRight, ArrowUpRight } from 'lucide-react';

const CoreButton = ({ innerContent }: CoreBlockProps) => {
  const content: { href?: string; target?: string; rel?: string; text?: string } =
    Array.isArray(innerContent) && innerContent.length > 0
      ? (() => {
          const innerHtml = innerContent.join('').trim().replace(/\n/g, ' ');

          const href = innerHtml.match(/\bhref=["']([^"']*)["']/i)?.[1] ?? undefined;
          const target = innerHtml.match(/\btarget=["']([^"']*)["']/i)?.[1] ?? undefined;
          const rel = innerHtml.match(/\brel=["']([^"']*)["']/i)?.[1] ?? undefined;
          const text = innerHtml.match(/<a\b[^>]*>(.*?)<\/a>/i)?.[1] ?? undefined;

          return { href, target, rel, text };
        })()
      : {};

  return (
    <Button asChild variant='outline'>
      <Link
        data-role='button' //
        href={content.href ? trimWordPressHref(content.href) : ''} // href can not be undefined
        rel={content.rel}
        target={content.target}
        className='gap-2'
      >
        {content.text}
        {/* {content.target ? <ArrowUpRight className='w-5 h-5' /> : <ArrowRight className='w-5 h-5' />} */}
      </Link>
    </Button>
  );
};

export default CoreButton;
