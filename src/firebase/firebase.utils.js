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

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
