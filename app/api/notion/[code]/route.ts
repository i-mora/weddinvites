import { Client, LogLevel } from '@notionhq/client'
import { type QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { type NextRequest } from 'next/server'

type Params = {
  code: string
}

const INTEGRATION_SECRET: string = process.env.INTEGRATION_SECRET || ''
const DATABASE_ID: string = process.env.DATABASE_ID || ''

const notion = new Client({
  auth: INTEGRATION_SECRET,
  logLevel: LogLevel.DEBUG,
})

const GETUserInfo = async (_: NextRequest, { params }: { params: Params }) => {
  const res: QueryDatabaseResponse = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'Code',
      rich_text: {
        equals: params.code, // query param
      },
    },
  })

  return Response.json(res.results)
}

export const GET = GETUserInfo
