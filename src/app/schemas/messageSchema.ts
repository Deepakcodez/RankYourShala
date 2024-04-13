import {z} from 'zod'

export const verifySchema = z.object({
    content : z.string()
    .min(1,{message: "content must be atleast 1 character "})
    .max(100,{message: "content must be atmost 100 character "})
}) 