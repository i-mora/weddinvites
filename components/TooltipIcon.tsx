import Image from 'next/image'

interface TooltipIconProps {
  displayText: string
  icon: any
}
export default function TooltipIcon({ displayText, icon }: TooltipIconProps) {
  return (
    <div className='relative py-3 sm:mx-auto sm:max-w-xl'>
      <div className='group relative inline-flex w-28 cursor-pointer justify-center border-gray-400 text-center'>
        <Image
          src={icon}
          alt={displayText}
          height={32}
          width={64}
          className='h-8 w-8'
        />
        <div className='tooltip pointer-events-none absolute -left-1/2 bottom-full z-10 ml-14 w-28 rounded-lg bg-black px-3 py-2 text-center text-xs text-white opacity-0 group-hover:opacity-100'>
          {displayText}
        </div>
      </div>
    </div>
  )
}
