import BBVAIcon from '@/public/icons/bbva.svg'
import MastercardIcon from '@/public/icons/mastercard.svg'

import Image from 'next/image'

const iconsCard = {
  bbva: <Image src={BBVAIcon} alt='bbva icon' height={40} width={40} />,
  masterCard: (
    <Image src={MastercardIcon} alt='mastercard icon' height={30} width={30} />
  ),
}

interface CreditCardProps {
  name: string
  cardNumber: string
  type: keyof typeof iconsCard
}
export function CreditCard({ name, cardNumber, type }: CreditCardProps) {
  return (
    <div className='mx-auto flex max-w-xs flex-col justify-around rounded-lg border border-white border-opacity-30 bg-gray-800 p-4 shadow-md'>
      <div className='mb-3 flex flex-row items-center justify-between'>
        <input
          disabled
          className='mb-3 h-10 w-full flex-grow border-none bg-gray-800 pl-2 text-sm font-semibold text-white caret-orange-500 outline-none'
          type='text'
          name='cardName'
          id='cardName'
          placeholder='Full Name'
          value={name}
        />
        <div className='relative flex h-9 w-14 items-center justify-center rounded-md border border-white border-opacity-20 bg-gray-800'>
          {iconsCard[type]}
        </div>
      </div>
      <div className='flex flex-col space-y-3'>
        <input
          disabled
          className='h-10 w-full border-none bg-gray-800 pl-2 text-sm font-semibold text-white caret-orange-500 outline-none'
          type='text'
          name='cardNumber'
          id='cardNumber'
          placeholder='0000 0000 0000 0000'
          value={cardNumber}
        />
        <div className='flex flex-row justify-between'>
          <input
            disabled
            className='h-10 w-full border-none bg-gray-800 pl-2 text-sm font-semibold text-white caret-orange-500 outline-none'
            type='text'
            name='expiryDate'
            id='expiryDate'
            placeholder='MM/AA'
          />
          <input
            disabled
            className='h-10 w-full border-none bg-gray-800 pl-2 text-sm font-semibold text-white caret-orange-500 outline-none'
            type='text'
            name='cvv'
            id='cvv'
            placeholder='CVV'
          />
        </div>
      </div>
    </div>
  )
}
