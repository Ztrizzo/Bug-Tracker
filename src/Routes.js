import React, { useEffect } from 'react';
import Home from './components/Home';
import AuthForm from './components/AuthForm';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import AllTickets from './components/AllTickets/';
import NewTicket from './components/NewTicket/';
import Ticket from './components/Ticket';
import MyTickets from './components/MyTickets';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const ClientRoutes = () => {
  const dispatch = useDispatch();
  const userId = useAuth0()?.user?.sub;
  
  
  const {isAuthenticated, user, isLoading, getAccessTokenSilently} = useAuth0()

  //calls /me endpoint to create user in database if doesn't exist.
  useEffect(() => {
    const getSecrets = async () => {
      const domain = 'localhost:8080/auth';
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `http://localhost:8080/api`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `http://${domain}/me?name=${user.name}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const message = await metadataResponse.json();
  
        console.log(message);
      } catch (e) {
        console.log(e.message);
      }

    }
    getSecrets();

  }, [userId, getAccessTokenSilently])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='auth' element={<AuthForm/>}/>
        <Route path='alltickets' element={<AllTickets/>}/>
        <Route path='CreateTicket' element={<NewTicket/>}/>
        <Route path='tickets'>
          <Route path=':ticketId' element={<Ticket/>}/>
        </Route>
        <Route path='MyTickets' element={<MyTickets/>}/>
        <Route path='*' element={<Home/>}></Route>
        
      </Routes>
    </>

  )
}


export default ClientRoutes
