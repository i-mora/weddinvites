import { useWeather } from '@/app/hooks/useWeather'
import { ActivityLocation } from '@/app/types'
import dayjs from 'dayjs'
import { SunIcon, SunCloudsIcon, CloudsIcon } from './SVGIcons'

interface WeatherProps {
  place: ActivityLocation
}

export default function Weather({ place }: WeatherProps) {
  const { weatherData } = useWeather(place.id)
  return (
    <div className='flex flex-col gap-1 items-center justify-center w-96 h-56 p-6 bg-gradient-to-t from-yellow-100 via-yellow-100 to-yellow-500 rounded-3xl shadow-xl hover:scale-105 transition-all'>
      <header className='flex flex-col w-full mb-3'>
        <span className='text-black break-all font-bold text-lg'>
          {place.title}
        </span>
        <span className='text-black font-bold text-base'>
          {dayjs(place.date).format('DD-MM-YYYY')}
        </span>
      </header>
      <section className='flex w-1/3 h-1/3 gap-2 mb-2'>
        {weatherData && weatherData?.cloudCover < 50 ? (
          <SunIcon classStyles='w-full h-full' />
        ) : weatherData && weatherData?.cloudCover < 80 ? (
          <SunCloudsIcon classStyles='w-full h-full' />
        ) : (
          <CloudsIcon classStyles='w-full h-full' />
        )}
      </section>
      <section className='flex w-full justify-between text-base text-brown-600 font-bold'>
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
