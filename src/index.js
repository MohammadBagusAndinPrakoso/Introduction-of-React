import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Students from './pages/Student';
import Buku from './pages/Buku';
import reportWebVitals from './reportWebVitals';

// Load library bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

ReactDOM.render(
    <Buku />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
