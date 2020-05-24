import { UPDATE_COLLECTIONS } from "./shop.actions";


const INITIAL_STATE = {
  collections: null
}

export default function shopReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.collectionsMap
      }
    default:
      return state;
  }
}