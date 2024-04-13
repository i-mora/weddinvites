'use client'

import { ItineraryActivity } from '@/app/types'
import Place from '@/components/Place'
import Weather from '@/components/Weather'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useEffect, useState } from 'react'
import { Icon } from '../Icon'
import { MapIcon, WeatherIcon } from '../SVGIcons'
import { Tab } from '@headlessui/react'
import TooltipIcon from '../TooltipIcon'

interface ItineraryItemProps {
  position: string
  activity: ItineraryActivity
}

export function ItineraryItem({ position, activity }: ItineraryItemProps) {
  const data = [
    {
      label: 'Lugar',
      value: 'Lugar',
      icon: MapIcon,
      content: <Place place={activity.location} />,
    },
    {
      label: 'Clima',
      value: 'Clima',
      icon: WeatherIcon,
      content: <Weather place={activity.location} />,
    },
  ]
  dayjs.extend(customParseFormat)
  const [time, setTime] = useState('')
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {
    setTime(dayjs(activity.time).format('HH:mm'))
  }, [activity.time])

  return (
    <>
      <div className={`${position} mb-8 flex w-full justify-between`}>
        <div className='order-1 w-5/12'></div>
        <div className='z-20 order-1 flex h-24 w-24 items-center justify-center rounded-full bg-white/30 shadow-xl backdrop-blur-xl'>
          <Icon name={activity.icon} classStyles='h-16 w-16' />
        </div>
        <div className='order-1 w-5/12 rounded-lg px-6 py-4'>
          <h3 className='mb-3 flex justify-between text-xl font-bold text-gray-800'>
            {activity.name} <span>{time}</span>
          </h3>
          <section className='max-h-96 text-sm leading-snug tracking-wide text-gray-900 text-opacity-100'>
            <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
              {/* TabsHeader */}
              <Tab.List className='relative flex flex-row rounded-lg bg-blue-gray-50 bg-opacity-65 p-1'>
                {data.map(({ label, icon }, index: number) => (
                  <Tab
                    className='relative flex h-full w-full select-none items-center justify-center bg-transparent px-2 py-1 text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased'
                    key={crypto.randomUUID()}
                  >
                    <div className='text-slate-700 mb-0 flex w-full items-center justify-center gap-2 rounded-lg border-0 px-0 py-1 transition-all ease-in-out ui-selected:bg-white'>
                      {icon({ classStyles: 'h-5 w-5' })}
                      <span className='ml-1'>{label}</span>
                    </div>
                  </Tab>
                ))}
              </Tab.List>
              {/* TabsBody */}
              <Tab.Panels className='min-h-3.5 min-w-3.5 p-5'>
                {/* TabPanel */}
                {data.map(({ label, content }) => (
                  <Tab.Panel
                    key={crypto.randomUUID()}
                    className='flex w-full justify-center font-sans text-base font-light leading-relaxed text-blue-gray-500 text-inherit antialiased'
                  >
                    {content}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
            <div className='flex basis-1/3 items-center justify-center gap-3'>
              {activity.codesConduct?.map((code) => (
                <TooltipIcon
                  key={crypto.randomUUID()}
                  displayText={code.name}
                  iconName={code.icon}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
