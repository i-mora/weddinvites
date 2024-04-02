'use client'

import Script from 'next/script'
import type { guest } from './Assistance'
import { ChangeEvent, useEffect, useRef } from 'react'

export default function Pending({
  main,
  guests,
}: {
  main: guest
  guests: guest[]
}) {
  return (
    <>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js'></Script>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js'></Script>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js'></Script>

      <div className='p-6'>
        <div className='items-center text-center'>
          <p className='m-0 block max-w-[30ch] font-sans text-base font-light leading-relaxed text-inherit antialiased opacity-50'>
            Hola {main.properties.Nickname.rich_text[0].text.content}, por
            favor, confírmanos tu presencia antes del{' '}
            <span className='font-bold'>26 de Mayo de 2024</span>.
          </p>
        </div>
      </div>

      <div className='p-6 pt-0'>
        <div className='flex w-full justify-end gap-2'>
          <button
            data-ripple-light='true'
            data-dialog-target='dialog-assistance-pending'
            className='select-none rounded-lg bg-sage-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sage-800/10 transition-all hover:shadow-lg hover:shadow-sage-800/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          >
            Confirmar
          </button>
          <div
            data-dialog-backdrop='dialog-assistance-pending'
            data-dialog-backdrop-close='true'
            className='pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300'
          >
            <div
              data-dialog='dialog-assistance-pending'
              className='relative rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl sm:m-4 sm:w-4/5 sm:min-w-[80%] sm:max-w-[80%] md:w-96 md:min-w-96 md:max-w-96'
            >
              <div className='grid max-h-[calc(100vh_-_2rem)] overflow-y-auto rounded-lg bg-none '>
                <div className='sticky top-0 z-10 bg-white p-4'>
                  <h3 className='block font-sans text-2xl font-semibold leading-snug tracking-normal text-sage-800 antialiased'>
                    Confirma tu asistencia
                  </h3>
                  <h6 className='block font-sans text-base font-normal leading-relaxed tracking-normal text-sage-800 antialiased'>
                    (y la de tus acompañantes)
                  </h6>
                </div>
                {/* <div className='overflow-y-auto'> */}
                {guests.map((elem: guest) => (
                  <PendingGuest key={elem.id} elem={elem}></PendingGuest>
                ))}
                {/* </div> */}

                <div className='sticky bottom-0 bg-white p-4'>
                  <button className='w-full select-none rounded-lg bg-sage-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sage-800/10 transition-all hover:shadow-lg hover:shadow-sage-800/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className='select-none rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-deep-orange-900 transition-all hover:bg-deep-orange-900/10 active:bg-deep-orange-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            type='button'
          >
            Rechazar
          </button>
        </div>
      </div>
    </>
  )
}

function PendingGuest({ elem }: { elem: guest }) {
  const collapseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(collapseRef.current?.attributes.getNamedItem('open'))
  }, [])

  return (
    <div
      key={elem.id}
      className='border-slate-100 relative w-full cursor-pointer border-b border-solid px-2'
      ref={collapseRef}
    >
      <h5
        className='mb-0 inline-flex w-full items-start text-lg'
        data-collapse-target={`assistance-pending-collapse-${elem.id}`}
      >
        <label
          className='relative mt-1 flex items-center rounded-full p-3'
          htmlFor='custom'
        >
          <input
            type='checkbox'
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-xl border border-sage-200 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-sage-500 before:opacity-0 before:transition-opacity checked:border-sage-700 checked:bg-sage-700 checked:before:bg-sage-700 hover:before:opacity-10"
            id='custom'
            defaultChecked={collapseRef.current?.hasAttribute('open')}
          />
          <span className='pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3'
              viewBox='0 0 20 20'
              fill='white'
            >
              <path
                fillRule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                clipRule='evenodd'
              ></path>
            </svg>
          </span>
        </label>
        <span className='pointer-events-none absolute left-2/4 right-0 top-2/4 -translate-x-2/4 -translate-y-2/4 pt-1 text-xs text-white opacity-0 transition-opacity group-open:opacity-0 peer-checked:opacity-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3 w-3'
            viewBox='0 0 20 20'
            fill='white'
          >
            <path
              fillRule='evenodd'
              d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
              clipRule='evenodd'
            ></path>
          </svg>
        </span>
        <i className=''></i>
        <i className='fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100'></i>
        <span className='text-slate-700 rounded-t-1 group relative flex w-full items-center px-4 py-3 text-left font-semibold text-sage-700 transition-all ease-in'>
          {elem.properties['Full Name'].title[0].plain_text}
        </span>
      </h5>

      <div
        data-collapse={`assistance-pending-collapse-${elem.id}`}
        className='h-0 w-full overflow-hidden transition-all duration-300 ease-in-out'
      >
        <form className='grid w-full gap-y-2 px-4 pb-2 text-sm leading-normal text-blue-gray-500/80'>
          <div className='relative h-10 w-full min-w-[145px]'>
            <select className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'>
              {elem.properties.Type.select.name === 'Infante' && (
                <option value='Infantil'>Infantil</option>
              )}
              <option value='normal'>Normal</option>
              <option value='vegetariano'>Vegetariano</option>
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-gray-900 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Tipo de menu
            </label>
          </div>

          <div className='flex w-full flex-col gap-6'>
            <div className='relative h-full w-full min-w-[145px]'>
              <textarea
                className='peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50'
                placeholder=' '
              ></textarea>
              <label
                placeholder='Alergias'
                className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-gray-900 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Observaciones
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
