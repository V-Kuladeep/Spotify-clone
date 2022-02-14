import React from 'react';
import ReactDOM from 'react-dom';
import AudioContextProvider from './Apis/AudioContext';
import Authprovider from './Apis/Authcontext';
import App from './App';
import "./Spotify.css"
ReactDOM.render(
  <AudioContextProvider>
    <Authprovider>
      <App />
    </Authprovider>
  </AudioContextProvider>,
  document.getElementById("root")
);