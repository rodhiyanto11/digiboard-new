import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './asset/main.css'
import axios from 'axios'

axios.defaults.baseURL = "http://127.0.0.1:5000"
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
