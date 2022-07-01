import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
/**
 * COMPONENT
 */
export default function Home(){
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const getSecrets = () => {
    try{
      const accessToken = await getAccessTokenSilently({

      })
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Create React Full Stack App</h1>
      {isAuthenticated ? <h3>{`Welcome, ${user.given_name || user.nickname}`}</h3> : null}
      <button onClick={getSecrets}>GET SECRETS</button>
    </div>
  )
}



