import 'server-only'
 
import { cookies } from 'next/headers'
import { decrypt } from './session'
import { redirect } from 'next/navigation'
import { experimental_taintUniqueValue } from 'react'
 
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)
    
  if (!session?.userId) {
    redirect('/login?error=Please log in to access this page')
  }
 
  return { isAuth: true, userId: session.userId }
})