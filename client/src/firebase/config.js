import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlba8MwshwMi2SEP--pK6Z3wJTxH9fpyg",
    authDomain: "members-management-syste-373e4.firebaseapp.com",
    projectId: "members-management-syste-373e4",
    storageBucket: "members-management-syste-373e4.appspot.com",
    messagingSenderId: "52807137579",
    appId: "1:52807137579:web:8164e93bb99f1b4600ad6e",
    measurementId: "G-QLDJK8WM5K"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };