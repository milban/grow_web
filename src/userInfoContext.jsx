import React, { createContext, useReducer, useContext } from 'react'
import { userReducer, userInitState } from './reducer'

const UserContext = createContext()

const UserInfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, userInitState)
  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
}

export const useUserDispatch = () => {
  const { dispatch } = useContext(UserContext)
  return dispatch
}

export const useIsLogined = () => {
  const {
    state: { isLogined }
  } = useContext(UserContext)
  return isLogined
}

export const useUserInfo = () => {
  const {
    state: { info }
  } = useContext(UserContext)
  console.log(info)
  return info
}

export default UserInfoProvider
