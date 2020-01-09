import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyC6ggmBMVARhOCwUx1rcT7Ekm0DFCANvj8",
    authDomain: "udemy-notifications-course.firebaseapp.com",
    databaseURL: "https://udemy-notifications-course.firebaseio.com",
    projectId: "udemy-notifications-course",
    storageBucket: "udemy-notifications-course.appspot.com",
    messagingSenderId: "1031870963546",
    appId: "1:1031870963546:web:c1a97aa568d16e0b581d63",
    measurementId: "G-0QCDXB6WKP"
};

let app = firebase.initializeApp(config);
const db = app.database();

export { db };