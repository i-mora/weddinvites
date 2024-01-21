'use client'

import Image from 'next/image'
import InvitationIcon from '../public/invitation.png'
import DressIcon from '../public/dress.png'
import SignIcon from '../public/sign.png'
import NewlyWedsIcon from '../public/newlyweds.png'
import WeddingArchIcon from '../public/weddign-arch.png'
import Countdown from './Countdown'

export default function Navbar() {
  return (
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
  )
}
