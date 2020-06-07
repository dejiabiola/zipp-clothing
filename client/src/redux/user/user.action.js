export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START'
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export const CHECK_USER_SESSIONS = 'CHECK_USER_SESSIONS'
export const SIGN_OUT_START = 'SIGN_OUT_START'
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'
export const SIGN_UP_START = 'SIGN_UP_START'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function googleSignInStart() {
  return {
    type: GOOGLE_SIGN_IN_START
  }
}

export function emailSignInStart(emailAndPassword) {
  return {
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  }
}

export function signInSuccess(user) {
  return {
    type: SIGN_IN_SUCCESS,
    user
  }
}

export function signInFailure(error) {
  return {
    type: SIGN_IN_FAILURE,
    error
  }
}

export const checkUserSessions = () => ({
  type: CHECK_USER_SESSIONS
})

export const signOutStart = () => ({
  type: SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  error
})

export const signUpStart = (userDetails) => ({
  type: SIGN_UP_START,
  payload: userDetails
})

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    user,
    additionalData
  }
})

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  error
})

