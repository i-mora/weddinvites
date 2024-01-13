import Countdown from '@/components/Countdown'
import Image from 'next/image'
import Link from 'next/link'
import InvitationIcon from '../public/invitation.png'
import DressIcon from '../public/dress.png'
import GroomSuitIcon from '../public/groom-suit.png'
import SignIcon from '../public/sign.png'
import NewlyWedsIcon from '../public/newlyweds.png'
import WeddingArchIcon from '../public/weddign-arch.png'
import Place from '@/components/Place'
import Assistance from '@/components/Assistance'

export default function Home() {
  return (
    <main className='flex min-w-full min-h-screen flex-col items-center justify-between p-4'>
      <div className='z-10 top-0 p-0 navbar absolute w-full items-center justify-between font-mono text-sm lg:flex'>
        <ul
          className='navbar-start menu menu-horizontal
          fixed top-0 left-0 flex gap-3 w-full bg-base-200 border-b border-gray-300 py-2 backdrop-blur-2xl
          lg:rounded-box lg:static lg:w-fit lg:h-auto lg:border'
        >
          <li className='hover:shadow-mds hover:bg-gray-100 rounded-md p-2'>
            <a className='flex flex-col items-center' href='#asistencia'>
              <Image src={InvitationIcon} alt='Asistencia' width={20} />
              Asistencia
            </a>
          </li>
          <li className='hover:shadow-mds hover:bg-gray-100 rounded-md p-2'>
            <a className='flex flex-col items-center' href='#invitados'>
              <Image src={NewlyWedsIcon} alt='Invitados' width={20} />
              Invitados
            </a>
          </li>
          <li className='hover:shadow-mds hover:bg-gray-100 rounded-md p-2'>
            <a className='flex flex-col items-center' href='#vestimenta'>
              <Image src={DressIcon} alt='Código de vestimenta' width={20} />
              Vestimenta
            </a>
          </li>
          <li className='hover:shadow-mds hover:bg-gray-100 rounded-md p-2'>
            <a className='flex flex-col items-center' href='#itinerario'>
              <Image src={SignIcon} alt='Itinerario' width={20} />
              Itinerario
            </a>
          </li>
          <li className='hover:shadow-mds hover:bg-gray-100 rounded-md p-2'>
            <a className='flex flex-col items-center' href='#lugar'>
              <Image src={WeddingArchIcon} alt='Lugar' width={20} />
              Lugar
            </a>
          </li>
        </ul>

        <div
          className='navbar-end
            fixed left-0 flex w-full justify-center
            bottom-0 bg-gradient-to-t border-b border-gray-300 from-white via-white h-32 pt-8
            lg:static lg:h-auto lg:w-auto lg:rounded-xl lg:border lg:bg-none lg:p-4 lg:glass'
        >
          <Countdown></Countdown>
        </div>
      </div>

      <div className='hero min-h-fit relative place-items-center my-12'>
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
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
        className='snap-proximity snap-y mb-32 flex flex-col flex-wrap gap-y-4 text-center w-full
        lg:flex-row lg:gap-x-4 lg:max-w-full lg:mb-0 lg:grid-cols-4 lg:text-left'
      >
        <div id='asistencia' className='snap-start flex-grow'>
          <div className='divider lg:hidden'>
            <span className='contents transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <Image src={InvitationIcon} alt='Invitación' width={32} />
            </span>
          </div>
          <Assistance />
        </div>

        <div id='invitados' className='snap-start flex-grow'>
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

        <div id='vestimenta' className='snap-start flex-grow'>
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

        <div id='itinerario' className='snap-start flex-grow'>
          <div className='divider lg:hidden'>
            <span className='contents transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <Image src={SignIcon} alt='Itinerario' width={32} />
            </span>
          </div>
          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body items-center text-center'>
              <h2 className={`card-title`}>Itinerario </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Instantly deploy your Next.js site to a shareable URL with
                Vercel.
              </p>
            </div>
          </div>
        </div>

        <div id='lugar' className='snap-start flex-grow'>
          <div className='divider lg:hidden'>
            <span className='contents transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <Image src={WeddingArchIcon} alt='Lugar' width={32} />
            </span>
          </div>
          <Place />
        </div>
      </div>
    </main>
  )
}
