import React, { useEffect, useState } from "react";
import MyTickets from "./MyTickets";
import { useAuth0 } from "@auth0/auth0-react";

export default function MyTicketsContainer(){
  const {isAuthenticated, user, isLoading, getAccessTokenSilently} = useAuth0();
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const getSecrets = async () => {
      const domain = 'localhost:8080/api';
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `http://localhost:8080/api`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `http://${domain}/myTickets`;
        const response = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setTickets(await response.json());
      } catch (e) {
        console.log(e);
      }

    }
    getSecrets();

  }, [])
  
  if(isLoading)
    return null;

  return(
    <MyTickets tickets={tickets} user={user}/>
  )
}