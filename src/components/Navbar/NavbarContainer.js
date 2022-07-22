import { useAuth0 } from "@auth0/auth0-react";
import React, {useState} from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

export default function NavbarContainer(){
  const {isAuthenticated, user, isLoading} = useAuth0();
  let role;

  if(!isLoading){
    role = user ? user[`http://localhost:8080/roles`][0] : undefined;
  }

  return(
    <Navbar isLoggedIn={isAuthenticated} role={role}/>
  )
}