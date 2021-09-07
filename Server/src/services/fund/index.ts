import { firebase } from "../../firebase";
import "../type";

const { userRef, UploadImg, ENCODE, DECODE } = firebase;

// Fund Collector request creation
const createFund = async (data: fund, id: string) => {
  const { image, title, location, date, goal, overview, updates } = data,
    fundId = await ENCODE(`${id}|${Date.now()}`),
    user = <FirebaseFirestore.DocumentData>(await userRef.doc(id).get()).data(),
    imageURL = await UploadImg(image, `funds/${title + Date.now()}`)
      .then((info) => {
        return info;
      })
      .catch(() => {
        return null;
      });
  return await userRef
    .doc(id)
    .collection("funds")
    .doc(fundId)
    .set({
      fundId: fundId,
      image: imageURL,
      title: title,
      location: location,
      date: date,
      goal: goal,
      overview: overview,
      updates: updates,
      available: 0,
      percentage: 0,
      name: user.name,
      profile: user.profile,
      keys: title.toLowerCase().split(" "),
    })
    .then(() => {
      return { err: false, message: "Success" };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

// Edit fund details
const editFund = async (data: fund, id: string) => {
  const { fundId, image, title, date, location, goal, overview, updates } =
      data,
    user = <FirebaseFirestore.DocumentData>(await userRef.doc(id).get()).data();
  return await userRef
    .doc(id)
    .collection("funds")
    .doc(fundId)
    .update({
      image: image,
      title: title,
      location: location,
      date: date,
      goal: goal,
      overview: overview,
      updates: updates,
      name: user.name,
      profile: user.profile,
    })
    .then(() => {
      return { err: false, message: "Success" };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

// Delete fund details
const deleteFund = async (data: fund, id: string) => {
  const { fundId } = data;
  return await userRef
    .doc(id)
    .collection("funds")
    .doc(fundId)
    .delete()
    .then(() => {
      return { err: false, message: "Success" };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

// Refereal fund
const referalFund = async (data: params, id: string) => {
  const { fundId } = data,
    toId = (await DECODE(fundId)).split("|")[0],
    raiseRef = userRef
      .doc(toId)
      .collection("funds")
      .doc(fundId)
      .collection("referals")
      .doc(id);

  return await raiseRef
    .update({ refered: true })
    .then(() => {
      return { err: false, message: "Success" };
    })
    .catch(() => {
      return raiseRef
        .set({ refered: true })
        .then(() => {
          return { err: false, message: "Success" };
        })
        .catch((err) => {
          raiseRef.set({ refered: true });
          return { err: true, message: err.message };
        });
    });
};

export default {
  createFund,
  editFund,
  deleteFund,
  referalFund,
};
