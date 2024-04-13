export function ItineraryItemLeft() {
  return (
    <div className='left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between'>
      <div className='order-1 w-5/12'></div>
      <div className='z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl'>
        <h1 className='mx-auto text-lg font-semibold text-white'>2</h1>
      </div>
      <div className='order-1 w-5/12 rounded-lg bg-red-400 px-6 py-4 shadow-xl'>
        <h3 className='mb-3 text-xl font-bold text-white'>Lorem Ipsum</h3>
        <p className='text-sm font-medium leading-snug tracking-wide text-white text-opacity-100'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  )
}
