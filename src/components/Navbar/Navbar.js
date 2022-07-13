import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({isLoggedIn, role}) => {
  
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/auth'>{isLoggedIn ? "Sign Out" : "Sign in"}</Link>
      <Link to='/allTickets'>All Tickets</Link>
      <Link to='/CreateTicket'>Create New Ticket</Link>
      {
        role === 'developer' || role === 'manager' ?
          <Link to='/MyTickets'>My Tickets</Link>
          :
          null
      }

    </nav>
  )
}

export default Navbar;