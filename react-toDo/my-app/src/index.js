import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Routes} from './component/routes/index';

ReactDOM.render(
  <Routes><App /></Routes>,
  document.getElementById('root')
);
