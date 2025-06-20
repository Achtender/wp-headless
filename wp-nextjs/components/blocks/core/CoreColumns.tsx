import { CoreBlockProps } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

const CoreColumns = ({ ctx, attrs, innerBlocks }: CoreBlockProps) => {
  const styles: string[] = [];

  if (attrs.isStackedOnMobile === false) {
    styles.push('flex-row');
  } else {
    styles.push('flex-col md:flex-row [&>*]:md:max-w-[var(--aspect-ratio)]');
  }

  return (
    <div className={['flex gap-4', ...styles].join(' ')}>
      {innerBlocks.map((block, i) => nextBlock(block, i, ctx))}
    </div>
  );
};

export default CoreColumns;
