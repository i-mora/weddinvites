'use server'

import { redirect } from 'next/navigation'
import { GETUserInfo, MainGuestFilter } from '../services/notionService'
import { CreateInvCodeSchema } from './consts'

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
  const [user] = await GETUserInfo(Code, MainGuestFilter)
  if (user && user.id) redirect(`/${Code}`)
  return { message: 'Código de la invitación incorrecto!' }
}
