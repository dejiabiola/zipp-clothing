import { takeLatest, put, all, call } from 'redux-saga/effects'
import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START, signInFailure, signInSuccess, 
  CHECK_USER_SESSIONS, SIGN_OUT_START, signOutSuccess, signOutFailure, SIGN_UP_START, signUpSuccess, signUpFailure, SIGN_UP_SUCCESS } from './user.action'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser  } from '../../firebase/firebase.utils'


export function* getSnapShotFromUserAuth(user, additionalData) {
  try{
    const userRef = yield call(createUserProfileDocument, user, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* SignInWithGoogle() { 
  try {
    const {user} = yield auth.signInWithPopup(googleProvider)
    yield getSnapShotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}


export function* SignInWithEmail({ payload: { email, password }}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapShotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* isAunthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapShotFromUserAuth(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch(error) {
    yield put(signOutFailure(error))
  }
}

export function* signUpWithEmail({payload: { email, password, displayName }}) {
  try {
    // use the firebase auth create object to create a new user object and destructure it from its parent
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    

    yield put(signUpSuccess({ user, additionalData: { displayName } }))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    // pass the user object to create user profile function to store it in the database
    yield getSnapShotFromUserAuth(user, additionalData)
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSIONS, isAunthenticated)
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, SignInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, SignInWithEmail)
}

export function* onSignOutstart() {
  yield takeLatest(SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUpWithEmail)
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp) 
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutstart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ])
} 