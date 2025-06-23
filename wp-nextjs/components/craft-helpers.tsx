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


// export async function getMediaPlaceholder  (media: RenderBlock['ctx']['media'])  {
//   const self_media = media?.media_details;
//   if (!self_media) return null;

//   const response = await fetch(`${baseUrl}/api/blur?url=${encodeURIComponent(self_media.sizes?.thumbnail?.source_url)}`);
//   const arrayBuffer = await response.arrayBuffer();
//   const base64 = Buffer.from(arrayBuffer).toString('base64');
//   const mimeType = response.headers.get('content-type') || 'image/png';

//   return {
//     blurDataURL:  `data:${mimeType};base64,${base64}`,
//   };
// })();

// export function findInParentCtx(
//   self: RenderBlock,
//   key: string,
// ): RenderBlock['ctx'] | undefined {
//   let current: RenderBlock['ctx'] | undefined = self.ctx;

//   while (current) {
//     if (key in current) return current;
//     current = current.parent?.ctx as RenderBlock['ctx'] | undefined;
//   }

//   return undefined;
// }
