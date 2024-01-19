import { Client, LogLevel } from '@notionhq/client'
import { type QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { DATABASE_ID, INTEGRATION_SECRET } from '../appSettings'

const notion = new Client({
  auth: INTEGRATION_SECRET,
  logLevel: LogLevel.DEBUG,
})

export default async function GETUserInfo(code: string) {
  const res: QueryDatabaseResponse = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'Code',
      rich_text: {
        equals: code,
      },
    },
  })
  return res.results
}
