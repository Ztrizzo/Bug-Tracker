import React from 'react';
import Routes from './Routes';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  console.log(`http://${window.location.host}/api/`)
  return (
    <Auth0Provider
      domain="dev-hl39tc9t.us.auth0.com"
      clientId="jI5BNVp39dli2YXURbTERc9J85XQikD0"
      redirectUri={window.location.origin}
      audience='http://localhost:8080/api'
      scope='read:current_user update:current_user_metadata'
    >
      <Routes/>
    </Auth0Provider>
  );
}

export default App;