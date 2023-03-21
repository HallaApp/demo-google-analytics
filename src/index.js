import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TagManager from "react-gtm-module";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tagManagerArgs = {
  gtmId: "YOUR MEASUREMENT_ID GOES HERE",
};

TagManager.initialize(tagManagerArgs);

window.dataLayer.push({
  event: "pageview",
  page: {
    test: "hey",
    title: "Halla Shopping Cart",
  },
});

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 1000);
localStorage.setItem("user_id", rndInt);

window.dataLayer.push({
  event: "login",
  user_id: localStorage.getItem("user_id"),
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Index.js ==> App ==>
