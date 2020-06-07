import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from "./shop.actions";


const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}

export default function shopReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.collectionsMap
      }
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      }
    default:
      return state;
  }
}