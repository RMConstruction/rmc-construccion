import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "The name must have at least 2 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().min(7, { message: "Invalid phone number" }),
  service: z.string().optional(),
  message: z.string().min(10, { message: "The message must have at least 10 characters" })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;