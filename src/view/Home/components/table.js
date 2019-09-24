import React, { Component } from 'react'
import { Table, Tag } from 'antd'
import {formatMoney} from '../../../utils/common'
class OrderTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderTable: [
        {
          "name": "顾明",
          "status": 3,
          "timer": "1974-06-20 10:58:02",
          "prize": 5774,
          "key": "yA$BkH@*4"
        },
        {
          "name": "史杰",
          "status": 2,
          "timer": "1982-12-17 23:25:48",
          "prize": 4380,
          "key": "mHEUI85!@"
        },
        {
          "name": "郑秀英",
          "status": 1,
          "timer": "2000-01-02 15:09:14",
          "prize": 7973,
          "key": "$1f^SAYB"
        },
        {
          "name": "武勇",
          "status": 2,
          "timer": "1995-05-31 05:44:57",
          "prize": 3646,
          "key": "X&00cEV"
        },
        {
          "name": "姚涛",
          "status": 1,
          "timer": "1999-11-19 03:24:58",
          "prize": 5672,
          "key": "4AAVLsBu@"
        },
        {
          "name": "萧明",
          "status": 3,
          "timer": "1996-06-01 10:03:25",
          "prize": 5714,
          "key": "UV!cw#DdU"
        },
        {
          "name": "阎涛",
          "status": 2,
          "timer": "1985-01-22 08:55:26",
          "prize": 9342,
          "key": "5GH)Lyi#"
        },
        {
          "name": "蒋超",
          "status": 2,
          "timer": "1989-10-08 09:18:45",
          "prize": 2223,
          "key": "&ldsWz067"
        },
        {
          "name": "于杰",
          "status": 1,
          "timer": "1984-07-24 14:33:00",
          "prize": 5623,
          "key": "sS)GO)@W3"
        },
        {
          "name": "吕秀英",
          "status": 2,
          "timer": "1987-07-23 13:29:16",
          "prize": 9249,
          "key": "Hx1H8Wrv"
        }
      ]
    }
  }
  render() {
    const tableColumns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: (status) => {
          const statusMap = {
            1: {
              color: 'geekblue',
              text: '会员一'
            },
            2: {
              color: 'green',
              text: '会员二'
            },
            3: {
              color: 'red',
              text: '会员三'
            }
          }

          return (
            <Tag color={statusMap[status].color}>
              {statusMap[status].text}
            </Tag>
          )
        }
      },
      {
        title: '价格',
        dataIndex: 'prize',
        key: 'prize',
        align: 'center',
        render: (prize) => {
          return formatMoney(prize)
        }
      },
      {
        title: '时间',
        dataIndex: 'timer',
        key: 'timer',
        align: 'center'
      }
    ]

    return (
      <Table pagination={false} columns={tableColumns} dataSource={this.state.orderTable}></Table>
    )
  }
}

export default OrderTable