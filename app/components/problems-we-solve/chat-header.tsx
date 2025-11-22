export const ChatHeader = () => {
  return (
    <div
      className='bg-white px-6 py-4 flex items-center gap-3 border-b
        border-neutral-200'
    >
      <div
        className='w-10 h-10 rounded-md bg-neutral-100 flex items-center
          justify-center text-neutral-600 text-base'
      >
        💬
      </div>
      <div className='flex-1'>
        <h3 className='text-neutral-900 font-semibold text-base'>BEYOUTIQUE</h3>
        <p className='text-neutral-500 text-xs flex items-center gap-1.5'>
          <span className='w-1.5 h-1.5 bg-green-500 rounded-md'></span>
          Online agora
        </p>
      </div>
    </div>
  );
};
