import { StaticImageData } from "next/image"

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
  icon: StaticImageData
  location: ActivityLocation
  codesConduct?: Restriction[]
}
export interface Itinerary {
  type: ItineraryType
  activities: ItineraryActivity[]
}

export interface Restriction {
  icon: StaticImageData
  name: string
}

export interface ActivityLocation extends Place {
  latitude: number
  longitude: number
  date: Date
}

export interface Place {
  id: string
  title: string
  address: string
  assets: {
    image: string
  }
  links: {
    googleMaps: string
    uber: string
    appleMaps: string
    waze: string
  }
}
