import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Service Worker.
import swDev from "./swDev";
// Mock Server.
import mock_shopping_basket_server from "./mirage-server/server";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
reportWebVitals();
//
// Register Service Worker.
swDev();
// Mock Mirage Server
mock_shopping_basket_server()
