import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyA73djbj82N2vyoa1EYCpm7UdAU6P8RDW4",
  authDomain: "events-subscribe.firebaseapp.com",
  projectId: "events-subscribe",
  storageBucket: "events-subscribe.appspot.com",
  messagingSenderId: "399773008299",
  appId: "1:399773008299:web:0c29fd918d51cbc60a12ee"
}

export const app = initializeApp(firebaseConfig)
