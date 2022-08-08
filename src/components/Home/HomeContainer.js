import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Home from "./Home";
import axios from "axios";

export default function HomeContainer(){
  const {isAuthenticated, user, isLoading} = useAuth0()
  const [allTickets, setAllTickets] = useState();

  //TESTING
  // const {getAccessTokenSilently} = useAuth0();
  // useEffect(() => {
  //   const getSecrets = async () => {
  //     const domain = 'localhost:8080/api';
  //     try {
  //       const accessToken = await getAccessTokenSilently({
  //         audience: `http://localhost:8080/api`,
  //         scope: "read:current_user",
  //       });
  
  //       const userDetailsByIdUrl = `http://${domain}/users/protected`;
  
  //       const metadataResponse = await fetch(userDetailsByIdUrl, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
   
  //       const message = await metadataResponse.json();
  
  //       console.log();
  //     } catch (e) {
  //       console.log(e.message);
  //     }

  //   }
  //   getSecrets();

  // }, [])
  useEffect(() => {
    axios.get('/api/tickets')
    .then(
      (res) => setAllTickets(res.data)
    )
  }, [])


  //END TESTING
  if(isLoading || !allTickets) return null;
  return(<Home isLoggedIn={isAuthenticated} name={user?.name} allTickets={allTickets}/>)
}