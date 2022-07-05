import React from 'react';

/**
 * COMPONENT
 */
export default function AuthForm({ isLoggedIn }){


  return (
    <div>
      {
        isLoggedIn ?
          <a href='/logout'>Logout</a> 
        :
          <a href='/login'>Login</a>
      }
    </div>
  )
}
