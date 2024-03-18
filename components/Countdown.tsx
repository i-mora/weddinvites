'use client'

import { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'

const WEDDING_DATE = 'Sat Jun 29 2024 17:00:00 GMT-0600'

export default function Countdown() {
  // HACK: to avoid https://nextjs.org/docs/messages/react-hydration-error
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  let { days, hours, minutes, seconds } = useTimer({
    expiryTimestamp: new Date(WEDDING_DATE),
  })

  return (
    <>
      <div className='grid auto-cols-max grid-flow-col gap-5 text-center'>
        <div className='flex flex-col'>
          <span className='countdown font-mono text-4xl'>{isClient && days}</span>
          {days === 1 ? 'día' : 'días'}
        </div>
        <div className='flex flex-col'>
          <span className='countdown font-mono text-4xl'>{isClient && hours}</span>
          {hours === 1 ? 'hora' : 'horas'}
        </div>
        <div className='flex flex-col'>
          <span className='countdown font-mono text-4xl'>{isClient && minutes} </span>
          {minutes === 1 ? 'minuto' : 'minutos'}
        </div>
        <div className='flex flex-col'>
          <span className='countdown font-mono text-4xl'>{isClient && seconds}</span>
          {seconds === 1 ? 'segundo' : 'segundos'}
        </div>
      </div>
    </>
  )
}
