import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Login from './forms/Login'
import AddForm from './forms/AddForm'
class Forms extends Component {
  render() {

    return (
      <div>
        <Route exact path="/forms/" component={Login} />
        <Route exact path="/forms/add/" component={AddForm} />
      </div>
    );
  }
}

export default Forms;
