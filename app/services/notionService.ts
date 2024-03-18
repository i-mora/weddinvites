import {
  Client,
  LogLevel,
  isFullPage
} from '@notionhq/client'
import {
  type QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  auth: process.env.INTEGRATION_SECRET || '',
  logLevel: LogLevel.DEBUG,
})

export default async function GETUserInfo(code: string) {
  const res: QueryDatabaseResponse = await notion.databases.query({
    database_id: process.env.DATABASE_ID || '',
    filter: {
      property: 'Code',
      rich_text: {
        equals: code,
      },
    },
  })
  for (const page of res.results) {
    if (!isFullPage(page)) {
      continue
    }
    return page
  }
}
