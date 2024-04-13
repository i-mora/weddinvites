import Assistance from '@/components/Assistance/Assistance'
import Navbar from '@/components/NavBar'
import Image from 'next/image'
import InvitationIcon from '../../public/invitation.png'
import DressIcon from '../../public/dress.png'
import GroomSuitIcon from '../../public/groom-suit.png'
import SignIcon from '../../public/sign.png'
import NewlyWedsIcon from '../../public/newlyweds.png'
import { Itinerary } from '@/components/Itinerary/Itinerary'
import { redirect } from 'next/navigation'
import GETUserInfo from '../services/notionService'
import { Gifts } from '@/components/Gifts/Gifts'
import { ItineraryType } from '../types'
import Countdown from '@/components/Countdown'

interface InvitationPageProps {
  params: { invCode?: string }
}

export default async function InvitationPage({ params }: InvitationPageProps) {
  //TODO: Possible switch to NextAuth for avoid lines 21 to 27
  if (!params?.invCode) {
    redirect(`/`)
  }
  let typeGuest: ItineraryType
  const user = await GETUserInfo(params.invCode)
  if (!user) {
    redirect(`/`)
  }
  const typeFile = user.properties['Type']
  if (typeFile.type === 'select') {
    typeGuest =
      (typeFile['select']?.name as ItineraryType) ?? ('none' as ItineraryType)
  } else {
    typeGuest = 'none' as ItineraryType
  }
  console.log(user.properties.Nickname)
  return (
    <div className='gradient-radial flex flex-col items-center justify-between gap-4'>
      {/* <Navbar /> */}
      <section className='m-0 h-screen w-full bg-gray-700 bg-hero-image bg-center bg-no-repeat p-0 bg-blend-multiply'>
        <div className='mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-72'>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl'>
            ¡Bienvenido/a
            {user.properties.Nickname.type === 'rich_text'
              ? ' ' + user.properties.Nickname.rich_text[0].plain_text + ' '
              : ' No name '}
            !
          </h1>
          <p className='mb-8 text-pretty text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl'>
            Nos llena de alegría que estés aquí para compartir este momento tan
            especial con nosotros. Esperamos que disfrutes explorando todos los
            detalles y preparativos.
          </p>
          <p className='mb-8 text-pretty text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl'>
            <strong>
              No olvides confirmar tu asistencia al final de la página para que
              podamos contar con tu presencia en este día tan importante para
              nosotros.
            </strong>
          </p>
          <p className='mb-8 text-pretty text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl'>
            ¡Gracias por formar parte de esta celebración!
          </p>
          <div className='navbar-end lg:glass fixed bottom-0 left-0 flex h-32 w-full flex-col justify-center space-y-4 border-b border-gray-300 bg-gradient-to-t from-gray-500 via-gray-400 pt-8 sm:flex-row sm:justify-center sm:space-y-0 lg:static lg:h-auto lg:w-auto lg:rounded-xl lg:border lg:bg-none lg:p-4 lg:text-white'>
            <Countdown />
          </div>
        </div>
      </section>
      <div id='itinerario' className='flex h-full w-full justify-center'>
        <Itinerary type={typeGuest} />
      </div>
      <div id='vestimenta' className='flex h-full w-full justify-center'>
        <div className='divider lg:hidden'>
          <span className='contents transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            <Image src={DressIcon} alt='Vestido' width={32} />
            <Image src={GroomSuitIcon} alt='Traje' width={32} />
          </span>
        </div>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body items-center text-center'>
            <h2 className={`card-title`}>Código de vestimenta</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore starter templates for Next.js.
            </p>
          </div>
        </div>
      </div>
      <div id='regalos' className='flex h-full w-full justify-center'>
        <Gifts />
      </div>
      <div id='asistencia' className='flex h-full w-full justify-center'>
        <div className='divider lg:hidden'>
          <span className='contents transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            <Image src={InvitationIcon} alt='Invitación' width={32} />
          </span>
        </div>
        <Assistance code={params.invCode} />
      </div>
    </div>
  )
}
