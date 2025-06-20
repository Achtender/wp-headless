import { CoreBlockProps } from '@/components/blocks/core.tsx';
import { getFeaturedMediaById } from '@/lib/wordpress';
import Image from 'next/image';

const CoreImage = async ({ attrs }: CoreBlockProps) => {
  const style = ['flex-1', 'h-auto', 'object-cover', 'aspect-[var(--aspect-ratio)]'];
  const inlineStyles: Record<string, string> = {};
  inlineStyles['--aspect-ratio'] = attrs.aspectRatio;

  const media = await getFeaturedMediaById(attrs.id); // TODO(@all): query media
  const media_source = media.media_details.sizes;

  // console.log('CoreImage media_source', media_source);
  // console.log('CoreImage attrs.sizeSlug', attrs.sizeSlug);

  const media_source_k = attrs.sizeSlug ?? 'medium_large';
  const media_source_files = media_source[media_source_k].sources;
  const media_source_url =
    'image/avif' in media_source_files //
      ? media_source_files['image/avif'].source_url
      : media_source_files['image/jpeg'].source_url;

  return (
    <div className='flex flex-col items-center gap-2'>
      <Image
        src={media_source_url}
        alt={attrs.alt || 'an image'}
        className={style.join(' ')}
        style={inlineStyles}
        width={media_source[media_source_k].width}
        height={media_source[media_source_k].height}
        loading='lazy'
        fetchPriority='low'
      />
      {/* <span className="block text-center text-xs">{attrs.id}</span> */}
    </div>
  );
};

export default CoreImage;
