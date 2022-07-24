import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider} from "./contexts/videoContext.jsx"
import { AuthProvider } from "./contexts/authContext.jsx"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <VideoProvider>
        <App />
      </VideoProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
