export type ItineraryType =
  | 'guest'
  | 'guest_date'
  | 'godfather'
  | 'godmother'
  | 'VIP'
  | 'wedding_planner'
  | 'host'
  | 'photograph'

export interface ItineraryActivity {
  activity: string
  activityTime: Date
  activityIcon: string
}
export interface Itinerary {
  type: ItineraryType
  activities: ItineraryActivity[]
}
