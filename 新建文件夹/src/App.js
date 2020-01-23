import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Layout, Icon, Breadcrumb } from 'antd';


import Menus from './components/Menus'
import Home from './view/Home'

import Articles from './view/Articles'

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
  componentDidMount() {
    console.log(this.props, 'props');

  }

  render() {

    const { Header, Sider, Content } = Layout;
    return (

      <div>


        <Provider store={store}>

          <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              {/* {...this.props} */}
              <Menus ></Menus>

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
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb> */}
                <Router>
                  <div>
             
                    <Route exact path='/' component={() => <div>hoem</div>} />
                    <Route path='/articles' component={() => <div>articles</div>} />

                    {/* <Route exact path='/' component={Home} />
              <Route exact path='/forms/' component={Forms} />
              <Route exact path='/forms/add/' component={AddForm} />
              <Route exact path='/table/' component={Tables} />
              <Route exact path='/table/editTable/' component={EditTable} />
              <Route exact path='/table/userList/' component={UserList} /> */}

                  
                  </div>
                </Router>
              </Content>
            </Layout>
          </Layout>

        </Provider>



      </div>
    );
  }

}

export default App

