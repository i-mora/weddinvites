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
  activity: ItineraryActivity
}

export function ItineraryItem({ activity }: ItineraryItemProps) {
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
    setTime(dayjs(activity.time).format('HH:mm DD/MM/YYYY'))
  }, [activity.time])

  return (
    <>
      {/* TimelineItem */}
      <li className='relative flex flex-col gap-2'>
        {/* TimelineConnector */}
        <span className='absolute left-0 top-12 grid h-[calc(100%_-_12rem)] w-12 justify-center bg-transparent opacity-100 transition-opacity duration-200'>
          <span className='h-full w-0.5 bg-blue-gray-100'></span>
        </span>
        {/* TimelineHeader */}
        <div className='relative flex items-center justify-between gap-4 rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
          {/* TimelineIcon */}
          <div className='flex items-center gap-1'>
            <span className='relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900/10 p-3 text-gray-900'>
              <Icon name={activity.icon} />
            </span>
            <h5 className='block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased'>
              {activity.name}
            </h5>
          </div>
          <div className='flex items-center gap-1'>
            <h6 className='block font-sans text-sm font-normal leading-normal text-gray-700 antialiased'>
              {time}
            </h6>
          </div>
        </div>

        {/* TimelineBody */}
        <div className='flex w-full justify-center gap-4 pb-8'>
          <span className='pointer-events-none invisible h-full w-12 flex-shrink-0'></span>

          <div>
            {/* Tabs */}
            <div className='flex min-w-3.5 flex-col overflow-hidden'>
              <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                {/* TabsHeader */}
                <Tab.List className='relative flex flex-row rounded-lg bg-blue-gray-50 bg-opacity-60 p-1'>
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
                <Tab.Panels className='min-w-3.5 p-5'>
                  {/* TabPanel */}
                  {data.map(({ label, content }, index: number) => (
                    <Tab.Panel
                      key={crypto.randomUUID()}
                      className='block min-w-3.5 font-sans text-base font-light leading-relaxed text-blue-gray-500 text-inherit antialiased'
                    >
                      {content}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>

            <div className='flex basis-1/3 items-center justify-center gap-3'>
              {activity.codesConduct?.map((code) => (
                <TooltipIcon
                  key={crypto.randomUUID()}
                  displayText={code.name}
                  iconName={code.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </li>
    </>
  )
}
