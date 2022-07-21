import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";
import AuthForm from "./AuthForm";

export default function AuthFormContainer(){
  const {loginWithRedirect, logout, isAuthenticated} = useAuth0();
  
  return ( <AuthForm loginWithRedirect={loginWithRedirect} logout={logout} isLoggedIn={isAuthenticated}/>)
}