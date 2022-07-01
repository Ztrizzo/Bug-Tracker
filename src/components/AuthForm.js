import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

/**
 * COMPONENT
 */
export default function AuthForm(){
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {
        isAuthenticated ? 
          <button onClick={() => logout()}>LOGOUT</button>
          :
          <button onClick={() => loginWithRedirect()}>LOGIN</button>
      }
      
    </div>
  )
}
