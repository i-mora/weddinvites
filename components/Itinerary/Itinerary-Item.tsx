'use client'

import { ItineraryActivity } from '@/app/types'
import Place from '@/components/Place'
import Weather from '@/components/Weather'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { Icon } from '../Icon'
import { MapIcon, WeatherIcon } from '../SVGIcons'

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
  useEffect(() => {
    setTime(dayjs(activity.time).format('HH:mm DD/MM/YYYY'))
  }, [activity.time])

  return (
    <>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/tooltip.js'></Script>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/tabs.js'></Script>

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
            <div className='flex w-full flex-col overflow-hidden'>
              <nav>
                {/* TabsHeader */}
                <ul
                  className='relative flex flex-row rounded-lg bg-blue-gray-50 bg-opacity-60 p-1'
                  data-tabs=''
                  role='list'
                >
                  {data.map(({ label, icon }, index: number) => (
                    <li
                      className='relative flex h-full w-full cursor-pointer select-none items-center justify-center bg-transparent px-2 py-1 text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased'
                      key={label}
                    >
                      <a
                        className='text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out'
                        role='tab'
                        aria-selected={index === 0 ? 'true' : 'false'}
                        aria-controls={`tabs-${activity.id}-${label}`}
                        data-tab-target=''
                      >
                        <div className='flex items-center gap-2'>
                          {icon({ classStyles: 'h-5 w-5' })}
                          <span className='ml-1'>{label}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* TabsBody */}
                <div data-tab-content='' className='p-5'>
                  {/* TabPanel */}
                  {data.map(({ label, content }, index: number) => (
                    <div
                      className={`block h-72 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
                      id={`tabs-${activity.id}-${label}`}
                      role='tabpanel'
                      key={label}
                    >
                      <div className='block font-sans text-base font-light leading-relaxed text-blue-gray-500 text-inherit antialiased'>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
              </nav>
            </div>

            <div className='group mt-8 inline-flex w-full flex-wrap items-center justify-center gap-3 p-1'>
              {activity.codesConduct?.map((code) => (
                <>
                  <span
                    data-tooltip-target='tooltip'
                    className='cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'
                    key={`span-${code.icon}`}
                  >
                    <Icon name={code.icon} classStyles='h5 w6' />
                  </span>

                  <div
                    data-tooltip='tooltip'
                    className='absolute z-50 whitespace-normal break-words rounded-lg bg-black px-3 py-1.5 font-sans text-sm font-normal text-white focus:outline-none'
                    key={`div-${code.icon}`}
                  >
                    {code.name}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </li>
    </>
  )
}
