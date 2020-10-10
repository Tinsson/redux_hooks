import React, { createContext, useContext, useReducer } from 'react'

export interface User {
  name: string,
  phone: string,
}

interface StateType {
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

// 创建初始化state，dispatch
const initState: StateType = {
  searchWords: '',
  userList: []
}
const initDispatch = (action: ActionType): void => {}

// 创建上下文context
const StoreCtx = createContext(initState);
const DispatchCtx = createContext(initDispatch);

const ReduxHooks: React.FC<{ children: JSX.Element }> = ({
  children
}) => {
  // 创建reducer并注入全局state和dispatch
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <DispatchCtx.Provider value={dispatch}>
      <StoreCtx.Provider value={state}>
        {children}
      </StoreCtx.Provider>
    </DispatchCtx.Provider>
  );
};

type SelectType = StateType | User[] | string

export const useSelector = (selector: (params: StateType) => SelectType): SelectType => {
  const store = useContext(StoreCtx)
  return selector(store)
}

export const useDispatch = () => {
  const dispatch = useContext(DispatchCtx)
  return dispatch
}

export default ReduxHooks
