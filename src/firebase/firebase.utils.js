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

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Auth user is the giant object we get when the user successfully sign in with google. It has the user display name and email
  if (!userAuth) return
  // create a user reference using firestore.doc passing in the path to the collection/document
  // Note that the collection is like the array carrying a bunch of document objects in the db
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
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

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      unSubscribe();
      resolve(userAuth)
    }, reject)
  })
}



export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
