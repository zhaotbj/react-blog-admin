import React, { Component } from 'react';

import './index.less'

import NumberCard from './components/numberCard';

import LineChart from '../../components/Echarts/LineChart'

import CommentList from  './components/CommentList'

import OrderTable from './components/table'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberCards: [
        {
          "icon": "pay-circle-o",
          "color": "#79cff2",
          "title": "Gary Lee",
          "number": 2328,
          type:"question-circle-o"
        },
        {
          "icon": "team",
          "color": "#f2f279",
          "title": "Amy Martinez",
          "number": 3140,
          type:"question-circle-o"
        },
        {
          "icon": "message",
          "color": "#ce79f2",
          "title": "Nancy Taylor",
          "number": 9263,
          type:"question-circle-o"
        },
        {
          "icon": "shopping-cart",
          "color": "#79f2ab",
          "title": "Donald Miller",
          "number": 5118,
          type:"question-circle-o"
        }
      ],
      CommentList: [
        {
          "actions": "无称",
          "author": "秦娜",
          "content": "龙变观边别约半向队先门型图特。府局济低东面问族小片合长它便。山土容王去影证价知题化社车。",
          "datetime": "1990-12-16 13:06:05"
        },
        {
          "actions": "易得",
          "author": "邓桂英",
          "content": "活之层知放部走难计圆空是她龙。众门布队除候它可本很利区维毛已火。上积经向离志百界名眼准级。",
          "datetime": "2011-05-27 02:04:59"
        },
        {
          "actions": "列反",
          "author": "程平",
          "content": "治消示成清需术到织军节象划效。给商法品社事只且手了由世布。完但水加包只加动须位适级般列列六共。京矿长上下权他准化难族年种体儿果包工。",
          "datetime": "1983-08-19 08:32:15"
        },
        {
          "actions": "候别",
          "author": "潘磊",
          "content": "机即理每条管法九准向志该素难。五种育快程圆程确此直史象今运状。地分几速打作所引号间民权细西整见。",
          "datetime": "2017-06-13 12:08:25"
        }
      ]
    };

  }


  render() {
    return (

      <div className="home">
        <NumberCard numberObj={this.state.numberCards} />
       
        <LineChart />
        <div className="comment">
        <CommentList />
        <OrderTable />
        </div>

      </div>
    );
  }
}

export default Home;
