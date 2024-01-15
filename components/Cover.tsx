import { InputInviteCode } from './inputInviteCode'

export function Cover() {
  return (
    <section className='bg-white w-full h-full mx-2'>
      <div className='py-8 px-4 m-auto max-w-screen-xl text-center lg:py-16 z-10'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
          ¡Bienvenidos a la boda de Yesica y Alejandro!
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48'>
          Si no tienes código de invitación a la boda, te pedimos que te dirijas
          con los novios para solicitar uno de lo contrario introduce lo a
          continuación.
        </p>
        <InputInviteCode />
      </div>
    </section>
  )
}
