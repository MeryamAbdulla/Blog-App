import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyCJR2XVY82bO6JMI5PsstwtsMTFHRNkuN8",
        authDomain: "react-blog-app-80ce1.firebaseapp.com",
        databaseURL: "https://react-blog-app-80ce1-default-rtdb.firebaseio.com",
        projectId: "react-blog-app-80ce1",
        storageBucket: "react-blog-app-80ce1.appspot.com",
        messagingSenderId: "74612557186",
        appId: "1:74612557186:web:2a08152d2cbf5d46957b9b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {database as default, googleAuthProvider, firebase}
