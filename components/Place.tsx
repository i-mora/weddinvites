'use client'

import { type Place } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import { GoogleMapsIcon, MapsIcon, UberIcon, WazeIcon } from './SVGIcons'

function Icon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  )
}

interface PlaceProps {
  place: Place
}

export default function Place({ place }: PlaceProps) {
  const [active, setActive] = useState<Place>()

  return (
    <>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js'></Script>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js'></Script>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js'></Script>

      <div
        className='relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'
        key={place.id}
      >
        <div className='relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700'>
          <Image
            src={place.imageURL}
            alt={place.title}
            fill
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        </div>

        <div className='p-6'>
          <div className='mb-2 flex items-center justify-between'>
            <p className='block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased'>
              {place.title}
            </p>
            <p className='block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75'>
              {place.address}
            </p>
          </div>

          <div className='p-6 pt-0'>
            <button
              type='button'
              data-ripple-light='true'
              data-dialog-target={`dialog-place-${place.id}`}
              className='select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              onClick={() => {
                setActive(place)
              }}
            >
              ¿Cómo llegar?
            </button>
            <div
              data-dialog-backdrop={`dialog-place-${place.id}`}
              data-dialog-backdrop-close='true'
              className='pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300'
            >
              <div
                data-dialog={`dialog-place-${place.id}`}
                className='relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl'
              >
                <div className='grid gap-y-4 bg-none p-4'>
                  <Link href={active?.googleMapsURL || ''} target='_blank'>
                    <button className='flex w-full items-center justify-center gap-4'>
                      <GoogleMapsIcon />
                      Google Maps
                    </button>
                  </Link>
                  <Link href={active?.uberURL || ''} target='_blank'>
                    <button className='flex w-full items-center justify-center gap-4'>
                      <UberIcon />
                      Uber
                    </button>
                  </Link>

                  <div className='relative mb-3'>
                    <h6 className='mb-0'>
                      <button
                        className='border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in'
                        data-collapse-target={`animated-collapse-${place.id}`}
                      >
                        <span>Más opciones?</span>
                        <i className='fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180'></i>
                      </button>
                    </h6>
                    <div
                      data-collapse={`animated-collapse-${place.id}`}
                      className='grid h-0 gap-y-4 overflow-hidden p-0 transition-all duration-300 ease-in-out'
                    >
                      <Link href={active?.appleMapsURL || ''} target='_blank'>
                        <button className='flex w-full items-center justify-center gap-4'>
                          <MapsIcon />
                          Maps
                        </button>
                      </Link>
                      <Link href={active?.wazeURL || ''} target='_blank'>
                        <button className='flex w-full items-center justify-center gap-4'>
                          <WazeIcon />
                          Waze
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
