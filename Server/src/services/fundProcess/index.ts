import { firebase } from "../../firebase";
import "../type";

const { userRef, db, DECODE } = firebase;

// Dashbaord
const dashbaord = async () => {
  //data: fund
  // const { title } = data;
  return await db
    .collectionGroup("funds")
    .select(
      "fundId",
      "image",
      "title",
      "location",
      "date",
      "goal",
      "available",
      "percentage",
      "name",
      "profile"
    )
    // .orderBy("title")
    // .startAt(title)
    // .limit(10)
    .get()
    .then((dt) => {
      const rslt = <{ [x: string]: FirebaseFirestore.DocumentData }[]>[];
      dt.forEach((doc) => rslt.push(doc.data()));
      return { err: false, message: rslt };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

// Fund donation to the user
const raiseFund = async (data: fund, id: string) => {
  // Raise fund calculation
  const { fundId, amount, message } = data,
    toId = await (await DECODE(fundId)).split("|")[0],
    raiseRef = userRef.doc(toId).collection("funds").doc(fundId),
    supportersRef = raiseRef.collection("supporters").doc(id),
    referalRef = raiseRef.collection("referals").doc(id),
    rslt = <{ available: number; goal: number }>(
      await (await raiseRef.get()).data()
    ),
    getamount = await supportersRef
      .get()
      .then((doc: FirebaseFirestore.DocumentData) => {
        return doc.data().amount;
      })
      .catch(() => {
        return 0;
      }),
    avail: number = parseInt(`${rslt.available}`) + parseInt(`${amount}`),
    percentage: number = (avail / parseInt(`${rslt.goal}`)) * 100,
    user = <FirebaseFirestore.DocumentData>(await userRef.doc(id).get()).data();
  // Raise calculation end

  return await supportersRef
    .set({
      profile: user.profile,
      name: user.name,
      amount: parseInt(`${amount}`) + parseInt(`${getamount}`),
      message: message,
    })
    .then(async () => {
      await raiseRef.update({ available: avail, percentage: percentage });
      const gamt: number = await referalRef
        .get()
        .then((doc: FirebaseFirestore.DocumentData) => {
          return (doc.data() && <number>doc.data().amount) || 0;
        });
      await referalRef
        .update({
          amount: parseInt(`${amount}`) + parseInt(`${gamt}`),
        })
        .catch(() => false);
      return { err: false, message: "Success" };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

// Detail of single fund
const detailFund = async (data: params) => {
  const { fundId } = data,
    toId = await (await DECODE(fundId)).split("|")[0],
  raiseRef = await userRef.doc(toId).collection("funds").doc(fundId),
  shares = (await raiseRef.collection("referals").get()).docs.map(
      (doc) => doc.data().amount
    ),
    suporters = (
      await raiseRef.collection("supporters").orderBy("amount", "desc").get()
    ).docs.map((doc) => doc.data());

  return await db
    .collectionGroup("funds")
    .where("fundId", "==", fundId)
    .get()
    .then(async (dt: FirebaseFirestore.DocumentData) => {
      return {
        err: false,
        message: {
          ...dt.docs[0].data(),
          supporters: suporters.length,
          topSupporters: suporters.slice(0, 5),
          shares: shares.length,
          raisedByShares: shares
            .filter(Boolean)
            .reduce((a, b) => parseInt(a) + parseInt(b), 0),
          comments: (
            await raiseRef.collection("comments").orderBy("time").get()
          ).docs.map((doc) => doc.data()),
        },
      };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

// All titles for search
const titleFund = async () => {
  return await db
    .collectionGroup("funds")
    .orderBy("title")
    .select("title")
    .get()
    .then((info) => {
      return { err: false, message: info.docs.map((doc) => doc.data().title) };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

// Search by title match with keyword
const searchFund = async (data: fund) => {
  const { title } = data;
  return await db
    .collectionGroup("funds")
    .select(
      "fundId",
      "image",
      "title",
      "location",
      "date",
      "goal",
      "available",
      "percentage",
      "name",
      "profile"
    )
    .where("keys", "array-contains-any", title.toLowerCase().split(" "))
    .get()
    .then((dt) => {
      return { err: false, message: dt.docs.map((doc) => doc.data()) };
    })
    .catch((err) => {
      return { err: true, message: err.message };
    });
};

export default {
  dashbaord,
  raiseFund,
  detailFund,
  titleFund,
  searchFund,
};
