import { firebase } from "../../firebase";
import "../type";

const { userRef,DECODE } = firebase;

// Get user details
const getUser = async (id: string) => {
  return {
    err: false,
    message: (await userRef.doc(id).get()).data(),
  };
};

// Edit user details
const userEdit = async (data: User, id: string) => {
  const { profile, firstName, lastName, upiId } = data;
  return await userRef
    .doc(id)
    .update({
      profile: profile,
      name: `${firstName} ${lastName}`,
      upiId: upiId,
    })
    .then(() => {
      return { err: false, message: "Success" };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

// Add bank account deprycated
const addAccount = async (data: User, id: string) => {
  const { upiId } = data;
  return await userRef
    .doc(id)
    .update({ upiId: upiId })
    .then(() => {
      return { err: false, message: "Success" };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

// Comment user to fund
const comment = async (data: User, id: string) => {
  const { fundId, comment } = data,
    toId = await (await DECODE(fundId)).split("|")[0],
    user = <FirebaseFirestore.DocumentData>(await userRef.doc(id).get()).data();
  return await userRef
    .doc(toId)
    .collection("funds")
    .doc(fundId)
    .collection("comments")
    .add({
      profile: user.profile,
      name: user.name,
      comment: comment,
      time: Date.now(),
    })
    .then(() => {
      return { err: false, message: "Success" };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

export default { getUser, userEdit, addAccount, comment };
