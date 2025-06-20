import { CoreBlockProps } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

const CoreColumn = ({ ctx, attrs, innerBlocks }: CoreBlockProps) => {
  const styles: string[] = [];
  const inlineStyles: Record<string, string> = {};

  if (attrs.verticalAlignment === 'bottom') {
    styles.push('justify-end');
  }

  if (attrs.verticalAlignment === 'center') {
    styles.push('justify-center');
  }

  if (attrs.width) {
    inlineStyles['--aspect-ratio'] = attrs.width;
  }

  return (
    <div
      className={['flex flex-col flex-1 gap-4', ...styles].join(' ')}
      style={inlineStyles}
    >
      {innerBlocks.map((block, i) => nextBlock(block, i, ctx))}
    </div>
  );
};

export default CoreColumn;
