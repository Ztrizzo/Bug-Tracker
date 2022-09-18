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
import CompletedTickets from './components/CompletedTickets';
import CssBaseline from '@mui/material/CssBaseline';

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
  
        const userDetailsByIdUrl = `http://${domain}/me?name=${user?.name}`;
  
        await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
      } catch (e) {
        console.log(e);
      }

    }
    if(!isLoading){
      getSecrets();
    }


  }, [userId, getAccessTokenSilently, user?.name])

  return (
    <>
      <CssBaseline>
        <Navbar/>
        <div style={{paddingTop: '75px', paddingLeft: '75px'}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='auth' element={<AuthForm/>}/>
            <Route path='alltickets' element={<AllTickets/>}/>
            <Route path='CreateTicket' element={<NewTicket/>}/>
            <Route path='CompletedTickets' element={<CompletedTickets/>}/>
            <Route path='tickets'>
              <Route path=':ticketId' element={<Ticket/>}/>
            </Route>
            <Route path='MyTickets' element={<MyTickets/>}/>
            <Route path='*' element={<Home/>}></Route>
            
          </Routes>
        </div>
      </CssBaseline>

    </>

  )
}


export default ClientRoutes
