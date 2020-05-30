import { takeEvery, call, put } from 'redux-saga/effects'
import { FETCH_COLLECTIONS_START, fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'
import { firestore, convertCollectionToMap } from '../../firebase/firebase.utils'



export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapShot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionToMap, snapShot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  // the first arg for takeEvery is the actiontype to be updated and the second is the generator function you want to run
  // takeEvrer creates a non blocking to call so that the app is non blocking
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsStartAsync)
}