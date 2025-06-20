
import { dangerouslySetInnerWordPressRaw } from '@/lib/wordpress';
import { CoreBlockProps } from '@/components/blocks/core.tsx';


const CoreHeading = ({ attrs, innerContent }: CoreBlockProps) => {
  const content: { html?: string } =
    Array.isArray(innerContent) && innerContent.length > 0
      ? (() => {
          const match = innerContent
            .join('')
            .trim()
            .replace(/\n/g, ' ')
            .match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/i);

          return { html: match ? match[1] : undefined };
        })()
      : {};

  const level = typeof attrs?.level === 'number' && attrs.level >= 1 && attrs.level <= 6 ? attrs.level : 2;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag {...dangerouslySetInnerWordPressRaw(content.html ?? '')}></Tag>;
};

export default CoreHeading;