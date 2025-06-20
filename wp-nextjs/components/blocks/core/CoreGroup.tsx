import { CoreBlockProps } from '@/components/blocks/core.tsx';

const CoreGroup = ({ ctx, attrs, innerBlocks }: CoreBlockProps) => {
  const styles: string[] = [];
  const inlineStyles: Record<string, string> = {};

  if (attrs?.layout.type === 'flex') {
    // Use flex layout with specified orientation
    if (attrs?.layout.orientation === 'vertical') {
      styles.push('flex flex-col');
    } else {
      styles.push('flex flex-row');
    }
  } else if (attrs?.layout.type === 'grid' && attrs?.layout.minimumColumnWidth === null) {
    // Use grid layout with specified column count
    if (attrs?.layout.columnCount) {
      styles.push(`grid grid-cols-${attrs?.layout.columnCount}`);
    } else {
      styles.push('grid grid-cols-1');
    }
  } else if (attrs?.layout.type === 'grid') {
    // Use auto-fill with minimum column width
    styles.push('grid');
    styles.push('[grid-template-columns:repeat(auto-fill,minmax(var(--min-col-width),1fr))]');
    inlineStyles['--min-col-width'] = `min(100%, ${attrs?.layout.minimumColumnWidth})`;
  } else {
    // Default to block layout
    styles.push('flex flex-col');
  }

  // justify content
  if (attrs?.layout.justifyContent == 'space-between') {
    styles.push('justify-between');
  }
  if (attrs?.layout.justifyContent == 'right') {
    styles.push('justify-end');
  }
  if (attrs?.layout.justifyContent == 'center') {
    styles.push('justify-center');
  }

  // align items
  if (attrs?.layout.verticalAlignment == 'bottom') {
    styles.push('items-end');
  }
  if (attrs?.layout.verticalAlignment == 'center') {
    styles.push('items-center');
  }

  // self
  if (attrs?.style?.layout?.selfStretch == 'fill') {
    styles.push('flex-1');
  }

  return (
    <div className={['gap-4', ...styles].join(' ')} style={inlineStyles}>
      {innerBlocks.map((block, i) => ctx.nextBlock(block, i))}
    </div>
  );
};

export default CoreGroup;
