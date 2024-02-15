'use client'

import { ActivityLocation, Restriction } from '@/app/types'
import {
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  Tooltip,
  TimelineBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
import { WeatherIcon, MapIcon } from '../SVGIcons'
import Place from '@/components/Place'
import Weather from '@/components/Weather'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useEffect, useState } from 'react'

interface ItineraryItemProps {
  activityIcon: JSX.Element
  activity: string
  activityTime: string
  activityLocation: ActivityLocation
  codesConduct?: Restriction[]
}

export function ItineraryItem({
  activity,
  activityTime,
  activityIcon,
  activityLocation,
  codesConduct,
}: ItineraryItemProps) {
  const data = [
    {
      label: 'Lugar',
      value: 'Lugar',
      icon: MapIcon,
      content: <Place place={activityLocation} />,
    },
    {
      label: 'Clima',
      value: 'Clima',
      icon: WeatherIcon,
      content: <Weather place={activityLocation} />,
    },
  ]
  dayjs.extend(customParseFormat)
  const [time, setTime] = useState('')
  useEffect(() => {
    setTime(dayjs(activityTime).format('HH:mm DD/MM/YYYY'))
  }, [activityTime])

  return (
    <TimelineItem>
      <TimelineConnector />
      <TimelineHeader className='justify-between'>
        <div className='flex items-center gap-2'>
          <TimelineIcon className='p-2'>{activityIcon}</TimelineIcon>
          <Typography variant='h5'>{activity}</Typography>
        </div>
        <div className='flex items-center gap-2'>
          <Typography variant='h6'>{time}</Typography>
        </div>
      </TimelineHeader>
      <TimelineBody className='pb-8 justify-center w-full'>
        <Tabs value='Clima' className='flex flex-col w-full'>
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className='flex items-center gap-2'>
                  {icon({ classStyles: 'h-5 w-5' })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, content }) => (
              <TabPanel key={value} value={value} className='h-72'>
                {content}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
        <div className='group mt-8 inline-flex flex-wrap items-center gap-3 p-1 w-full justify-center'>
          {codesConduct?.map((code) => (
            <Tooltip key={crypto.randomUUID()} content={code.name}>
              <span className='cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                {code.icon}
              </span>
            </Tooltip>
          ))}
        </div>
      </TimelineBody>
    </TimelineItem>
  )
}
