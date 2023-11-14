import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

Amplify.configure({
  Auth: {
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID,
    mandatorySignIn: true,
    oauth: {
      domain: process.env.REACT_APP_COGNITO_DOMAIN_ONLY,
      scope: ["email", "openid", "profile"],
      redirectSignIn: process.env.REACT_APP_REDIRECT_URI,
      redirectSignOut: process.env.REACT_APP_REDIRECT_URI,
      responseType: "code",
    },
  },
  Storage: {
    AWSS3: {
      identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
      bucket: process.env.REACT_APP_S3_BUCKET_NAME, // Set your S3 bucket name here
      region: process.env.REACT_APP_REGION, // Set the AWS region for the S3 bucket
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
