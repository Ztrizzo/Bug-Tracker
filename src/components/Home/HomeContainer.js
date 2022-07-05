import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";

export default function HomeContainer(){
  const isLoggedIn = useSelector(state => !!state.auth.sub);
  const name = useSelector(state => state.auth.name);

  return(<Home isLoggedIn={isLoggedIn} name={name}/>)
}