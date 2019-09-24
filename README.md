做头部
## 使用react-redux
## 拆分store
## 使用immutable插件

## 在最外层的store中使用redux-immutable插件

# 使用redux-think中间件处理函数异步的接口返回的数据

#使用了 使用immutable数据的时候，store中存储的是immutable数据，同时我接口返回的时候也要是一个immutable数据，在返回
```
const changeList=(data)=>(
  {
    type: constants.CHANGE_LIST,
    data:fromJS(data)
  }
)
```
7-8actionCreators与constants的拆分(1)
7-9使用Immutable.js来管理store中的数据
7-10使用redux-immutable统一数据格式.mp4
7-12
获取异步数据
7-14
搜索的换页
7-15
加icon的旋转效果
7-16 
避免多次请求 优化
```
handleInputFocus(list) {
      if(list.size===0){
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
```


--------------

# 首页

8-2 首页的拆分

8-3 topic
8-4 list 
8-5

点击出现更多 和 返回顶部
8-10 组件性能优化 
每一次store中数据的变化就会影响所有的组件的reader函数重新渲染。

使用PureComponent的时候用Immutable ，不然会出现坑

9-8 异步组件及withRouter路由方法的使用
优化，加载一个js的文件，会比较慢
异步组件的使用，使用第三方插件 react-loadable

配置动态的路由获取参数，我在点击详情页的时候会加载异步代码，加载一个chunk.js