import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';
// export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new Response('Missing url', { status: 400 });
  }

  const size = 20;
  // Render a small version (e.g., 16x16)
  return new ImageResponse(
    (
      <img
        src={imageUrl}
        width={size}
        height={size}
        // style={{ filter: 'blur(4px)' }}
      />
    ),
    { width: size, height: size },
  );
}
