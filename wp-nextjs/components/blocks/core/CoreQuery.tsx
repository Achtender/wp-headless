import { getQueryPosts } from '@/lib/wordpress';
import { CoreBlockProps } from '@/components/craft-blocks.tsx';

import CoreQueryWrap from '@/components/blocks/core/dynamic/CoreQueryWrap';

const CoreQuery = async (block: CoreBlockProps) => {
  const query = await getQueryPosts({
    author: block.attrs.query.author || undefined,
    post_type: block.attrs.query.postType || undefined,
    search: block.attrs.query.search || undefined,
    per_page: block.attrs.query.perPage,
    order: block.attrs.query.order,
    order_by: block.attrs.query.orderBy,
  });

  return <CoreQueryWrap {...block} query={query} />;
};

export default CoreQuery;
