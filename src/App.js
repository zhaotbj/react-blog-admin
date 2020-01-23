import React, { Component } from 'react';

import {  Route } from 'react-router-dom';
import { Layout, Icon} from 'antd';


import Menus from './components/Menus'
import Home from './view/Home'
import Articles  from './view/Articles';




import Forms from './view/Forms';
// import Login from './views/forms/Login'
import AddForm from './view/forms/AddForm'

import EditTable from './view/Tables/EditTable'

import UserList from './view/Tables/UserList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };

  }
  
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount(){
  }

  render() {
    
    const { Header, Sider, Content } = Layout;
    return (
      
        <Layout style={{ minHeight: '100vh' }}>
          <Sider trigger={null} collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />

            <Menus {...this.props}></Menus> 

          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
              />
            </Header>
            <Content
              style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}
            >
               
              <Route exact path='/' component={Home} />
              <Route exact path='/articles' component={Articles} />
              <Route exact path='/articles/edit' component={EditTable} />
            {/*   <Route exact path='/forms/add/' component={AddForm} />
              <Route exact path='/table/' component={Tables} />
              <Route exact path='/table/editTable/' component={EditTable} />
              <Route exact path='/table/userList/' component={UserList} /> */}
             
            </Content>
          </Layout>
        </Layout>
       
    );
  }

}

export default App

