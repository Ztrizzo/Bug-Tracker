import React, { useEffect } from 'react';
import Home from './components/Home';
import AuthForm from './components/AuthForm';
import { Route, Routes } from 'react-router-dom';
import { me } from './store/auth';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';

const ClientRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, [])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='auth' element={<AuthForm/>}/>
        <Route path='*' element={<Home/>}></Route>
      </Routes>
    </>

  )
}


export default ClientRoutes
