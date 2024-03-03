'use client'

import { ItineraryItem } from './Itinerary-Item'
import { Icon } from '../Icon'
import { ItineraryType, Itinerary } from '@/app/types'

interface ItineraryProps {
  type: ItineraryType
}

const itineraries: Itinerary[] = [
  {
    type: 'guest',
    activities: [
      {
        activity: 'Asistir a la misa',
        activityTime: new Date(),
        activityIcon: 'church',
      },
      {
        activity: 'Asistir a la comida',
        activityTime: new Date(),
        activityIcon: 'turkey-dinner',
      },
      {
        activity: 'Asistir a la fiesta',
        activityTime: new Date(),
        activityIcon: 'disco-ball',
      },
    ],
  },
  {
    type: 'photograph',
    activities: [
      {
        activity: 'Session de fotos',
        activityTime: new Date(),
        activityIcon: 'camera',
      },
      {
        activity: 'Misa',
        activityTime: new Date(),
        activityIcon: 'turkey-dinner',
      },
      {
        activity: 'Session de fotos familiar',
        activityTime: new Date(),
        activityIcon: 'disco-ball',
      },
    ],
  },
]
export function Itinerary({ type }: ItineraryProps) {
  const itinerary = itineraries.find((itinerary) => itinerary.type === type)

  return (
    <div className='w-[calc(100%_-_3rem)]'>
      <ul className='flex flex-col w-full'>
      {itinerary ? (
          itinerary.activities.map((act) => {
            const { activity, activityIcon, activityTime } = act
            return (
              <ItineraryItem
                key={activity}
                activity={activity}
                activityTime={activityTime.toString()}
                activityIcon={<Icon name={activityIcon} />}
              />
            )
          })
        ) : (
          <p>Sin Actividades</p>
        )}
      </ul>
    </div>
  )
}
