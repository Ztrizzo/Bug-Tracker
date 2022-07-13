import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

export default function NavbarContainer(){
  const isLoggedIn = useSelector(state => !!state.auth.email);
  const role = useSelector(state => state.auth.role);
  return(
    <Navbar isLoggedIn={isLoggedIn} role={role}/>
  )
}