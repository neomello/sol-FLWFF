import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
let db: Firestore;

if (typeof window !== 'undefined' && !getApps().length) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} else if (typeof window !== 'undefined') {
  app = getApp();
  db = getFirestore(app);
} else {
  // Handle server-side initialization if necessary, or ensure this is only called client-side
  // For Server Actions using client SDK, ensure app is initialized before use.
  // This simple setup is primarily for client-side usage.
  // Server Actions can import and use 'db' if this file is part of the server bundle
  // and Firebase is initialized appropriately. For robust server actions, consider Admin SDK.
  if (!getApps().length) {
     app = initializeApp(firebaseConfig);
  } else {
     app = getApp();
  }
  db = getFirestore(app);
}


export { app, db };

// Helper to ensure Firebase is initialized, can be used in components or actions
export const ensureFirebaseInitialized = () => {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } else {
    app = getApp();
    db = getFirestore(app);
  }
  return { app, db };
};
