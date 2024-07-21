import { z } from "zod";

export const signInInputs = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one upper case alphabet",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[! @ # $ % ^ & * ( ) - _ + = { }  | \ ; : " ' , . / ? < > ~ ]/, {
      message: "Password must contain at least one special character",
    }),
});

export type signInInputsTypes = z.infer<typeof signInInputs>;

export const signUpInput = z.object({
  name: z.string(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one upper case alphabet",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[! @ # $ % ^ & * ( ) - _ + = { }  | \ ; : " ' , . / ? < > ~ ]/, {
      message: "Password must contain at least one special character",
    }),
});

export type signUpInputTypes = z.infer<typeof signUpInput>;

export const postBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
});

export type postBlogInputTypes = z.infer<typeof postBlogInput>;

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
});

export type updateBlogInputTypes = z.infer<typeof updateBlogInput>;
