
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";

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
let auth: Auth;
let firebaseInitialized = false;

function initializeFirebaseServices() {
  if (firebaseInitialized) return;

  if (!firebaseConfig.apiKey) {
    console.error(
      "CRITICAL: Firebase API Key (NEXT_PUBLIC_FIREBASE_API_KEY) is missing. Firebase will not initialize correctly. Please check your environment variables."
    );
    throw new Error("Firebase API Key is missing. Ensure NEXT_PUBLIC_FIREBASE_API_KEY is set.");
  }

  if (!firebaseConfig.projectId) {
    console.error(
      "CRITICAL: Firebase Project ID (NEXT_PUBLIC_FIREBASE_PROJECT_ID) is missing. Firebase will not initialize correctly. Please check your environment variables."
    );
    throw new Error("Firebase Project ID is missing. Ensure NEXT_PUBLIC_FIREBASE_PROJECT_ID is set.");
  }

  if (!getApps().length) {
    try {
      app = initializeApp(firebaseConfig);
    } catch (error) {
      console.error("Error initializing Firebase app:", error);
      throw error; // Re-throw to surface the original Firebase error
    }
  } else {
    app = getApp();
  }

  try {
    db = getFirestore(app);
    auth = getAuth(app); // This is where the original error (auth/invalid-api-key) might occur
  } catch (error) {
    console.error("Error getting Firestore or Auth instance:", error);
    // This will catch and log the 'auth/invalid-api-key' if it occurs here
    // and then re-throw it, so the application knows initialization failed.
    throw error;
  }

  firebaseInitialized = true;
}

// Initialize Firebase services when this module is loaded.
// If this throws, the application might fail to start or server actions will fail,
// which is appropriate for a critical service initialization failure.
try {
  initializeFirebaseServices();
} catch (error) {
  // Log the error here as module-level errors might not be as visible in some environments
  console.error("Failed to initialize Firebase services during module load:", error);
  // Depending on the application's needs, you might want to re-throw or handle differently
  // For now, re-throwing ensures the failure is noisy.
  // throw error; // Commented out to prevent app from crashing if only a specific part fails, relying on ensureFirebaseInitialized later.
}


export const ensureFirebaseInitialized = (): { app: FirebaseApp; db: Firestore; auth: Auth } => {
  if (!firebaseInitialized || !app || !db || !auth) {
    console.warn("Firebase services not available or not fully initialized. Attempting to initialize/re-initialize.");
    try {
      initializeFirebaseServices();
    } catch (error) {
       console.error("Error during ensureFirebaseInitialized:", error);
       throw new Error(`Firebase could not be initialized. Original error: ${error instanceof Error ? error.message : String(error)} Ensure Firebase config (API Key, Project ID) is correct and Firebase services (Auth, Firestore) are enabled.`);
    }
  }
  // After attempting initialization, check again.
  if (!app || !db || !auth) {
    throw new Error("Firebase services are still not available after attempting initialization. Check console for critical errors regarding API Key or Project ID.");
  }
  return { app, db, auth };
};

// Export the initialized instances.
// These might be undefined if the initial module-level `initializeFirebaseServices()` call threw an error
// and that error was not caught or handled in a way that still assigns them.
// `ensureFirebaseInitialized` is the safer way to get these instances.
export { app, db, auth };
