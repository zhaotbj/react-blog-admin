import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { post, get } from '../../utils/api'
import { Table, Button, Modal, Tag ,message} from 'antd'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      columns: [
        // {
        //   title: 'ID',
        //   dataIndex: 'articleId',
        //   key: 'articleId',
        //   render: text => <Button type="link">{text}</Button>,
        // },
        {
          title: '标题',
          dataIndex: 'title',
          key: 'title',
          render: text => <div className="artic_title">{text}</div>,
        },
        {
          title: '图片',
          dataIndex: 'image',
          key: 'image',
        },
        // {
        //   title: 'Tags',
        //   key: 'tags',
        //   dataIndex: 'tags',
        //   render: tags => (
        //     <span>
        //       {tags.map(tag => {
        //         let color = tag.length > 5 ? 'geekblue' : 'green';
        //         if (tag === 'loser') {
        //           color = 'volcano';
        //         }
        //         return (
        //           <Tag color={color} key={tag}>
        //             {tag.toUpperCase()}
        //           </Tag>
        //         );
        //       })}
        //     </span>
        //   ),
        // },
        {
          title: '内容',
          dataIndex: 'summary',
          key: 'summary',
          render: text => <div className="summary">{text}</div>,
        },
        {
          title: '阅读数',
          dataIndex: 'readNumber',
          key: 'readNumber',
          render: text => <Button type="link">{text}</Button>,
        },
        {
          title: '点赞数',
          dataIndex: 'commentNumber',
          key: 'commentNumber',
          render: text => <Button type="link">{text}</Button>,
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime',

        },
        {
          title: '修改时间',
          dataIndex: 'modifiedTime',
          key: 'modifiedTime',
        },
        {
          title: '操作',
          dataIndex: 'articleId',
          key: "articleId",
          render: (text, record) => (

            // onClick={this.props.handleEdit.bind(this, record)}
            // onClick={this.props.handleDelete.bind(this, record)}

            <span><Button type="link" >编辑</Button>
              <Link to={"/articles/detail/" + text}>
                <Button type="link" >查看</Button></Link>

              <Button type="link" onClick={()=>this.handleDelete(text)}>删除</Button></span>),
        }
      ]
    }
  }
  componentDidMount() {
   this.getList()

  }
  getList=()=>{
    get('/article/getAllList').then(res => {
      console.log(res.message, 'res=====')
      if (res.code == 200) {
        this.setState({
          list: res.message
        })
      }

    })
  }
  handleDelete=(value)=>{
    console.log(value)
    post('/article/delete', {articleId:value}).then(res=>{
      if(res.code==200){
        message.success('删除成功');
        this.getList()
      }
    })
  }
  addArtic = () => {
    this.props.history.push('/articles/add')
  }
  render() {
    return (
      <div>
        <div style={{'width':"100%",textAlign:'right'}}><Button type="primary" onClick={this.addArtic}>写文章</Button></div>
        <Table dataSource={this.state.list} columns={this.state.columns} />
      </div>
    );
  }
}

export default List;