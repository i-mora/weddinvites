export type ItineraryType =
  | 'guest'
  | 'VIP'
  | 'photograph'
  | 'none'
  | 'Padrino'
  | 'Novia'
  | 'Novio'
  | 'VIP'
  | 'Acompañante'

export interface ItineraryActivity {
  activity: string
  activityTime: Date
  activityIcon: string
  activityLocation: ActivityLocation
  codesConduct?: Restriction[]
}
export interface Itinerary {
  type: ItineraryType
  activities: ItineraryActivity[]
}

export interface Restriction {
  icon: JSX.Element
  name: string
}

export interface ActivityLocation extends Place {
  latitude: number
  longitude: number
  date: Date
}

export interface Place {
  id: string
  imageURL: string
  title: string
  address: string
  googleMapsURL: string
  uberURL: string
  appleMapsURL: string
  wazeURL: string
}

export interface WeatherData {
  temperature: number
  precipitation: number
  cloudCover: number
  windSpeed: number
}
