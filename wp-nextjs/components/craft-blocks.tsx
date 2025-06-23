import * as blockSerialization from '@wordpress/block-serialization-default-parser';
import type { Page, Post } from '@/lib/wordpress.d.ts';

import {
  library as library_plugin,
  resolve as resolvePlugin,
} from '@/components/blocks/plugin';
import {
  library as library_core,
  resolve as resolveCore,
} from '@/components/blocks/core';


type BlockLibrary = {
  [blockName: string]: React.ComponentType<any>;
};

const library: {
  resolve: (self: RenderBlock) => Promise<RenderBlock>;
  library: BlockLibrary;
}[] = [
  { resolve: resolvePlugin, library: library_plugin }, //
  { resolve: resolveCore, library: library_core },
];

export type ParsedBlock = blockSerialization.ParsedBlock;
export interface RenderBlock extends blockSerialization.ParsedBlock {
  // children?: (Element | RenderBlockComponent | null)[];

  blockName: string;
  attrs: any;
  innerBlocks?: RenderBlock[];
  ctx?: {
    // dev-only context
    code?: string;
    message?: string;

    // context
    fetch?: {
      posts: (Post | Page)[];
      total_pages: number;
      total: number;
    };
    query?: {
      query: {
        author?: string;
        post_type?: string;
        search?: string;
        order?: string;
        order_by?: string;
        per_page: number;
        offset: number;
      };
    };
    scope?: Post | Page;
    // media?: FeaturedMedia;

    [key: string]: unknown;
  };
}
export type RenderBlockComponent = React.FC<RenderBlock>;


export async function resolveBlock(
  block: blockSerialization.ParsedBlock | RenderBlock,
  // parent?: RenderBlock,
  depth: number = 0,
) {
  if (!block.blockName) {
    return null;
  }

  if (depth > 50) {
    // A "core:query/loop" can import itself.
    throw new Error('resolveBlock: maximum recursion depth exceeded');
  }

  const self = block as RenderBlock;

  self.ctx = {
    ...(self.ctx ?? {}),
    // parent: parent
    //   ? { blockName: parent.blockName, ctx: parent.ctx }
    //   : undefined,
  };

  for (const blocks of library) {
    if (!(self.blockName in blocks.library)) continue;

    const result = await blocks.resolve(self) as RenderBlock;

    if (result.innerBlocks) {
      const nested: RenderBlock[] = [];

      for (const j in result.innerBlocks.filter((_) => _.blockName)) {
        // const _ = await resolveBlock(result.innerBlocks[j], result, depth + 1);
        const _ = await resolveBlock(result.innerBlocks[j],  depth + 1);
        if (_) nested.push(_);
      }

      result.innerBlocks = nested;
    }

    return result;
  }

  return resolveBlock({
    ...self,
    ctx: {
      ...self.ctx,
      code: 'Caution',
      message:
        `The "${self.blockName}" block could not be matched with block library. You may leave it as-is, convert it to custom HTML, or remove it.`,
    },
    blockName: 'dev/warning',
    attrs: {},
    innerHTML: '',
    innerContent: [],
  });
}

export function nextBlock(
  self: RenderBlock,
  k: React.Key,
): React.ReactElement | null {
  for (const blocks of library) {
    if (!(self.blockName in blocks.library)) continue;

    const Component = blocks.library[self.blockName] as React.ComponentType<
      any
    >;

    const nested = self.innerBlocks && self.innerBlocks.length > 0
      ? self.innerBlocks?.filter((_) => _.blockName)?.map((_, k) =>
        nextBlock(_, k)
      )
      : null;

    return  <Component key={k} {...self}>{nested}</Component> ;
  }

  return null;
}

const baseUrl = '';

export function dangerouslySetInnerWordPressRaw(raw?: string) {
  let normalized_raw = raw ?? '';

  // Remove absolute URLs and replace with relative paths
  normalized_raw = normalized_raw.replace(
    new RegExp(
      `<a([^>]+)href=["']${
        baseUrl!.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
      }/([^"']+)["']`,
      'g',
    ),
    `<a$1href="/$2"`,
  );

  // Remove HTML comments
  normalized_raw = normalized_raw.replace(/<!--[\s\S]*?-->/g, '');

  return {
    dangerouslySetInnerHTML: { __html: normalized_raw },
  };
}

export function trimWordPressHref(raw?: string) {
  let normalized_raw = raw ?? '';

  // Remove absolute URLs and replace with relative paths
  normalized_raw = normalized_raw.replace(baseUrl!, ``);

  return normalized_raw;
}
