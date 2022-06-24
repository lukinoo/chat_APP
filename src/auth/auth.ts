import { auth, googleProvider } from "../firebase";

export const loginWithGoogle = async () => {
  try {
    await auth.signInWithPopup(googleProvider);
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  auth.signOut();
};
