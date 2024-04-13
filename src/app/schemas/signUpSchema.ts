import  {z} from 'zod'

export const userNameValidation = z.
string()
.min(2,"username must be atleast 2 character")
.max(20,"username must be in 20 characters")
.regex(/^[a-zA-Z0-9_]*$/,"username must not contain special charcter")


export const signUpSchema = z.object({
    userName : userNameValidation,

    email : z.string().email({message : "Invalid Email address"}),

    password : z.string().min(6,{message : "Password must be atleast 6 character"})
    

})