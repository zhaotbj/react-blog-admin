
import { fromJS } from 'immutable'

const defaultState = fromJS({
  list: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_USERLIST':
      return  state.set('list', fromJS(action.list))
    case 'ADD_USERLIST':
        return  state.set('list', state.get('list').push(action.list))

    default:
      return state
  }
}

