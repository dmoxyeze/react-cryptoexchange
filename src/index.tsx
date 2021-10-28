import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './app';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
