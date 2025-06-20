import { CoreBlockProps } from '@/components/blocks/core.tsx';

export const CorePostTitle = ({ blockName, attrs, ctx }: CoreBlockProps) => {
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

  const content = attrs.isLink
    ? /* html */ `
      <h2>
        <a 
          href="${ctx.post.link}" 
          target="${attrs.linkTarget ?? ''}"
        >${ctx.post.title.raw}</a>
      </h2>`
    : /* html */ `<h2>${ctx.post.title.raw}</h2>`;

  return ctx.nextBlock({
    blockName: 'core/heading',
    attrs: { level: attrs.level },
    innerContent: [content],
  });
};

export default CorePostTitle;
