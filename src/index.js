import React from "react";
import ReactDOM from "react-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      scope={process.env.REACT_APP_AUTH0_SCOPE}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
