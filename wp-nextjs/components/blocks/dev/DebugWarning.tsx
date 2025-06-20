import { CoreBlockProps } from '../core.tsx';

const DebugWarning = (
  { ctx, innerBlocks }: {
    ctx?: CoreBlockProps['ctx'];
    innerBlocks?: CoreBlockProps['innerBlocks'];
  },
) => (
  <div className='flex flex-col gap-4'>
    <div
      className='bg-orange-100 border border-orange-400 text-orange-700 px-4 py-4 rounded relative'
      role='alert'
    >
      <strong className='font-bold mr-1'>{ctx.code ?? 'Error'}:</strong>
      <span className='block sm:inline'>
        {ctx.message}
      </span>
    </div>

    {innerBlocks && innerBlocks.length > 0
      ? (
        <div
          className='border border-orange-400 px-4 py-4 rounded relative flex flex-col gap-4'
          role='alert'
        >
          {innerBlocks
            ? innerBlocks.map((block, i) => ctx.nextBlock(block, i))
            : null}
        </div>
      )
      : null}
  </div>
);


export default DebugWarning;

