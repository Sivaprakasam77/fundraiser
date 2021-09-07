import { firebase } from "../../firebase";
import "../type";

const { fbauth, userRef, UploadImg } = firebase;

// Sign In
const signin = async (data: User) => {
  const { email, password } = data;
  return await fbauth
    .signInWithEmailAndPassword(fbauth.getAuth(), email, password)
    .then((info) => {
      return {
        err: false,
        message: (<{ stsTokenManager: { accessToken: string } }>(
          (<unknown>info.user)
        )).stsTokenManager.accessToken,
      };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

// Sign Up
const signup = async (data: User) => {
  const {
    profile,
    firstName,
    lastName,
    upiId,
    email,
    password,
    confirmPassword,
  } = data;
  if (password === confirmPassword) {
    const creds: err = await fbauth
        .createUserWithEmailAndPassword(fbauth.getAuth(), email, password)
        .then((info) => {
          return { err: false, message: info };
        })
        .catch((err) => {
          return { err: true, message: err.message };
        }),
      image = await UploadImg(profile, `users/${firstName} ${lastName}`),
      uid = <string>fbauth.getAuth().currentUser?.uid;
    if (!creds.err) {
      return await userRef
        .doc(uid)
        .set({
          profile: image,
          name: `${firstName} ${lastName}`,
          email: email,
          upiId: upiId,
        })
        .then(() => {
          return {
            err: false,
            message: (<{ stsTokenManager: { accessToken: string } }>(
              (<unknown>creds.message.user)
            )).stsTokenManager.accessToken,
          };
        })
        .catch((err) => {
          return { err: true, message: err.message };
        });
    } else return creds;
  }
  return { err: true, message: "Password does not match" };
};

// Sign Out
const signout = async () => {
  return { err: false, message: "Success" };
  // return await fbauth
  //   .signOut(fbauth.getAuth())
  //   .then(() => {
  //     return { err: false, message: "Success" };
  //   })
  //   .catch((err) => {
  //     return { err: true, message: err.message };
  //   });
};

// Forget password
const forget = async (data: User) => {
  const { email } = data;
  return await fbauth
    .sendPasswordResetEmail(fbauth.getAuth(), email)
    .then(() => {
      return { err: false, message: "Success" };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

export default { signin, signup, signout, forget };
