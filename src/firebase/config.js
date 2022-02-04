import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVADdVb_2MRuKsGwluoyfZZ2nYttPYMb8",
  authDomain: "react-firebase-task-8b3fe.firebaseapp.com",
  projectId: "react-firebase-task-8b3fe",
  storageBucket: "react-firebase-task-8b3fe.appspot.com",
  messagingSenderId: "1031389152331",
  appId: "1:1031389152331:web:ecb6ddda3f5505092939ce",
  measurementId: "G-LKQEP6TQGP",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { projectStorage, projectFirestore };
