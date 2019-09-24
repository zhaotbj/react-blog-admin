// import axios from 'axios'

export const addUsers = (data) => ({
  type: "ADD_USER",
  dataSource: data
})
 
export const deleteItem=(key)=>({
  type:'DELETE_ITEM',
  key
})
export const editItem=(obj)=>({
  type:'EDIT_ITEM',
  obj
})
export const clearItem=(key)=>({
  type:'CLEAR_ITEM'
})
// export const getHomeList = () => {
//   return (dispatch) => {
//     axios.get('/api/home.json').then(res => {

//       dispatch(changeList(res.data.data))
//     })
//   }
// }

// 获取详情

