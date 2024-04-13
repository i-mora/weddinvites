'use client'

import { type Place } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import {
  ChevronDown,
  GoogleMapsIcon,
  MapsIcon,
  RightArrowIcon,
  UberIcon,
  WazeIcon,
} from './SVGIcons'
import { Disclosure, Transition } from '@headlessui/react'

interface PlaceProps {
  place: Place
}

export default function Place({ place }: PlaceProps) {
  const [active] = useState<Place>(place)

  return (
    <>
      <div
        className='relative flex h-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'
        key={place.id}
      >
        <div className='relative mx-4 my-4 h-56 max-h-full w-full rounded-xl bg-white bg-clip-border text-gray-700'>
          <Image
            src={place.imageURL}
            alt={place.title}
            fill
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        </div>

        <div className='p-6'>
          <div className='mb-2 flex flex-col items-center gap-2'>
            <p className='block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased'>
              {place.title}
            </p>
            <p className='block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75'>
              {place.address}
            </p>
          </div>

          <div className='w-full'>
            <Disclosure as='div'>
              <Disclosure.Button className='group flex w-full select-none items-center justify-between rounded-lg  border-2 border-black px-6 py-3 text-center align-middle font-sans text-xs font-bold  uppercase text-black transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                <span>¿Cómo llegar?</span>
                <div className='h-5 w-5 ui-open:rotate-180 ui-open:transform'>
                  <ChevronDown classStyles='h-5 w-5' />
                </div>
              </Disclosure.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Disclosure.Panel className='absolute z-20 flex flex-col gap-2 pt-2'>
                  <Link href={active?.googleMapsURL || ''} target='_blank'>
                    <button className='group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-black px-6 font-medium text-white lg:gap-4'>
                      <GoogleMapsIcon />
                      <span>Google Maps</span>
                      <div className='w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100'>
                        <RightArrowIcon classStyles='h-5 w-5' />
                      </div>
                    </button>
                  </Link>
                  <Link href={active?.uberURL || ''} target='_blank'>
                    <button className='group relative inline-flex h-12 w-full items-center justify-center gap-4 overflow-hidden rounded-md bg-black px-6 font-medium text-white'>
                      <UberIcon />
                      <span>Uber</span>
                      <div className='w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100'>
                        <RightArrowIcon classStyles='h-5 w-5' />
                      </div>
                    </button>
                  </Link>
                  <Link href={active?.appleMapsURL || ''} target='_blank'>
                    <button className='group relative inline-flex h-12 w-full items-center justify-center gap-4 overflow-hidden rounded-md bg-black px-6 font-medium text-white'>
                      <MapsIcon />
                      <span>Maps</span>
                      <div className='w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100'>
                        <RightArrowIcon classStyles='h-5 w-5' />
                      </div>
                    </button>
                  </Link>
                  <Link href={active?.wazeURL || ''} target='_blank'>
                    <button className='group relative inline-flex h-12 w-full items-center justify-center gap-4 overflow-hidden rounded-md bg-black px-6 font-medium text-white'>
                      <WazeIcon />
                      <span>Waze</span>
                      <div className='w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100'>
                        <RightArrowIcon classStyles='h-5 w-5' />
                      </div>
                    </button>
                  </Link>
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
        </div>
      </div>
    </>
  )
}
