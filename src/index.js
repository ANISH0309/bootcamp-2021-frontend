import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6Ld9aoUbAAAAABWWhEzZp_-8FkCCc23QMLOW4EfO">
      <GoogleReCaptcha
        onVerify={(token) => {
          window.sessionStorage.setItem("token", token);
        }}
      />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
