'use client'

import {
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from '@material-tailwind/react'
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
    <TimelineItem className='h-28'>
      <TimelineConnector className='!w-[78px]' />
      <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-gray-200 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
        <TimelineIcon className='p-3' variant='ghost'>
          {activityIcon}
        </TimelineIcon>
        <div className='flex flex-col gap-1'>
          <Typography variant='h6' color='blue-gray'>
            {activity}
          </Typography>
          <Typography variant='small' color='gray' className='font-normal'>
            {time}
          </Typography>
        </div>
      </TimelineHeader>
    </TimelineItem>
  )
}
