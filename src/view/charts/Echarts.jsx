import React, { Component } from 'react';

import axios from 'axios'
import {EASY_MOCK} from '../../axios/api.js'
class Echarts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };

  }
  

  render() {
    return (
      <div>我是图表组件</div>
    );
  }
}

export default Echarts;
