import { Filter, Guest, RichTextFilter, SelectFilter } from '@/types/Notion'
import { Client, LogLevel } from '@notionhq/client'
import { type QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  auth: process.env.INTEGRATION_SECRET || '',
  logLevel: LogLevel.DEBUG,
})

const CodeFilter = (value: string): RichTextFilter => ({
  property: 'Code',
  rich_text: {
    equals: value,
  },
})
const TypeFilter = (value: string): SelectFilter => ({
  property: 'Type',
  select: {
    equals: value,
  },
})

type GuestFilter = (code: string) => Filter

export const AllGuestFilter: GuestFilter = (code: string) => CodeFilter(code)

export const NonMainGuestFilter: GuestFilter = (code: string) => ({
  and: [
    CodeFilter(code),
    {
      or: [TypeFilter('Acompañante'), TypeFilter('Infante')],
    },
  ],
})

export const MainGuestFilter: GuestFilter = (code: string) => ({
  and: [
    CodeFilter(code),
    {
      or: [
        TypeFilter('Novia'),
        TypeFilter('Novio'),
        TypeFilter('Madrina'),
        TypeFilter('Padrino'),
        TypeFilter('VIP'),
        TypeFilter('Invitado'),
      ],
    },
  ],
})

export async function GETUserInfo(
  code: string,
  filter: GuestFilter
): Promise<Guest[]> {
  const res: QueryDatabaseResponse = await notion.databases.query({
    database_id: process.env.DATABASE_ID || '',
    filter: filter(code),
  })
  return res.results as Guest[]
}
