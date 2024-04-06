import useSWR from 'swr'
import { GETUserInfo, MainGuestFilter } from '../services/notionService'

export const useUser = (code: string) => {
  const { data, error, isLoading } = useSWR([`getNotionUSer`, code], () =>
    GETUserInfo(code, MainGuestFilter)
  )
  return {
    user: data,
    isLoading,
    isError: error,
  }
}
