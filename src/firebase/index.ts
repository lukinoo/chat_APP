import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// config types imported here
import type { FirebaseConfig } from "./types";
// env variables imported here
import { ConfigVariables } from "../env";

// firebase config
const firebaseConfig: FirebaseConfig = {
  apiKey: ConfigVariables.API_KEY,
  authDomain: ConfigVariables.AUTH_DOMAIN,
  projectId: ConfigVariables.PROJECT_ID,
  storageBucket: ConfigVariables.STORAGE_BUCKET,
  messagingSenderId: ConfigVariables.MESSAGING_SENDERID,
  appId: ConfigVariables.APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
