import React from 'react';
import type { RenderBlock } from './craft-blocks.tsx';

export const ScopeContext = React.createContext<
  undefined | RenderBlock['ctx']['scope']
>(undefined);

export const QueryContext = React.createContext<
  undefined | RenderBlock['ctx']['query']
>(undefined);

export const FetchContext = React.createContext<
  undefined | RenderBlock['ctx']['fetch']
>(undefined);

export const MediaContext = React.createContext<
  undefined | RenderBlock['ctx']['media']
>(undefined);

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
