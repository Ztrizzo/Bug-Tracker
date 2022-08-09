import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import DoughnutGraph from './PriorityGraph';
import DeveloperGraph from './DeveloperGraph';
import AgeGraph from './AgeGraph';
import NumTickets from './NumTickets';
/**
 * COMPONENT
 */
export default function Home({ isLoggedIn, name, allTickets }){

  return (
    <div>
      {isLoggedIn ? <h3>{`Welcome, ${name}`}</h3> : null}
      <div style={{display: 'flex', flexDirection:'column'}}>
        <div style={{display: 'flex', width: '100%', justifyContent:'space-around'}}>
          <DoughnutGraph allTickets={allTickets}/>
          <DeveloperGraph  allTickets={allTickets}/>
        </div>
        <div style={{display: 'flex', width: '100%', justifyContent:'space-around'}}>
          <AgeGraph allTickets={allTickets}/>
          <NumTickets allTickets={allTickets}/>
        </div>

      </div>


    </div>
  )
}



