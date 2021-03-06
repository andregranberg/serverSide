import React from 'react';
import ReactDOM from 'react-dom';
import NavbaraElement from './Navbar.js'
import AlphaVantage from './data';

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-KRHTVNF'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <NavbaraElement />
    <AlphaVantage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
