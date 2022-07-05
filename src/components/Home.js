import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
/**
 * COMPONENT
 */
export default function Home(){
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const getSecrets = async () => {
    try{
      const accessToken = await getAccessTokenSilently({
        audience: 'http://localhost:8080/api',
        scope: 'read:current_user'
      })
      
      const result = (await axios.get('/api/users', {
        headers:{
          Authorization: `Bearer ${accessToken}`
        }
      })).data;
      console.log(result);
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



