import useSWR from 'swr'
import { GETWeather } from '../services/weatherService'
import { WeddingPlaces } from '../lib/consts'

export const useWeather = (placeId: string) => {
  const { data, error, isLoading } = useSWR([`getWeather${placeId}`], () => {
    const placeLocation = WeddingPlaces.find((p) => p.id === placeId)
    if (placeLocation) return GETWeather(placeLocation)
  })
  return {
    weatherData: data,
    isLoading,
    isError: error,
  }
}
