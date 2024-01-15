'use server'
import { z } from 'zod'
import { Client, LogLevel } from '@notionhq/client'
import { type QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const CreateInvCodeSchema = z.object({
  Code: z.string().min(3).max(4),
})

//TODO: Create a Service
const INTEGRATION_SECRET = 'secret_W4UG7cmNojXJa6zMgLN34HaVmJGaimRxy2frviQws9r'
const DATABASE_ID = '2c0b5c598a934d5b8f5265cfa6b31790'

const notion = new Client({
  auth: INTEGRATION_SECRET,
  logLevel: LogLevel.DEBUG,
})

const GETUserInfo = async (code: string) => {
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

export async function getUser(
  prevState: { message: string },
  formData: FormData
) {
  const parse = CreateInvCodeSchema.safeParse({
    Code: formData.get('invite-code'),
  })
  if (!parse.success) {
    return { message: 'Formato de código invalido' }
  }
  const { Code } = parse.data
  const user = await GETUserInfo(Code)
  if (user && user[0]) redirect(`/?invCode=${Code}`)
  return { message: 'Código de la invitación incorrecto!' }
}
