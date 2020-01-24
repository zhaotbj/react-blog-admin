
import { fromJS } from 'immutable'
import { post } from '../../utils/api'
import { createHashHistory } from 'history'; // 是hash路由 history路由 自己根据需求来定
 
const history = createHashHistory();
 

const defaultState = fromJS({
  isLogin: JSON.parse(localStorage.getItem('userinfo'))? JSON.parse(localStorage.getItem('userinfo')).isMatch: false,
  login: JSON.parse(localStorage.getItem('userinfo'))|| {}
})
export const reducer= (state = defaultState, action) => {

  switch (action.type) {
    case 'lOGIN':
      console.log(action, 'action')
      return state.set('login', action.data)
    case 'SET_STATE':
      return state.set('isLogin', action.data.isMatch)
    case 'LOG_OUT':
      return state.set('isLogin', false)
    default:
      return state
  }
}

// action creator
const getUser = (data) => ({
  type: "lOGIN",
  data: data
})
const setState = (data) => ({
  type: "SET_STATE",
  data: data
})
const logout = (data) => ({
  type: "LOG_OUT",
  data: data
})
export const loginRequest = (params) => {
  return (dispatch) => {
    post('/user/login',params).then(res => {
      console.log('login-res', res.message)
      if(res.code===200){
        dispatch(setState(res.message))
        dispatch(getUser(res.message))
        localStorage.setItem('userinfo', JSON.stringify(res.message))
        history.push('/');
      } else {
        dispatch(getUser({}))
      }
    })
  }
}
export const outRequest = (params) => {
  return (dispatch) => {
    localStorage.removeItem('userinfo');
    dispatch(logout({}))
    dispatch(getUser({}))
    history.push('/login');
  }
}




