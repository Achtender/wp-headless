import * as blockSerialization from '@wordpress/block-serialization-default-parser';

export interface CoreBlockProps extends blockSerialization.ParsedBlock {
  attrs: blockSerialization.Attributes & Record<string, any>;
  ctx?: any;
  key?: React.Key;
}

import CoreImage from '@/components/blocks/core/CoreImage';
import CoreGallery from '@/components/blocks/core/CoreGallery';
import CoreHeading from '@/components/blocks/core/CoreHeading';
import CoreParagraph from '@/components/blocks/core/CoreParagraph';
import CoreButton from '@/components/blocks/core/CoreButton';
import CoreButtons from '@/components/blocks/core/CoreButtons';
import CoreSeparator from '@/components/blocks/core/CoreSeparator';
import CoreColumn from '@/components/blocks/core/CoreColumn';
import CoreColumns from '@/components/blocks/core/CoreColumns';
import CoreQuery from '@/components/blocks/core/CoreQuery';
import CoreGroup from '@/components/blocks/core/CoreGroup';
import CorePostFeaturedImage from '@/components/blocks/core/CorePostFeaturedImage';
import CorePostTitle from '@/components/blocks/core/CorePostTitle';
import CoreQueryPagination from '@/components/blocks/core/CoreQueryPagination';
import CoreQueryPaginationPrevious from '@/components/blocks/core/CoreQueryPaginationPrevious';
import CoreQueryPaginationNext from '@/components/blocks/core/CoreQueryPaginationNext';
import CoreQueryPaginationNumbers from '@/components/blocks/core/CoreQueryPaginationNumbers';

export const library = {
  'core/query-pagination': CoreQueryPagination,
  'core/query-pagination-previous': CoreQueryPaginationPrevious,
  'core/query-pagination-next': CoreQueryPaginationNext,
  'core/query-pagination-numbers': CoreQueryPaginationNumbers,
  'core/buttons': CoreButtons,
  'core/button': CoreButton,
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

// const CoreGroup = (
//   { ctx, blockName, attrs, innerBlocks, innerHTML, innerContent }: CoreBlockProps,
// ) => <>{innerBlocks.map((block, i) => ctx.nextBlock(block, i))}</>;
