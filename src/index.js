import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/fonts.scss';
import './scss/nav.scss';
import './scss/custom.scss';
import './scss/grid.scss';

//COMPONENTS
import Header from "./components/header";
import Links from "./components/links";
import Navbar from "./components/navbar";
import Work from "./components/work"
import Grid from "./components/grid"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Navbar /> */}
    <Header />
    {/* <Links /> */}
    {/* <Work /> */}
    <Grid />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
