
import { fromJS } from 'immutable'

const defaultState = fromJS({
  dataSource: [],
  editObj:{}

})

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'ADD_USER':
        return  state.merge({
        'dataSource':state.get('dataSource').unshift(action.dataSource),
        
      }) 
    case 'CLEAR_ITEM':
        return  state.merge({
        'editObj':{}
        
      }) 
    case 'DELETE_ITEM':
      return state.set('dataSource', state.get('dataSource').splice(action.key,1))
    case 'EDIT_ITEM':
      return state.set('editObj',  action.obj)
    default:
      return state
  }
}

