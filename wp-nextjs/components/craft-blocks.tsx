import { library as core_block_library } from '@/components/blocks/core';
import { library as dev_block_library } from '@/components/blocks/dev';

import * as blockSerialization from '@wordpress/block-serialization-default-parser';

export interface CoreBlockProps extends blockSerialization.ParsedBlock {
  attrs: blockSerialization.Attributes & Record<string, any>;
  ctx?: any;
  key?: React.Key;
}

const block_library = {
  ...core_block_library,
  ...dev_block_library,
} as Record<string, React.ComponentType<CoreBlockProps>>;

export function nextBlock(
  block_args: unknown, //
  key?: React.Key,
  block_parent_ctx?: CoreBlockProps['ctx']
) {
  const block = block_args as CoreBlockProps;

  const clonedBlockContext = block.ctx ? JSON.parse(JSON.stringify(block.ctx!)) : {};
  const clonedParentContext = block_parent_ctx ? JSON.parse(JSON.stringify(block_parent_ctx)) : {};

  return renderBlock(block, key ?? 0, {
    ...clonedParentContext, //
    ...clonedBlockContext,
  });
}

export function renderBlock(block: CoreBlockProps, block_key?: React.Key, block_parent_ctx?: any) {
  const clonedParentContext = block_parent_ctx ? JSON.parse(JSON.stringify(block_parent_ctx)) : {};
  const clonedBlockContext = block.ctx ? JSON.parse(JSON.stringify(block.ctx)) : {};

  let BlockComponent;
  const block_ctx = {
    ...clonedParentContext,
    ...clonedBlockContext,
  };

  // Resolve core blocks
  if (block.blockName && block.blockName in block_library) {
    BlockComponent = block_library[block.blockName as string];

    return <BlockComponent {...block} key={block_key} ctx={block_ctx} />;
  }

  // Fallback for missing blocks
  if (block.blockName) {
    BlockComponent = block_library['dev/missing'];

    return <BlockComponent {...block} key={block_key} ctx={block_ctx} />;
  }

  // If no blockName is given, return null
  return null;
}
