import type { ActivityLocation } from '@/types/Itinerary'
import type { WeatherData } from '@/types/Weather'
import dayjs from 'dayjs'
import { fetchWeatherApi } from 'openmeteo'

const params = {
  latitude: 21.8823,
  longitude: -102.2826,
  current: [
    'temperature_2m',
    'relative_humidity_2m',
    'apparent_temperature',
    'precipitation',
    'rain',
    'cloud_cover',
    'wind_speed_10m',
    'wind_direction_10m',
  ],
  hourly: [
    'temperature_2m',
    'relative_humidity_2m',
    'apparent_temperature',
    'precipitation_probability',
    'precipitation',
    'cloud_cover',
    'cloud_cover_low',
    'cloud_cover_mid',
    'cloud_cover_high',
    'wind_speed_10m',
    'wind_speed_80m',
    'wind_speed_120m',
    'wind_speed_180m',
    'wind_direction_10m',
    'wind_direction_80m',
    'wind_direction_120m',
    'wind_direction_180m',
    'wind_gusts_10m',
    'temperature_80m',
    'temperature_120m',
    'temperature_180m',
  ],
  timezone: 'auto',
  start_date: '2024-02-12', //'2024-06-30'
  end_date: '2024-02-12', // '2024-06-30'
}
const url = 'https://api.open-meteo.com/v1/forecast'

export async function GETWeather(
  eventLocation: ActivityLocation
): Promise<WeatherData> {
  params.latitude = eventLocation.latitude
  params.longitude = eventLocation.longitude
  const diferenciaDias = dayjs(eventLocation.date).diff(dayjs(), 'day')
  if (diferenciaDias > 5) {
    params.start_date = dayjs().format('YYYY-MM-DD')
    params.end_date = dayjs().format('YYYY-MM-DD')
  } else {
    params.start_date = dayjs(eventLocation.date).format('YYYY-MM-DD')
    params.end_date = dayjs(eventLocation.date).format('YYYY-MM-DD')
  }
  const responses = await fetchWeatherApi(url, params)

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0]

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds()
  const timezone = response.timezone()
  const timezoneAbbreviation = response.timezoneAbbreviation()
  const latitude = response.latitude()
  const longitude = response.longitude()

  const current = response.current()!
  const hourly = response.hourly()!

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      apparentTemperature: current.variables(2)!.value(),
      precipitation: current.variables(3)!.value(),
      rain: current.variables(4)!.value(),
      cloudCover: current.variables(5)!.value(),
      windSpeed10m: current.variables(6)!.value(),
      windDirection10m: current.variables(7)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
      apparentTemperature: hourly.variables(2)!.valuesArray()!,
      precipitationProbability: hourly.variables(3)!.valuesArray()!,
      precipitation: hourly.variables(4)!.valuesArray()!,
      cloudCover: hourly.variables(5)!.valuesArray()!,
      cloudCoverLow: hourly.variables(6)!.valuesArray()!,
      cloudCoverMid: hourly.variables(7)!.valuesArray()!,
      cloudCoverHigh: hourly.variables(8)!.valuesArray()!,
      windSpeed10m: hourly.variables(9)!.valuesArray()!,
      windSpeed80m: hourly.variables(10)!.valuesArray()!,
      windSpeed120m: hourly.variables(11)!.valuesArray()!,
      windSpeed180m: hourly.variables(12)!.valuesArray()!,
      windDirection10m: hourly.variables(13)!.valuesArray()!,
      windDirection80m: hourly.variables(14)!.valuesArray()!,
      windDirection120m: hourly.variables(15)!.valuesArray()!,
      windDirection180m: hourly.variables(16)!.valuesArray()!,
      windGusts10m: hourly.variables(17)!.valuesArray()!,
      temperature80m: hourly.variables(18)!.valuesArray()!,
      temperature120m: hourly.variables(19)!.valuesArray()!,
      temperature180m: hourly.variables(20)!.valuesArray()!,
    },
  }
  return {
    temperature: Math.round(weatherData.current.temperature2m),
    cloudCover: weatherData.current.cloudCover,
    precipitation: weatherData.current.precipitation,
    windSpeed: Math.round(weatherData.current.windSpeed10m),
  }
}
