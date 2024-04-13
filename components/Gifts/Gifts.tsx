'use client'

import { CreditCard } from './CreditCard'
import { Envelope } from './Envelope'

export function Gifts() {
  return (
    <div className='grid w-full grid-cols-5 items-center justify-center gap-3'>
      <h4 className='col-span-5 mb-2 block text-center font-sans text-2xl font-semibold leading-snug tracking-normal text-inherit antialiased'>
        Regalos
      </h4>
      <h6 className='col-span-5 mb-2 block text-center font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased'>
        Su presencia y compañía siempre será nuestro mejor regalo. Sin embargo,
        si desean obsequiarnos algo más, pueden hacerlo a través de:
      </h6>
      <div className='col-span-5 md:col-span-2'>
        <Envelope />
      </div>
      <div className='col-span-5 md:col-span-3'>
        <CreditCard
          name='Yesica Yajaira Serna Vidales'
          cardNumber='1234-456-789-1111'
          type='bbva'
        />
      </div>
    </div>
  )
}
