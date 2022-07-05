import React from "react";
import { useSelector } from "react-redux";
import AuthForm from "./AuthForm";

export default function AuthFormContainer(){
  const isLoggedIn = useSelector(state => !!state.auth.sub);
  return ( <AuthForm isLoggedIn={isLoggedIn}/>)
}