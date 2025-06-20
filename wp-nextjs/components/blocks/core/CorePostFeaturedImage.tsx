import { CoreBlockProps } from '@/components/craft-blocks.tsx';
import { nextBlock } from '@/components/craft-blocks.tsx';

const CorePostFeaturedImage = ({ ctx, blockName, attrs }: CoreBlockProps) => {
  if (!ctx.post) {
    return nextBlock({
      blockName: 'dev/warning',
      ctx: {
        code: 'Caution',
        message: `The "${blockName}" block is restricted to usage within a query context. Ensure that it is nested within a "core/queryLoop" or a "core/group" that has an set post context.`,
      },
    }, undefined, null);
  }

  return nextBlock({
    blockName: 'core/image',
    attrs: { ...attrs, id: ctx.post.featured_media },
  }, undefined, null);
};

export default CorePostFeaturedImage;
