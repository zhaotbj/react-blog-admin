import React, { Component } from 'react';
import { Route } from "react-router-dom";
import BasicTable from './Tables/BasicTable'
import EditTable from './Tables/EditTable'

class Tables extends Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path="/table/" component={BasicTable} />

          <Route exact path="/table/editTable/" component={EditTable} />
        </div>

      </div>
    );
  }
}

export default Tables;