import { LOGIN } from './actions'

export const userInitState = { info: {}, isLogined: false }

export const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        info: { ...action.payload.userInfo },
        isLogined: true
      }
    }
    default:
      return
  }
}
