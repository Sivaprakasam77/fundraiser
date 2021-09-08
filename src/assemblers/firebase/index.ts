import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { functions } from "../common";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

const GFSignUp = (info: GFUser, history: History) => {
  document.cookie = `FSR=${info.accessToken}; path=/`;
  return functions.ApiCall({
    method: "POST",
    body: JSON.stringify({
      profile: info.photoURL,
      email: info.email,
      name: info.displayName,
      upiId: "",
    }),
    source: "/googlefacebook",
    message: "Login successfull!",
    dest: "/",
    history: history,
  });
};

const GoogleSignIn = (history: History) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then(async (info) => {
      return await GFSignUp(info.user as unknown as GFUser, history);
    })
    .catch((err) => {
      functions.Status("error", err.message.replace("Firebase: ",""));
    });
};

const FacebookSignIn = (history: History) => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then(async (info) => {
      await GFSignUp(info.user as unknown as GFUser, history);
    })
    .catch((err) => {
      functions.Status("error", err.message.replace("Firebase: ",""));
    });
};

const OSignIn = { GoogleSignIn, FacebookSignIn };

export default OSignIn;
