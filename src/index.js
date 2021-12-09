import React from 'react';
import ReactDOM from 'react-dom';
import Authprovider from './Apis/Authcontext';
import App from './App';
import "./Spotify.css"
ReactDOM.render(
  <Authprovider>
    <App />
  </Authprovider>,
  document.getElementById("root")
);