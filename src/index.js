import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, render } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

