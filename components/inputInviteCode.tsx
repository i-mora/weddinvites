'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { HashIcon } from './SVGIcons'
import { getUser } from '@/app/lib/actions'

const initialState = {
  message: '',
}

export function InputInviteCode() {
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(getUser, initialState)

  return (
    <form action={formAction} className='w-full max-w-md mx-auto'>
      <div className='relative'>
        <div className='absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none'>
          <HashIcon width='30px' height='30px' />
        </div>
        <input
          type='text'
          name='invite-code'
          id='invite-code'
          disabled={pending}
          autoComplete='off'
          className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Escriba aquí su código de invitación...'
          required
        />
        <button
          type='submit'
          className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
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
