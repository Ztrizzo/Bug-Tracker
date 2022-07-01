import React from 'react';
import Routes from './Routes';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain='dev-hl39tc9t.us.auth0.com'
      clientId='4NmvGptwu7C6ahkQtIm9rcxTKkF1VqX4'
      redirectUri={`http://${window.location.host}/auth0callback`}
    >
      <Routes/>
    </Auth0Provider>
  );
}

export default App;
