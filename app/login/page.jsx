"use client"
import { useActionState } from 'react'
import { login } from './actions'
export default function LoginForm() {
    const [state, action, pending] = useActionState(login)

  return (
    <form action={action}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p style={{color:"red"}}>{state.errors.email}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li style={{color:"red"}} key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <button type="submit">Sign Up</button>
    </form>
  )
}