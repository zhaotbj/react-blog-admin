import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button } from 'antd';
import './style.scss'
import {loginRequest}  from '../../store/login/index'
class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        console.log('Received values of form: ', values);

        this.props.submitLogin({
          userName: values.username,
          password: values.password
        })
        // post('/user/login', {
        //   userName: values.username,
        //   password: values.password
        // }).then(res=>{
        //   console.log(res, 'login')
        //   if(res.code===200){
        //     localStorage.setItem('userinfo', JSON.stringify(res.message))
        //     this.props.history.push('/')
        //   }
        // })
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login_user">
        <Form onSubmit={this.handleSubmit} className="login_form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
              initialValue:''
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="admin"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
              initialValue:''
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="123456"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isLogin:state.get('isLogin'),
    login:state.get("login")
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitLogin(values) {
    console.log(values, 'action')
    // dispatch(actionCreators.addUsers(values))
    dispatch(loginRequest(values))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'normal_login' })(Login))