import axios from 'axios'

export const addUserList = (data) => ({
  type: "ADD_USERLIST",
  list: data
})

const getUser=(data)=>({
  type:"GET_USERLIST",
    list:data
})
export const getUserList=()=>{
  return (dispatch)=>{
    axios.get('user.json').then(res=>{

      dispatch(getUser(res.data.list))
    })
  }
}