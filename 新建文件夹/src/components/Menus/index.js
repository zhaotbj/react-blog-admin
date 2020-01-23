import React, { Component } from 'react';
import { Menu, Icon } from 'antd'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { createHashHistory } from 'history'; // 如果是hash路由
const history = createHashHistory();

let router = [
  {
    icon: 'pie-chart',
    path: "/",
    exact: true,
    title: "首页"
  },
  {
    icon: 'desktop',
    path: "/articles",
    title: "文章管理"
  },
  {
    icon: 'user',
    path: "/users",
    title: "用户管理",
    routes: [
      {
        icon: 'user',
        path: "/users/list",
        title: "用户列表"
      }
    ]
  }
];

const injectMenu = (menus) => {
  const { SubMenu } = Menu;
  return menus.map((item, key) => {
    if (item.routes && item.routes.length > 0) {
      return (
        <SubMenu
          key={item.title}
          title={
            <span>
              <Icon type={item.icon} />
              {item.title}
            </span>
          }
        >
          {injectMenu(item.routes)}
        </SubMenu>
      )

    } else {
      return (

        <Menu.Item key={item.path}>
         
          <Icon type={item.icon} />
          <span>{item.title}</span>
           
            </Menu.Item >
         
        
      )
    }
  })
}
class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  handleMenu=(params)=> {
   
    // this.props.history.push(params.key)
    // history.push('/login');
    // console.log(params, 'params');
    history.push(params.key);
    
 
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
{/* defaultSelectedKeys={[this.props.history.location.pathname]} */}
       <Menu theme='dark'
          mode="inline"
          
          onClick={this.handleMenu}
        >
          {injectMenu(router)}
        </Menu>

      </div>
    )
  }
}

// export default 
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}


// Menus.contextTypes = {
//   router: PropTypes.object.isRequired
// }
export default connect(mapStateToProps, mapDispatchToProps)(Menus)