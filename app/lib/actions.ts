'use server'
import { redirect } from 'next/navigation'
import { CreateInvCodeSchema } from './consts'
import GETUserInfo from '../services/notionService'

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
  if (user && user[0]) redirect(`/${Code}`)
  return { message: 'Código de la invitación incorrecto!' }
}
