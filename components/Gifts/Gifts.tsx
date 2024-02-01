'use client'
import { CreditCard } from './CreditCard'
import { Envelope } from './Envelope'
import { Typography } from '@material-tailwind/react'

export function Gifts() {
  return (
    <div className='grid grid-cols-5 gap-3 justify-center items-center max-w-fit'>
      <Typography variant='h4' color='blue-gray' className='mb-2 col-span-5'>
        Regalos
      </Typography>
      <Typography variant='h6' color='blue-gray' className='mb-2 col-span-5'>
        Su presencia y compañía siempre será nuestro mejor regalo. Sin embargo,
        si desean obsequiarnos algo más, pueden hacerlo a través de:
      </Typography>
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
