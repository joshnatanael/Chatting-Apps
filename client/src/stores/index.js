import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { FETCH_CONTACTS, FETCH_MESSAGES } from './action/actionType';
import thunk from 'redux-thunk';

let initialState = {
  contacts: [],
  messages: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return { ...initialState, contacts: action.payload }
    case FETCH_MESSAGES:
      return { ...initialState, messages: action.payload }
    default:
      return state
  }
}

let store = createStore(reducer, applyMiddleware(thunk));

export default store;