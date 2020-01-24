import React, { Component } from 'react';
import { Route } from "react-router-dom";
// import BasicTable from './Tables/BasicTable'
import List from './list/list'
// import AddArtic from './list/addArtic'

class Tables extends Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path="/articles" component={List} />

          {/* <Route exact path="/articles/add" component={ AddArtic } /> */}
          {/* <Route exact path="/articles/edit" component={ } /> */}
        </div>

      </div>
    );
  }
}

export default Tables;