import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Table, Divider, Tag, Button, Modal
} from 'antd';

import { actionCreators } from '../../store/userList'
import AddUserForm from './AddUserForm'

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          render: text => <Button type="link" >{text}</Button>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '时间',
          dataIndex: 'time',
          key: 'time',
          render: (text, record) => (
            <span>{record.time.join('--')}</span>
          ),
        },

        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
              <Button type="link"  onClick={this.handleEdit.bind(this,record)}>编辑</Button>
              <Divider type="vertical" />
              <Button type="link" >删除</Button>
            </span>
          ),
        },
      ],
      editData:{}
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleEdit(row){
    console.log(row,'---')
    this.setState({
      editData:row,
      visible: true
    })
  }
  componentDidMount(){
    this.props.getList()
  }
  render() {
    let list = this.props.userList.toJS()
    return (
      <div>
        <Button onClick={this.showModal} type="primary">新增用户</Button>
  
         
            <Table columns={this.state.columns} dataSource={list} />
         
        

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
        <AddUserForm userList={this.handleCancel} editData={this.state.editData} />
        </Modal>

        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.get('userList').get('list')
  }
}

const mapDispatchToProps = (dispatch) => ({
  getList(){
    dispatch(actionCreators.getUserList())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
