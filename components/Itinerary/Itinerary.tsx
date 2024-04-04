import { ItineraryItem } from './Itinerary-Item'
import { ItineraryType } from '@/app/types'
import { Itineraries } from '@/app/lib/consts'

interface ItineraryProps {
  type: ItineraryType
}

export function Itinerary({ type }: ItineraryProps) {
  const itinerary = Itineraries.find((itinerary) => itinerary.type === type)

  return (
    <div className='w-[calc(100%_-_3rem)]'>
      <ul className='flex w-full flex-col'>
        {itinerary ? (
          itinerary.activities.map((activity) => {
            return <ItineraryItem key={activity.id} activity={activity} />
          })
        ) : (
          <p>Sin Actividades</p>
        )}
      </ul>
    </div>
  )
}
