import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCjEF3mrgijM__hpDFqRyH4PYfYVASLVQ0",
  authDomain: "crown-db-ce753.firebaseapp.com",
  databaseURL: "https://crown-db-ce753.firebaseio.com",
  projectId: "crown-db-ce753",
  storageBucket: "crown-db-ce753.appspot.com",
  messagingSenderId: "286312041232",
  appId: "1:286312041232:web:7532026e23eb7c3758f395",
  measurementId: "G-9CS9B0KNMJ"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Auth user is the giant object we get when the user successfully sign in with google. It has the user display name and email
  if (!userAuth) return
  // create a user reference using firestore.doc passing in the path to the collection/document
  // Note that the collection is like the array carrying a bunch of document objects in the db
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  // Snapshot returns an object that shows us a snapshot of the db. In there, we can see whether the doc exists or not
  const snapShot = await userRef.get()

  // Check if there is data in the db and if there isn't create one there
  if (!snapShot.exists) {
    // if it does not exist in the db, we will set it in the db
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.error('error creating user ', error)
    }
  }
  // Return userRef because we might need it somewhere else in the codebase
  return userRef
}

export const addCollectionsAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch() // we use batch to combibe all our set calls so if one fails to send, they all fail
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  // TO fire off the batch, we use .commit(). This will return a promise that resolves to a null value
  return await batch.commit()
}

export const convertCollectionToMap = (collection) => {
  const transformedCollection = collection.docs.map(doc => {
    const { title, items } = doc.data()
    
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
