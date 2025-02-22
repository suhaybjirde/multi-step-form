import { z } from "zod";

export const formSchema = z.object({
    name: z.string({ required_error: 'This Feild is Required'}).min(5, 'Must be at least 5 characters'),
    email: z.string().min(1, "This Field is Required").email(),
    phone: z.string({
        required_error: 'This Field is Required',
      })
        .min(10, 'Must be at least 10 digits')
        .max(15, 'Must be at most 15 digits')
        .regex(/^\+\d{10,15}$/, {
          message: "Must start with '+' followed by 10 to 15 digits.",
        }),
    plan: z.enum(['arcade', 'advanced', 'pro']),
    planTime: z.enum(['monthly', 'yearly']),
    onlineService: z.boolean(),
    largeStorage: z.boolean(),
    customizableProfile: z.boolean(),
})

export type FormFields = z.infer<typeof formSchema>;