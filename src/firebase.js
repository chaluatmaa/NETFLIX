import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAvbMbJSqo4xML17vGd2bdH4-VJHf-PTSc",
	authDomain: "netflicks-c359a.firebaseapp.com",
	projectId: "netflicks-c359a",
	storageBucket: "netflicks-c359a.appspot.com",
	messagingSenderId: "339055465566",
	appId: "1:339055465566:web:c8ebe2e51810eef38810cf",
	measurementId: "G-MCL1CWV8T7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
