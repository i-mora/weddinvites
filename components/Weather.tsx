import CloudsIcon from '@/public/icons/clouds.svg'
import SunIcon from '@/public/icons/sun.svg'
import SunCloudsIcon from '@/public/icons/sun_clouds.svg'

import { useWeather } from '@/app/hooks/useWeather'
import type { ActivityLocation } from '@/types/Itinerary'
import dayjs from 'dayjs'
import Image from 'next/image'

interface WeatherProps {
  place: ActivityLocation
}

export default function Weather({ place }: WeatherProps) {
  const { weatherData } = useWeather(place.id)
  return (
    <div className='flex h-56 w-96 flex-col items-center justify-center gap-1 rounded-3xl bg-gradient-to-t from-yellow-100 via-yellow-100 to-yellow-500 p-6 shadow-xl transition-all hover:scale-105'>
      <header className='mb-3 flex w-full flex-col'>
        <span className='break-all text-lg font-bold text-black'>
          {place.title}
        </span>
        <span className='text-base font-bold text-black'>
          {dayjs(place.date).format('DD-MM-YYYY')}
        </span>
      </header>
      <section className='mb-2 flex size-1/3 gap-2'>
        {weatherData && weatherData.cloudCover < 50 ? (
          <Image src={SunIcon} alt='sun' className='size-full' />
        ) : weatherData && weatherData.cloudCover < 80 ? (
          <Image src={SunCloudsIcon} alt='sun clouds' className='size-full' />
        ) : (
          <Image src={CloudsIcon} alt='clouds' className='size-full' />
        )}
      </section>
      <section className='flex w-full justify-between text-base font-bold text-brown-600'>
        <span>
          {weatherData?.temperature}°<span className='ml-1'>Celsius</span>
        </span>
        <span>
          {weatherData?.windSpeed}
          <span className='ml-1'>Km/h</span>
        </span>
      </section>
    </div>
  )
}
