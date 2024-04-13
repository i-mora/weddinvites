import { ItineraryItem } from './Itinerary-Item'
import { ItineraryType } from '@/app/types'
import { Itineraries } from '@/app/lib/consts'
import { ItineraryItemRight } from './itinerary-item-right'
import { ItineraryItemLeft } from './itinerary-item-left'

interface ItineraryProps {
  type: ItineraryType
}

export function Itinerary({ type }: ItineraryProps) {
  const itinerary = Itineraries.find((itinerary) => itinerary.type === type)

  return (
    <div className=' mx-auto h-full w-full'>
      <div className='wrap relative h-full overflow-hidden p-10 pb-20'>
        <div
          className='border-2-2 absolute h-full border border-gray-700 border-opacity-20'
          style={{ left: '50%' }}
        ></div>
        {itinerary ? (
          itinerary.activities.map((activity, index) => {
            return (
              <ItineraryItem
                key={activity.id}
                position={
                  index % 2 === 0
                    ? 'right-timeline  items-center'
                    : 'left-timeline flex-row-reverse items-center'
                }
                activity={activity}
              />
            )
          })
        ) : (
          <p>Sin Actividades</p>
        )}
      </div>
    </div>
  )
}
{
  /* <div className='w-[calc(100%_-_3rem)]'>
<ul className='flex w-full flex-col'>
  {itinerary ? (
    itinerary.activities.map((activity) => {
      return <ItineraryItem key={activity.id} activity={activity} />
    })
  ) : (
    <p>Sin Actividades</p>
  )}
</ul>
</div> */
}
