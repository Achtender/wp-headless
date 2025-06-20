import * as blockSerialization from '@wordpress/block-serialization-default-parser';
import { getFeaturedMediaById } from '@/lib/wordpress';
import { dangerouslySetInnerWordPressRaw } from '@/lib/wordpress';
import Image from 'next/image';

export interface CoreBlockProps extends blockSerialization.ParsedBlock {
  attrs: blockSerialization.Attributes & Record<string, any>;
  ctx?: any;
  key?: React.Key;
}

import { JSX } from 'react';

import CoreColumn from '@/components/blocks/core/CoreColumn';
import CoreColumns from '@/components/blocks/core/CoreColumns';
import CoreQuery from '@/components/blocks/core/CoreQuery';
import CorePostFeaturedImage from '@/components/blocks/core/CorePostFeaturedImage';
import CorePostTitle from '@/components/blocks/core/CorePostTitle';

// const CoreGroup = (
//   { ctx, blockName, attrs, innerBlocks, innerHTML, innerContent }: CoreBlockProps,
// ) => <>{innerBlocks.map((block, i) => ctx.nextBlock(block, i))}</>;

const CoreSeparator = ({}: CoreBlockProps) => {
  return <hr className='border-b-1 border-gray-400' />;
};

const CoreImage = async ({ attrs }: CoreBlockProps) => {
  const style = [
    'flex-1',
    'h-auto',
    'object-cover',
    'aspect-[var(--aspect-ratio)]',
  ];
  const inlineStyles: Record<string, string> = {};
  inlineStyles['--aspect-ratio'] = attrs.aspectRatio;

  const media = await getFeaturedMediaById(attrs.id); // TODO(@all): query media
  const media_source = media.media_details.sizes;
  const media_source_url =
    media_source[attrs.sizeSlug].sources['image/avif'].source_url;

  return (
    <div className='flex flex-col items-center gap-2'>
      <Image
        src={media_source_url}
        alt={attrs.alt || 'an image'}
        className={style.join(' ')}
        style={inlineStyles}
        width={media_source[attrs.sizeSlug].width}
        height={media_source[attrs.sizeSlug].height}
        loading='lazy'
        fetchPriority='low'
      />
      {/* <span className="block text-center text-xs">{attrs.id}</span> */}
    </div>
  );
};

const CoreGallery = ({ ctx, attrs, innerBlocks }: CoreBlockProps) => {
  return (
    <div className={`grid gap-4 grid-cols-${attrs.columns || 1}`}>
      {innerBlocks && innerBlocks.length &&
        innerBlocks.map((block, i) => ctx.nextBlock(block, i))}
    </div>
  );
};

const CoreGroup = ({ ctx, attrs, innerBlocks }: CoreBlockProps) => {
  const styles: string[] = [];
  const inlineStyles: Record<string, string> = {};

  if (attrs.layout.type === 'flex') {
    // Use flex layout with specified orientation
    if (attrs.layout.orientation === 'vertical') {
      styles.push('flex flex-col');
    } else {
      styles.push('flex flex-row');
    }
  } else if (
    attrs.layout.type === 'grid' && attrs.layout.minimumColumnWidth === null
  ) {
    // Use grid layout with specified column count
    if (attrs.layout.columnCount) {
      styles.push(`grid grid-cols-${attrs.layout.columnCount}`);
    } else {
      styles.push('grid grid-cols-1');
    }
  } else if (attrs.layout.type === 'grid') {
    // Use auto-fill with minimum column width
    styles.push('grid');
    styles.push(
      '[grid-template-columns:repeat(auto-fill,minmax(var(--min-col-width),1fr))]',
    );
    inlineStyles['--min-col-width'] =
      `min(100%, ${attrs.layout.minimumColumnWidth})`;
  } else {
    // (attrs.layout.type === "default")
    // Default to block layout
    styles.push('flex flex-col');
  }

  return (
    <div className={['gap-4', ...styles].join(' ')} style={inlineStyles}>
      {innerBlocks.map((block, i) => ctx.nextBlock(block, i))}
    </div>
  );
};

const CoreHeading = ({ attrs, innerContent }: CoreBlockProps) => {
  const content = Array.isArray(innerContent) && innerContent.length > 0
    ? (() => {
      const match = innerContent.join('').trim().replace(/\n/g, ' ').match(
        /<h[1-6][^>]*>(.*?)<\/h[1-6]>/i,
      );
      return match ? match[1] : '';
    })()
    : '';
  const level =
    typeof attrs?.level === 'number' && attrs.level >= 1 && attrs.level <= 6
      ? attrs.level
      : 2;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag {...dangerouslySetInnerWordPressRaw(content)}></Tag>;
};

const CoreParagraph = ({ innerContent }: CoreBlockProps) => {
  const content = innerContent.join('');

  return <div {...dangerouslySetInnerWordPressRaw(content)}></div>;
};

export const library = {
  'core/column': CoreColumn,
  'core/columns': CoreColumns,
  'core/query': CoreQuery,
  'core/post-title': CorePostTitle,
  'core/post-featured-image': CorePostFeaturedImage,
  'core/heading': CoreHeading,
  'core/paragraph': CoreParagraph,
  'core/image': CoreImage,
  'core/gallery': CoreGallery,
  'core/group': CoreGroup,
  'core/post-template': CoreGroup,
  'core/separator': CoreSeparator,
};
