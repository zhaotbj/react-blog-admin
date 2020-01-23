import React, { Component } from 'react';
import {Button, Form, Input,Checkbox,DatePicker} from 'antd';
import { connect } from 'react-redux'
import moment from 'moment'
import { actionCreators } from '../../store/userList'
class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      checkedList: [],
      plainOptions: ['吃饭', '写代码', '睡觉'],
      indeterminate: true,
      checkAll: false,
      formData:{
        name:'',
        age:"",
        time:[],
        tags:[]
      }
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
       
        values.time=[ moment(values.time[0]).format('YYYY-MM-DD'),moment(values.time[1]).format('YYYY-MM-DD')]
        this.props.addUserItem(values)
        this.props.userList()
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };
  onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  componentDidMount(){
    this.setState({
      formData:this.props.editData
    })
    console.log('fromData', this.state.formData)
  }
  render() {

    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };


    const { RangePicker } = DatePicker;
    const CheckboxGroup = Checkbox.Group;

   
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="姓名">
          {getFieldDecorator('name', {
            rules: [
              {
                message: 'The input is not valid name',
              },
              {
                required: true,
                message: 'Please input your 姓名',
              }
            ],
            initialValue: this.state.formData.name,
          })(<Input />)}
        </Form.Item>
        <Form.Item label="年龄" hasFeedback>
          {getFieldDecorator('age', {
            rules: [
              {
                required: true,
                message: 'Please input your age!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
            initialValue: this.state.formData.age,
          })(<Input />)}
        </Form.Item>
        <Form.Item label="时间" hasFeedback>
          {getFieldDecorator('time', {
            rules: [
              {
                required: true,
                message: 'Please input your time!',
              }
            ],
            initialValue: [moment(this.state.formData.time[0]), moment(this.state.formData.time[1])],
          })(<RangePicker onChange={this.onChange} />)}
        </Form.Item>
          {/* this.state.formData.time */}

        <Form.Item label="爱好">
          {getFieldDecorator('tags', {
            rules: [
              {
                required: true,message: '请选择爱好',
              }
            ],
            initialValue: this.state.formData.tags,
          })(<CheckboxGroup
            options={this.state.plainOptions}
            value={this.state.checkedList}
            onChange={this.onChange}
            format="YYYY-MM-DD HH:mm"
            mode='date'
          />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch) => ({
  addUserItem(value) {
    console.log(value)
    dispatch(actionCreators.addUserList(value))
  },
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'register' })(AddUserForm));