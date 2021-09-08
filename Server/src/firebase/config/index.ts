import { initializeApp } from "firebase/app";
import * as fbauth from "firebase/auth";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import admin, { ServiceAccount } from "firebase-admin";
import * as CryptoJS from "crypto-js";
import "./type";

const Fconfig = {
  type: <string>process.env.TYPE,
  project_id: <string>process.env.PROJECT_ID,
  private_key_id: <string>process.env.PROJECT_KEY_ID,
  private_key: (<string>process.env.PROJECT_KEY).replace(/\\n/g, "\n"),
  client_email: <string>process.env.CLIENT_EMAIL,
  client_id: <string>process.env.CLIENT_ID,
  auth_uri: <string>process.env.AUTH_URI,
  token_uri: <string>process.env.TOKEN_URI,
  auth_provider_x509_cert_url: <string>process.env.AUTH_PROVIDER,
  client_x509_cert_url: <string>process.env.CLIENT_CERT_URL,
};

// Configurattion for firebase
const config: config = {
  credential: admin.credential.cert(<ServiceAccount>Fconfig),
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Config initialization
admin.initializeApp(config);
initializeApp(config);

// Assignment of data
const db = admin.firestore(),
  userRef = db.collection("users");

const UploadImg = async (image: string, name: string) => {
  return getDownloadURL(
    (await uploadString(ref(getStorage(), name), image, "data_url")).ref
  );
};

const ENCODE = async (payload: string) => {
  return Buffer.from(
    CryptoJS.TripleDES.encrypt(payload, <string>process.env.SECRET).toString()
  ).toString("base64");
};

const DECODE = async (token: string) => {
  return CryptoJS.TripleDES.decrypt(
    Buffer.from(token, "base64").toString(),
    <string>process.env.SECRET
  ).toString(CryptoJS.enc.Utf8);
};

const Verify = async (token: string) => {
  try {
    return await admin
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        return { err: false, message: decodedToken.uid };
      })
      .catch((err) => {
        return { err: true, message: err.message };
      });
  } catch (err) {
    return { err: true, message: "Token not found" };
  }
};

export default {
  fbauth,
  userRef,
  db,
  UploadImg,
  ENCODE,
  DECODE,
  Verify,
};
