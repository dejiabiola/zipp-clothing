import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS, SIGN_UP_FAILURE } from "./user.action"

const INITIAL_STATE = {
  currentUser: null
}


export default function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        error: null
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}