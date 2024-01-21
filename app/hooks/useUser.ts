import useSWR from 'swr'
import GETUserInfo from '../services/notionService'

export const useUser = (code: string) => {
  const { data, error, isLoading } = useSWR([`getNotionUSer`, code], () =>
    GETUserInfo(code)
  )
  return {
    user: data,
    isLoading,
    isError: error,
  }
}
