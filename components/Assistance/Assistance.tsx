import { GETUserInfo, NonMainGuestFilter } from '@/app/services/notionService'
import type { Guest } from '@/types/Notion'
import { isTextRichTextItemResponse } from '@notionhq/client/build/src/helpers'
import Script from 'next/script'
import Pending from './Pending'

interface AssistanceProps {
  main: Guest
}
export default async function Assistance({ main }: AssistanceProps) {
  const guests = await GETUserInfo(
    main.properties.Code.rich_text[0].plain_text,
    NonMainGuestFilter
  )

  const refused = main.properties.RSVP.select?.name === 'Refused'
  const pending = main.properties.RSVP.select?.name === 'Pending'
  const confirmed = main.properties.RSVP.select?.name === 'Confirmed'
  const nickname =
    isTextRichTextItemResponse(main.properties.Nickname.rich_text[0]) &&
    main.properties.Nickname.rich_text[0].text.content

  return (
    <>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js'></Script>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js'></Script>
      <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js'></Script>

      <div className='indicator w-full'>
        <div className='relative mt-6 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
          <div className='relative mx-4 -mt-6 overflow-hidden rounded-xl bg-clip-border text-blue-gray-800'>
            <h3 className='block font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit antialiased'>
              Asistencia
            </h3>
          </div>

          {refused && (
            <div className='p-6'>
              <div className='card-body items-center text-center'>
                <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
                  {nickname}, lamentamos mucho que no puedas asistir, pero
                  entendemos que tendrás algún motivo, probablemente de fuerza
                  mayor. También agradecemos que nos lo hayas hecho saber en
                  tiempo y forma, ya que como podrás imaginarte, una boda puede
                  ser muy costosa, de tal manera que nosotros podamos notificar
                  a nuestra wedding planner y poder hacer ajustes con nuestros
                  proveedores.
                </p>
              </div>
            </div>
          )}

          {pending && <Pending main={main} guests={guests}></Pending>}

          {confirmed && (
            <div className='p-6'>
              <div className='card-body items-center text-center'>
                <p className='m-0 max-w-[30ch] text-sm opacity-50'>
                  Muchas gracias por confirmar tu asistencia, {nickname}!!!
                  Esperamos con ansias verte en ese día.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
