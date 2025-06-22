import { RenderBlock } from '@/components/craft-blocks.tsx';

import DebugWarning from '@/components/blocks/dev/DebugWarning';

export const library = {
  'dev/warning': DebugWarning,
};

export async function resolve(self: RenderBlock): Promise<RenderBlock> {
  return self;
}
