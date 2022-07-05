import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
/**
 * COMPONENT
 */
export default function Home({ isLoggedIn, name }){



  return (
    <div>
      <h1>Create React Full Stack App</h1>
      {isLoggedIn ? <h3>{`Welcome, ${name}`}</h3> : null}
    </div>
  )
}



