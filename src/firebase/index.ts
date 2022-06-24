import type { FirebaseConfig } from "./types";
import { ConfigVariables } from "../env";

const firebaseConfig: FirebaseConfig = {
  apiKey: ConfigVariables.API_KEY,
  authDomain: ConfigVariables.AUTH_DOMAIN,
  projectId: ConfigVariables.PROJECT_ID,
  storageBucket: ConfigVariables.STORAGE_BUCKET,
  messagingSenderId: ConfigVariables.MESSAGING_SENDERID,
  appId: ConfigVariables.APP_ID,
};

export default firebaseConfig;
