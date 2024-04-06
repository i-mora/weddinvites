import { Itineraries } from '@/app/lib/consts'
import { ItineraryType } from '@/types/Itinerary'
import { ItineraryItem } from './Itinerary-Item'

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
