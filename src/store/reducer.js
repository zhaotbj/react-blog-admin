
// import { combineReducers} from 'redux'
// 使用redux-immutable
import {combineReducers} from 'redux-immutable'
// 减少两次目录， 在store文件的index里面导出
// import {reducer as tables} from './tables'

import {reducer as login} from './login/index'
// 分模块
const reducer = combineReducers({
  // tables:tables,
  user:login
})
export default  reducer
