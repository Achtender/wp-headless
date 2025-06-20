import { CoreBlockProps } from '@/components/blocks/core.tsx';

 const CorePostFeaturedImage = (
  { ctx, blockName, attrs }: CoreBlockProps,
) => {
  if (!ctx.post) {
    return ctx.nextBlock({
      blockName: 'dev/warning',
      ctx: {
        code: 'Caution',
        message:
          `The "${blockName}" block is restricted to usage within a query context. Ensure that it is nested within a "core/queryLoop" or a "core/group" that has an set post context.`,
      },
    });
  }

  return ctx.nextBlock({
    blockName: 'core/image',
    attrs: { ...attrs, id: ctx.post.featured_media },
  });
};

export default CorePostFeaturedImage;