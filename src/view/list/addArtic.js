import React, { Component } from 'react';
import { Form, Input, message, Button } from 'antd'
import './style.css'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

import {post, get} from '../../utils/api'
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      text:"",
      fromData: {
        title: '',
        summary: '', //文章简介

      }
    }
    this.handleChange = this.handleChange.bind(this)
  }
  inputTitle(e,value){
    
    let copy= JSON.parse(JSON.stringify(this.state.fromData))
    copy[value]= e.target.value
    this.setState({
      fromData:copy
    })
  }
  handleChange(value) {
    this.setState({ text: value })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify(this.state.fromData))
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('值', values);
        if(!this.state.text || this.state.text=='') {
          return
        }
        let params = {
          userId:"188888888",
          content:this.state.text,
          ...values
        }
        console.log(params)
        post('/article/create', params).then(res => {
          if(res.code==200){
            message.success('添加成功');
            this.props.history.push('/articles')
          }
    
        })
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
    return (
      
      <div className="add_from">
       
       <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item label="标题">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your 标题!' }]
            })(
              <Input placeholder="标题" onChange={(e)=>this.inputTitle(e,'title')} />,
            )}
             <Button type="primary" htmlType="submit" className="login-form-button">
              保存
          </Button>
          </Form.Item>
          <Form.Item label="简介">
            {getFieldDecorator('summary', {
              rules: [{ required: true, message: 'Please input your 简介!' }],
            })(
              <TextArea placeholder="简介" rows={4} onChange={(e)=>this.inputTitle(e,'summary')}/>
      
            )}
          </Form.Item>
        </Form>

         <ReactQuill value={this.state.text}
                  onChange={this.handleChange} />
      </div>
    )
  }
}


export default Form.create({ name: 'normal_login' })(Add)
