import React, { Component } from 'react';
import { Form, Icon, Input, message,Button } from 'antd';
import { connect } from 'react-redux'

import { actionCreators } from '../../store/tables'
class addUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      key:0
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('值', values);
        let key = this.state.key
        this.setState({
          key:++key
        })

        let obj={
          key: this.state.key,
          tags: ['loser'],
          ...values
        }
        this.props.add(obj)
        message.success('This is a success message');
        this.props.editTable.handleCancel()
      }
    });
  };
  componentDidUpdate(){

  }
  componentDidMount(){
  }
  componentWillUnmount(){
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {name, age,address}=this.props.editObj
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="姓名">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your username!' }],
            initialValue: name||'',
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="name"
            />,
          )}
        </Form.Item>
        <Form.Item label="年龄">
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input your userage!' }],
            initialValue: age||''
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="age"
            />,
          )}
        </Form.Item>

        <Form.Item label="地址">
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your userdress!' }],
            initialValue: address||''
          })(
            <Input
              
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="address"
            />,
          )}
        </Form.Item>
        <Form.Item>
          
          <Button type="primary" htmlType="submit" className="login-form-button">
           保存
          </Button>
         
        </Form.Item>
      </Form>
    )
  }
}
// export default Form.create({ name: 'normal_login' })(addUser);
const mapStateToProps = (state) => {
  return {
    dataSource: state.get('tables').get('dataSource'),
    editObj:state.get("tables").get('editObj')
  }
}

const mapDispatchToProps = (dispatch) => ({
  add(values) {
    console.log(values, 'action')
    dispatch(actionCreators.addUsers(values))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'normal_login' })(addUser));
