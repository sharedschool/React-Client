import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Amplify from "aws-amplify";
import App from './App';
import * as serviceWorker from './serviceWorker';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "us-east-1",
    // userPoolId: "us-east-1_bJ7Vonm9a",
    // identityPoolId: "us-east-1:d8f17b0a-bb77-41fa-b9dd-83aecca08c2f",
    // userPoolWebClientId: "206057s1868e1vknfl0nfq26e6"
    userPoolId: "us-east-1_uiQIXwYkH", // Prateek's sample notes app
    identityPoolId: "us-east-1:d76c539f-0d5d-4a10-a1ab-931ecbb9c679",
    userPoolWebClientId: "78jvrbj1m60gr91vi2qj1a4no6"
  }
});

ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
