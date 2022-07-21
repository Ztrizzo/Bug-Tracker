import React, { useEffect } from 'react';
import Home from './components/Home';
import AuthForm from './components/AuthForm';
import { Route, Routes } from 'react-router-dom';
import { me } from './store/auth';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import AllTickets from './components/AllTickets/';
import NewTicket from './components/NewTicket/';
import Ticket from './components/Ticket'
import MyTickets from './components/MyTickets'

const ClientRoutes = () => {
  const dispatch = useDispatch();
  

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
