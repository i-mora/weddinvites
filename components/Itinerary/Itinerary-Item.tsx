'use client'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useEffect, useState } from 'react'

interface ItineraryItemProps {
  activityIcon: JSX.Element
  activity: string
  activityTime: string
}

export function ItineraryItem({
  activity,
  activityTime,
  activityIcon,
}: ItineraryItemProps) {
  dayjs.extend(customParseFormat)
  const [time, setTime] = useState('')
  useEffect(() => {
    setTime(dayjs(activityTime).format('HH:mm DD/MM/YYYY'))
  }, [activityTime])

  return (
    <>
      <li className='relative flex h-28 flex-col gap-2'>
        <span className='absolute left-0 grid !w-[78px] justify-center bg-transparent transition-opacity duration-200'>
          <span className='h-full w-0.5 bg-blue-gray-100'></span>
        </span>
        <div className='relative flex items-center gap-4 rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
          <span className='relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900/10 p-3 text-gray-900'>
            {activityIcon}
          </span>
          <div className='flex flex-col gap-1'>
            <h6 className='block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased'>
              {activity}
            </h6>
            <p className='block font-sans text-sm font-normal leading-normal text-gray-700 antialiased'>
              {time}
            </p>
          </div>
        </div>
      </li>
    </>
  )
}
