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
  id: string
  name: string
  time: Date
  icon: string
  location: ActivityLocation
  codesConduct?: Restriction[]
}
export interface Itinerary {
  type: ItineraryType
  activities: ItineraryActivity[]
}

export interface Restriction {
  icon: string
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
