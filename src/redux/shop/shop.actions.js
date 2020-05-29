import { convertCollectionToMap, firestore } from "../../firebase/firebase.utils"

export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS'
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE'


export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    collectionsMap
  }
}

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    errorMessage
  }
}

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections')
    collectionRef.get().then((snapShot => {
      const collectionsMap = convertCollectionToMap(snapShot)
      dispatch(fetchCollectionsSuccess(collectionsMap))
    })).catch(error => {
      dispatch(fetchCollectionsFailure(error.message))
    })
  }
}