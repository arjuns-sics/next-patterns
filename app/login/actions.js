"use server"
import * as z from 'zod'
 import { createSession } from './session'
import { redirect } from 'next/navigation';
import { experimental_taintObjectReference, experimental_taintUniqueValue } from 'react';

const LoginFormSchema = z.object({
  email: z.email({ error: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { error: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
    .regex(/[0-9]/, { error: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Contain at least one special character.',
    })
    .trim(),
})
 
/**
 * 
 * @param {*} formData 
 * @returns 
 */
export async function login(state,formData) {
    console.log(formData);
    
    const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  const { email, password } = validatedFields.data
  try{
    experimental_taintUniqueValue("val",validatedFields.data,email)
      if (email !== 'test@gmail.com' || password !== 'Test@1234') {
    return {
      errors: {
        email: email !== 'test@gmail.com' ? [email] : undefined,
        password: password !== 'Test@1234' ? ['Invalid email or password.'] : undefined,
      }
    }
  }
  }
    catch(e){
        console.log("Tainting failed",e)
    }


  await createSession("user123") // In a real app, use the actual user ID from your database
  redirect('/')
}

export async function logout() {
  await deleteSession()
  redirect('/login')
}