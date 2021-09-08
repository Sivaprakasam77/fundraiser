import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { functions } from "../common";

const firebaseConfig = {
  apiKey: "AIzaSyCBmuJGhTiorToItFnRCOWW6OavBe0mwGY",
  authDomain: "fundraiser-3c8ea.firebaseapp.com",
  projectId: "fundraiser-3c8ea",
  storageBucket: "fundraiser-3c8ea.appspot.com",
  messagingSenderId: "607629276253",
  appId: "1:607629276253:web:64338f9172e2a68e33c9b4",
  measurementId: "G-5EEWTRSJZN",
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
      return err;
    });
};

const FacebookSignIn = (history: History) => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then(async (info) => {
      await GFSignUp(info.user as unknown as GFUser, history);
      return info.user;
    })
    .catch((err) => {
      return err;
    });
};

const OSignIn = { GoogleSignIn, FacebookSignIn };

export default OSignIn;
