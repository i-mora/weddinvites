import Assistance from '@/components/Assistance/Assistance'
import Navbar from '@/components/NavBar'
import Place from '@/components/Place'
import Image from 'next/image'
import InvitationIcon from '../../public/invitation.png'
import DressIcon from '../../public/dress.png'
import GroomSuitIcon from '../../public/groom-suit.png'
import SignIcon from '../../public/sign.png'
import NewlyWedsIcon from '../../public/newlyweds.png'
import WeddingArchIcon from '../../public/weddign-arch.png'
import { Itinerary } from '@/components/Itinerary/Itinerary'
import { redirect } from 'next/navigation'
import GETUserInfo from '../services/notionService'
import { Gifts } from '@/components/Gifts/Gifts'

interface InvitationPageProps {
  params: { invCode?: string }
}

export default async function InvitationPage({ params }: InvitationPageProps) {
  //TODO: Possible switch to NextAuth for avoid lines 21 to 27
  if (!params?.invCode) {
    redirect(`/`)
  }
  const user = await GETUserInfo(params.invCode)
  if (user && user.length < 1) {
    redirect(`/`)
  }
  return (
    <div className='flex-col items-center justify-between p-4'>
      <Navbar />
      <div className='hero relative my-12 min-h-fit place-items-center'>
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-neutral-content text-center'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
            <p className='mb-5'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
      <div
        className='mb-32 flex w-full snap-y snap-proximity flex-col flex-wrap gap-y-4 text-center
    lg:mb-0 lg:max-w-full lg:grid-cols-4 lg:flex-row lg:gap-x-4 lg:text-left'
      >
        <div id='invitados' className='flex-grow snap-start'>
          <div className='divider lg:hidden'>
            <span className='contents transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <Image src={NewlyWedsIcon} alt='Invitados' width={32} />
            </span>
          </div>
          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body items-center text-center'>
              <h2 className={`card-title`}>Invitados </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </div>
          </div>
        </div>

        <div id='vestimenta' className='flex-grow snap-start'>
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

        <div id='itinerario' className='flex-grow snap-start'>
          <div className='divider lg:hidden'>
            <span className='contents transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <Image src={SignIcon} alt='Itinerario' width={32} />
            </span>
          </div>
          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body items-center text-center'>
              <h2 className={`card-title`}>Itinerario</h2>
              <div className='flex justify-center'>
                <Itinerary type='photograph' />
              </div>
            </div>
          </div>
        </div>

        <div id='lugar' className='flex-grow snap-start'>
          <div className='divider lg:hidden'>
            <span className='contents transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <Image src={WeddingArchIcon} alt='Lugar' width={32} />
            </span>
          </div>
          <Place />
        </div>
        <Gifts />

        <div id='asistencia' className='flex-grow snap-start'>
          <div className='divider lg:hidden'>
            <span className='contents transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <Image src={InvitationIcon} alt='Invitación' width={32} />
            </span>
          </div>
          <Assistance code={params.invCode} />
        </div>
      </div>
    </div>
  )
}
