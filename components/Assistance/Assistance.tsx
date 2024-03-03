import Script from 'next/script'
import Pending from './Pending'
import GETUserInfo from '@/app/services/notionService'
import {
  DatabaseObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

const TABLE_HEAD = ['Invitado', 'Estado', 'Menu', '']
const TABLE_ROWS = [
  {
    name: 'John Michael',
    role: 'principal',
    menu: 'Normal',
    estado: 'confirmado',
    date: '23/04/18',
  },
  {
    name: 'Alexa Liras',
    role: 'acompañante',
    menu: 'Vegetariano',
    estado: 'confirmado',
    date: '23/04/18',
  },
  {
    name: 'Laurent Perrier',
    role: 'acompañante',
    menu: 'Normal',
    estado: 'pendiente',
    date: '19/09/17',
  },
  {
    name: 'Michael Levi',
    role: 'acompañante',
    menu: 'Vegetariano',
    estado: 'confirmado',
    date: '24/12/08',
  },
  {
    name: 'Richard Gran',
    role: 'acompañante',
    menu: 'Infantíl',
    estado: 'rechazado',
    date: '04/10/21',
  },
]

type property = {
  id: string
}

type number_prop = property & {
  type: `number`
  number: any
}

type text_prop = property & {
  type: `text`
  text: {
    content: string
    link: any
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: false
    code: false
    color: string
  }
  plain_text: string
  href: any
}

type rich_text_prop = property & {
  type: `rich_text`
  rich_text: text_prop[]
}

type title_prop = property & {
  id: `title`
  type: `title`
  title: text_prop[]
}

type select_prop = property & {
  id: string
  type: `select`
  select: {
    id: string
    name: string
    color: string
  }
}

type date_prop = property & {
  id: string
  type: `date`
  date?: any
}

export type guest = {
  properties: {
    Table: number_prop
    Observations: rich_text_prop
    Menu: select_prop
    RSVP: select_prop
    Language: select_prop
    'Due date': date_prop
    Code: rich_text_prop
    Type: select_prop
    Nickname: rich_text_prop
    'Full Name': title_prop
  }
} & (PageObjectResponse | DatabaseObjectResponse)

export default async function Assistance({ code }: { code: string }) {
  const guests = (await GETUserInfo(code)) as guest[]

  const main = guests.find(
    (val) =>
      'select' in val.properties.Type &&
      val.properties.Type.select &&
      !['Acompañante', 'Infante'].includes(val.properties.Type.select.name)
  )

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

          {main && main.properties.RSVP.select.name === 'Refused' && (
            <div className='p-6'>
              <div className='card-body items-center text-center'>
                <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
                  {/* m-0 max-w-[30ch] text-sm opacity-50 */}
                  {main.properties.Nickname.rich_text[0].text.content},
                  lamentamos mucho que no puedas asistir, pero entendemos que
                  tendrás algún motivo, probablemente de fuerza mayor. También
                  agradecemos que nos lo hayas hecho saber en tiempo y forma, ya
                  que como podrás imaginarte, una boda puede ser muy costosa, de
                  tal manera que nosotros podamos notificar a nuestra wedding
                  planner y poder hacer ajustes con nuestros proveedores.
                </p>
              </div>
            </div>
          )}

          {main && main.properties.RSVP.select.name === 'Pending' && (
            <Pending main={main} guests={guests}></Pending>
          )}

          {main && main.properties.RSVP.select.name === 'Confirmed' && (
            <div className='p-6'>
              <div className='card-body items-center text-center'>
                <p className='m-0 max-w-[30ch] text-sm opacity-50'>
                  Muchas gracias por confirmar tu asistencia,{' '}
                  {main.properties.Nickname.rich_text[0].text.content}!!! No
                  aguantamos las ganas por verte en ese día.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
