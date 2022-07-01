import React from 'react';
import Home from './components/Home';
import AuthForm from './components/AuthForm';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const ClientRoutes = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<AuthForm/>}/>
        <Route path='signup' element={<AuthForm/>}/>
        <Route path='*' element={<Home/>}></Route>
      </Routes>
    </>

  )
}


export default ClientRoutes
