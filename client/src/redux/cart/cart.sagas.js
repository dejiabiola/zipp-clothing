import { all, takeLatest, put, call } from 'redux-saga/effects'
import { SIGN_OUT_SUCCESS } from '../user/user.action'
import { clearCart } from './cart.action'


export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut)
}


export function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ])
}