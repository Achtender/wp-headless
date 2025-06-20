import { CoreBlockProps } from '../core.tsx';

const CoreColumns = ({ ctx, attrs, innerBlocks }: CoreBlockProps) => {
  const styles: string[] = [];

  if (attrs.isStackedOnMobile === false) {
    styles.push('flex-row');
  } else {
    styles.push('flex-col md:flex-row [&>*]:md:max-w-[var(--aspect-ratio)]');
  }

  return (
    <div className={['flex gap-4', ...styles].join(' ')}>
      {innerBlocks.map((block, i) => ctx.nextBlock(block, i))}
    </div>
  );
};

export default CoreColumns;
