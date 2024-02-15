'use client'

import { Timeline, Typography } from '@material-tailwind/react'
import { ItineraryItem } from './Itinerary-Item'
import { Icon } from '../Icon'
import { ItineraryType } from '@/app/types'
import { Itineraries } from '@/app/lib/consts'

interface ItineraryProps {
  type: ItineraryType
}

export function Itinerary({ type }: ItineraryProps) {
  const itinerary = Itineraries.find((itinerary) => itinerary.type === type)

  return (
    <div className='max-w-full w-full max-h-full px-2'>
      <Timeline>
        {itinerary ? (
          itinerary.activities.map((act) => {
            const {
              activity,
              activityIcon,
              activityTime,
              activityLocation,
              codesConduct,
            } = act
            return (
              <ItineraryItem
                key={activity}
                activity={activity}
                activityTime={activityTime.toString()}
                activityIcon={<Icon name={activityIcon} />}
                activityLocation={activityLocation}
                codesConduct={codesConduct}
              />
            )
          })
        ) : (
          <Typography>Sin Actividades</Typography>
        )}
      </Timeline>
    </div>
  )
}
