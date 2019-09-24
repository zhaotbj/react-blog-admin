import React from 'react'
import { HashRouter , Route} from 'react-router-dom' // BrowserRouter
import App from './App'


export default () => (
  <HashRouter>
  <Route path='/' component={App} />
  </HashRouter>
)