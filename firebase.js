// firebase.js - initialized for Firestore (real-time)
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqPQbKkU-ja5A6i8IOQxSgbE48m3BNams",
  authDomain: "guest-21009.firebaseapp.com",
  projectId: "guest-21009",
  storageBucket: "guest-21009.firebasestorage.app",
  messagingSenderId: "911410702751",
  appId: "1:911410702751:web:dc67749deb9cfa82d4f5aa",
  measurementId: "G-G1R3Y3VF6D"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
