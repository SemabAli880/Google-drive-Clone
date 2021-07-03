
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyCzKUonbN-watE-7N4wasaqwrqnNQgLCxg',
  authDomain: 'drive-clone-60af1.firebaseapp.com',
  projectId: 'drive-clone-60af1',
  storageBucket: 'drive-clone-60af1.appspot.com',
  messagingSenderId: '1084303715184',
  appId: '1:1084303715184:web:5330c250f7d3d322be7db5'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebase.firestore()

export { auth, provider, db, storage }
