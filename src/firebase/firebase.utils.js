import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyC1nUjW5oFhts7TUWqrlItfCDT29tPI4Mw",
        authDomain: "crwn-db-6190f.firebaseapp.com",
        databaseURL: "https://crwn-db-6190f.firebaseio.com",
        projectId: "crwn-db-6190f",
        storageBucket: "crwn-db-6190f.appspot.com",
        messagingSenderId: "406241982052",
        appId: "1:406241982052:web:a5aa11ec2c3b569299d171",
        measurementId: "G-XSQ8BDJ7L7"
      }

export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();

if(!snapShot.exists){
  const { displayName, email} = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  } catch (error){
    console.log('error creating user', error.meessage)
  }
}
 return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
