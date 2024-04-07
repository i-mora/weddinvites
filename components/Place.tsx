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
import { Dialog, Disclosure, Transition } from '@headlessui/react'

interface PlaceProps {
  place: Place
}

export default function Place({ place }: PlaceProps) {
  const [active] = useState<Place>(place)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
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
              onClick={openModal}
              className='select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            >
              ¿Cómo llegar?
            </button>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='fixed inset-0 bg-black/25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                  <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-out duration-300'
                      enterFrom='opacity-0 scale-95'
                      enterTo='opacity-100 scale-100'
                      leave='ease-in duration-200'
                      leaveFrom='opacity-100 scale-100'
                      leaveTo='opacity-0 scale-95'
                    >
                      <Dialog.Panel className='m-4 flex w-2/5 min-w-[40%] max-w-[40%] flex-col gap-2 rounded-lg bg-white p-3 font-sans text-base font-light leading-relaxed text-white antialiased shadow-2xl'>
                        <Link
                          href={active?.googleMapsURL || ''}
                          target='_blank'
                        >
                          <button className='group relative inline-flex h-12 w-full items-center justify-center gap-4 overflow-hidden rounded-md bg-black px-6 font-medium '>
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
                        <Disclosure as='div'>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className='border-slate-100 text-slate-700 rounded-t-1 group flex w-full cursor-pointer justify-between border-b border-solid p-4 py-2 text-left font-semibold text-black transition-all ease-in'>
                                <span>Más opciones?</span>
                                <div
                                  className={`${
                                    open ? 'rotate-180 transform' : ''
                                  } h-5 w-5`}
                                >
                                  <ChevronDown classStyles='h-5 w-5' />
                                </div>
                              </Disclosure.Button>
                              <Disclosure.Panel className='flex flex-col gap-2'>
                                <Link
                                  href={active?.appleMapsURL || ''}
                                  target='_blank'
                                >
                                  <button className='group relative inline-flex h-12 w-full items-center justify-center gap-4 overflow-hidden rounded-md bg-black px-6 font-medium text-white'>
                                    <MapsIcon />
                                    <span>Maps</span>
                                    <div className='w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100'>
                                      <RightArrowIcon classStyles='h-5 w-5' />
                                    </div>
                                  </button>
                                </Link>
                                <Link
                                  href={active?.wazeURL || ''}
                                  target='_blank'
                                >
                                  <button className='group relative inline-flex h-12 w-full items-center justify-center gap-4 overflow-hidden rounded-md bg-black px-6 font-medium text-white'>
                                    <WazeIcon />
                                    <span>Waze</span>
                                    <div className='w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100'>
                                      <RightArrowIcon classStyles='h-5 w-5' />
                                    </div>
                                  </button>
                                </Link>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </>
  )
}
