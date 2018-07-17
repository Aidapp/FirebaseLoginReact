import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
    apiKey: "AIzaSyDRlJscwE7kbTWfF9CoahM9QP-JWbM-M7g",
    authDomain: "aidapp-410c1.firebaseapp.com",
    databaseURL: "https://aidapp-410c1.firebaseio.com",
    projectId: "aidapp-410c1",
    storageBucket: "aidapp-410c1.appspot.com",
    messagingSenderId: "544477474037"
};

const devConfig = {
    apiKey: "AIzaSyDRlJscwE7kbTWfF9CoahM9QP-JWbM-M7g",
    authDomain: "aidapp-410c1.firebaseapp.com",
    databaseURL: "https://aidapp-410c1.firebaseio.com",
    projectId: "aidapp-410c1",
    storageBucket: "aidapp-410c1.appspot.com",
    messagingSenderId: "544477474037"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};