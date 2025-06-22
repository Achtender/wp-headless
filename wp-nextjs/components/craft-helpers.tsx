import type { RenderBlock } from './craft-blocks.tsx';

export function findInParentCtx(
  self: RenderBlock,
  key: string,
): RenderBlock['ctx'] | undefined {
  let current: RenderBlock['ctx'] | undefined = self.ctx;

  while (current) {
    if (key in current) return current;
    current = current.parent?.ctx as RenderBlock['ctx'] | undefined;
  }

  return undefined;
}
