import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { Layout, Icon ,Button} from 'antd';

import {outRequest} from './store/login'
import Menus from './components/Menus'
import Home from './view/Home'
import Login from './view/login'
import Articles from './view/Articles';
import AddArtic from './view/list/addArtic'
import EditArtic from './view/list/editArtic'
import Detail from './view/list/detail'



// import Forms from './view/Forms';
// // import Login from './views/forms/Login'
// import AddForm from './view/forms/AddForm'

// import EditTable from './view/Tables/EditTable'

// import UserList from './view/Tables/UserList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };

  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount() {
    console.log(this.props)
    if(!this.props.isLogin){
      this.props.history.push('/login')
    } else {
      this.props.history.push('/')
    }
  }


  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <div>
        <Switch>
         {this.props.isLogin? <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />

              <Menus {...this.props}></Menus>

            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                />
                <div className="user_info">
                <img src={require('./assets/16995a301dc040ae.png')} alt=""/>
                <Button icon="logout" onClick={this.props.logout}></Button>
                </div>
              </Header>
              <Content
                style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}
              >
                <Route exact path='/' component={Home} />

                <Route  path='/articles' component={Articles} />
                <Route  path='/articles/add' component={AddArtic} />
                <Route  path='/articles/edit' component={EditArtic} />
                <Route  path='/articles/detail/:id' component={Detail} />
                {/* <Route exact path='/articles/edit' component={Edit} /> */}
                {/*   <Route exact path='/forms/add/' component={AddForm} />
              <Route exact path='/table/' component={Tables} />
              <Route exact path='/table/editTable/' component={EditTable} />
              <Route exact path='/table/userList/' component={UserList} /> */}

              </Content>
            </Layout>
          </Layout>
          :<Route  path='/login' component={Login} /> }
           
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    isLogin:state.get('user').get('isLogin'),
    login:state.get('user').get("login")
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout(){
    dispatch(outRequest())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(App)

