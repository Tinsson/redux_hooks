import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

interface User {
  name: string,
  phone: string,
}

export interface StateType {
  searchWords: string,
  userList: User[]
}

type ActionType = {
  type: 'UPDATE_SEARCH',
  payload: string
} | {
  type: 'UPDATE_LIST',
  payload: User[]
}

// 创建初始化state，dispatch
const initState: StateType = {
  searchWords: 'test',
  userList: []
}

// 定义reducer分发规则
const reducer = (state: StateType = initState, action: ActionType): StateType => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return {
        ...state,
        searchWords: action.payload
      };
    case 'UPDATE_LIST':
      return {
        ...state,
        userList: action.payload
      };
    default:
      break;
  }
  return state
}

const store = createStore(reducer, initState)

const ReduxProvider: React.FC<{ children: JSX.Element }> = ({
  children
}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider