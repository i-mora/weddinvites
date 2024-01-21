import { z } from 'zod'

export const CreateInvCodeSchema = z.object({
  Code: z.string().min(3).max(4),
})
