import React, { Component } from 'react';
import { Icon, Card,Col } from 'antd'
import './index.less'
class NumberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  componentDidMount() {
    console.log(this.props, '---')
    // this.setState()
  }

  render() {

   
      return(
        this.props.numberObj.length>0&& this.props.numberObj.map((item, index) => {

          return (
           
            <Col  lg={6} md={12} key={index} className='numberCard'>
            <Card
              className='numberCard'
              bordered={false}
              bodyStyle={{ padding: 10 }}
              key={index}
            >
              <Icon className='iconWarp' style={{ color: item.color }}  type={item.type}/>
              <div className='content'>
                <p className='title'>{item.title || '暂无标题'}</p>
                <p className='number'>
                  {item.number}
                </p>
              </div>
            </Card>
            </Col>
           
          )
        })
      
      )
      
    
    
  }
}

export default NumberCard;
