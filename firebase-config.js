import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiiV4i3gExoT-SbB6uGMeQGmslj34Y_mY",
  authDomain: "selfcheckin69.firebaseapp.com",
  projectId: "selfcheckin69",
  storageBucket: "selfcheckin69.firebasestorage.app",
  messagingSenderId: "148350658850",
  appId: "1:148350658850:web:f9c9d459ea037c7fec9d7b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);