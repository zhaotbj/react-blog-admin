import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import './style/index.css'
import Page from './Page'
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>

  <Page />

</Provider>,
 document.getElementById('root'));

