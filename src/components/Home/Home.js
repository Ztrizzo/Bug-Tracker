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
      <div style={{display: 'flex', flexWrap:'wrap', flexDirection:'row'}}>
          <DoughnutGraph style={{flexBasis:'50%', flexGrow:1}} allTickets={allTickets}/>
          <DeveloperGraph style={{flexBasis:'50%', flexGrow:1}} allTickets={allTickets}/>
          <AgeGraph style={{flexBasis:'50%', flexGrow:1}} allTickets={allTickets}/>
          <NumTickets style={{flexBasis:'50%', flexGrow:1}} allTickets={allTickets}/>
      </div>


    </div>
  )
}



