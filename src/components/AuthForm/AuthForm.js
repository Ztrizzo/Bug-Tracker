import React from 'react';

/**
 * COMPONENT
 */
export default function AuthForm({ loginWithRedirect, logout, isLoggedIn }){


  return (
    <div>
      {
        isLoggedIn ?
          <button onClick={logout}>Log Out</button>
        :
          <button onClick={loginWithRedirect}>Log In</button>
      }

    </div>
  )
}
