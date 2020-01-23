import React, { Component } from 'react';
import { Route } from "react-router-dom";
import BasicTable from './Tables/BasicTable'
import EditTable from './Tables/EditTable'

class Tables extends Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path="/articles" component={BasicTable} />

          <Route exact path="/articles/edit" component={ } />
        </div>

      </div>
    );
  }
}

export default Tables;