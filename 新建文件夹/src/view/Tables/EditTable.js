import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Button, Modal, Tag } from 'antd'
import { actionCreators } from '../../store/tables'

import AddUser from './addUser'
class EditTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          render: text => <Button type="link">{text}</Button>,
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
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
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '操作',
          dataIndex: '',
          render: (text, record) => (
            <span><Button type="link" onClick={this.props.handleEdit.bind(this, record)}>编辑</Button>
              <Button type="link" onClick={this.props.handleDelete.bind(this, record)}>删除</Button></span>),
        }
      ],
      editProps: {}
    }
  }


  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });

  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      editProps: {}
    });
  };

  render() {
    let dataSource = this.props.dataSource.toJS()
    return (
      <div>
        <Button type="primary" onClick={this.props.showModal.bind(this)}>新增</Button>
        <Table dataSource={dataSource} columns={this.state.columns} />

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <AddUser editTable={this} />
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    dataSource: state.get('tables').get('dataSource')
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleDelete(record) {
    let key = record.key
    dispatch(actionCreators.deleteItem(key))
  },
  handleEdit(record) {
    console.log('编辑', record)
    dispatch(actionCreators.editItem(record))
    this.setState({

      visible: true
    })
  },
  showModal() {
    this.setState({
      visible: true,
    });
    dispatch(actionCreators.clearItem())
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(EditTable);
