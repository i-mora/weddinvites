import { BBVAIcon, MasterCArdIcon } from '../SVGIcons'

interface CreditCardProps {
  name: string
  cardNumber: string
  type: keyof typeof iconsCard
}
const iconsCard = {
  bbva: <BBVAIcon width='40' height='40' />,
  masterCard: <MasterCArdIcon width='30' height='30' />,
}
export function CreditCard({ name, cardNumber, type }: CreditCardProps) {
  return (
    <div className='flex flex-col justify-around bg-gray-800 p-4 border border-white border-opacity-30 rounded-lg shadow-md max-w-xs mx-auto'>
      <div className='flex flex-row items-center justify-between mb-3'>
        <input
          disabled
          className='w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2 mb-3 flex-grow'
          type='text'
          name='cardName'
          id='cardName'
          placeholder='Full Name'
          value={name}
        />
        <div className='flex items-center justify-center relative w-14 h-9 bg-gray-800 border border-white border-opacity-20 rounded-md'>
          {iconsCard[type]}
        </div>
      </div>
      <div className='flex flex-col space-y-3'>
        <input
          disabled
          className='w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2'
          type='text'
          name='cardNumber'
          id='cardNumber'
          placeholder='0000 0000 0000 0000'
          value={cardNumber}
        />
        <div className='flex flex-row justify-between'>
          <input
            disabled
            className='w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2'
            type='text'
            name='expiryDate'
            id='expiryDate'
            placeholder='MM/AA'
          />
          <input
            disabled
            className='w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2'
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
