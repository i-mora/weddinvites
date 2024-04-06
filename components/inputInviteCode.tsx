'use client'

import HashIcon from '@/public/icons/hash.svg'

import { getUser } from '@/app/lib/actions'
import Image from 'next/image'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
  message: '',
}

export function InputInviteCode() {
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(getUser, initialState)

  return (
    <form action={formAction} className='mx-auto w-full max-w-md'>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 rtl:inset-x-0'>
          <Image src={HashIcon} alt='hash icon' height={30} width={30} />
        </div>
        <input
          type='text'
          name='invite-code'
          id='invite-code'
          disabled={pending}
          autoComplete='off'
          className='block w-full rounded-lg border border-gray-300 bg-white p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='Escriba aquí su código de invitación...'
          required
        />
        <button
          type='submit'
          className='absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          disabled={pending}
        >
          Validar
        </button>
      </div>
      {state && state.message !== '' && (
        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
          <span className='font-medium'>Oops!</span> {state.message}
        </p>
      )}
    </form>
  )
}
