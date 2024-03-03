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
    <div className='navbar absolute top-0 z-10 w-full items-center justify-between p-0 font-mono text-sm lg:flex'>
      <ul className='navbar-start menu menu-horizontal bg-base-200 lg:rounded-box fixed left-0 top-0 flex w-full gap-3 border-b border-gray-300 py-2 backdrop-blur-2xl lg:static lg:h-auto lg:w-fit lg:border'>
        <li className='hover:shadow-mds rounded-md p-2 hover:bg-gray-100'>
          <a
            className='flex flex-col items-center font-sans'
            href='#asistencia'
          >
            <Image width={20} src={InvitationIcon} alt='Asistencia' />
            Asistencia
          </a>
        </li>
        <li className='hover:shadow-mds rounded-md p-2 hover:bg-gray-100'>
          <a className='flex flex-col items-center font-sans' href='#invitados'>
            <Image width={20} src={NewlyWedsIcon} alt='Invitados' />
            Invitados
          </a>
        </li>
        <li className='hover:shadow-mds rounded-md p-2 hover:bg-gray-100'>
          <a
            className='flex flex-col items-center font-sans'
            href='#vestimenta'
          >
            <Image width={20} src={DressIcon} alt='Código de vestimenta' />
            Vestimenta
          </a>
        </li>
        <li className='hover:shadow-mds rounded-md p-2 hover:bg-gray-100'>
          <a
            className='flex flex-col items-center font-sans'
            href='#itinerario'
          >
            <Image width={20} src={SignIcon} alt='Itinerario' />
            Itinerario
          </a>
        </li>
        <li className='hover:shadow-mds rounded-md p-2 hover:bg-gray-100'>
          <a className='flex flex-col items-center font-sans' href='#lugar'>
            <Image width={20} src={WeddingArchIcon} alt='Lugar' />
            Lugar
          </a>
        </li>
      </ul>
      <div className='navbar-end lg:glass fixed bottom-0 left-0 flex h-32 w-full justify-center border-b border-gray-300 bg-gradient-to-t from-white via-white pt-8 lg:static lg:h-auto lg:w-auto lg:rounded-xl lg:border lg:bg-none lg:p-4'>
        <Countdown></Countdown>
      </div>
    </div>
  )
}
