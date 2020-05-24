export const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS'


export const updateCollections = (collectionsMap) => {
  return {
    type: UPDATE_COLLECTIONS,
    collectionsMap
  }
}