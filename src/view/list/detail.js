import React, { Component } from 'react';

import {post, get} from '../../utils/api'
import './detail.scss'
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
       detailData:''
      }
  }
  componentDidMount(){
    console.log(this.props.match.params)
    get('/article/getContentById', {articleId:this.props.match.params.id}).then(res=>{
      if(res.code===200){
        this.setState({
          detailData:res.message
        })
      }
    })
  }
  render() { 
    return ( 
      <div className="detail">
        <h1 className="title">ES6 面向对象 promise</h1>
        <div className="user">
          <img src={require('../../assets/16995a301dc040ae.png')} alt=""/>
          <div className="right">
            <h3>昵称</h3>
            <span>2018.10.13 22:31:14</span>
            <span>阅读 100</span>
            <span>点赞 100</span>

          </div>
        </div>
        <div className="content">
          <div className="editor_html" dangerouslySetInnerHTML={{__html: this.state.detailData.content}}></div>
        </div>
      </div>
     );
  }
}
 
export default Detail;