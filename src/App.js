import React from 'react';
import Routes from './Routes';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  console.log(`http://${window.location.host}/api/`)
  return (
    <Auth0Provider
      domain='dev-hl39tc9t.us.auth0.com'
      clientId='4NmvGptwu7C6ahkQtIm9rcxTKkF1VqX4'
      redirectUri={`http://${window.location.host}/auth0callback`}
      audience={`http://${window.location.host}/api`}
      scope='read:current_user update:current_user_metadata'
    >
      <Routes/>
    </Auth0Provider>
  );
}

export default App;