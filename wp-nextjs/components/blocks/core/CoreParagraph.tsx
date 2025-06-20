import { CoreBlockProps } from '@/components/craft-blocks.tsx';
import { dangerouslySetInnerWordPressRaw } from '@/components/craft-blocks.tsx';

const CoreParagraph = ({ innerContent }: CoreBlockProps) => {
  const content =
    Array.isArray(innerContent) && innerContent.length > 0 //
      ? innerContent.join('').trim()
      : '';

  return <div {...dangerouslySetInnerWordPressRaw(content)}></div>;
};

export default CoreParagraph;
