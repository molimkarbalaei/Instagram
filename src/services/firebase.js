import { firebase } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username.toLowerCase())
    .get();

  // we have a list of documents:
  return result.docs.length > 0;

  // return result.docs.map((user) => user.data().length > 0);
}

// for checking if there is any user with the same username:
// export async function doesUsernameExist(username) {

//.collection('users') ===> hey look inside the users collection
// where username is equal to the username we passed in:

// for calling user data from firebase:
export async function getUserByUsername(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId.toLowerCase())
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}
// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}
// check all conditions before limit results
export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection("users").limit(10).get();

  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}
//   let query = firebase.firestore().collection("users");

//   if (following.length > 0) {
//     query = query.where("userId", "not-in", [...following, userId]);
//   } else {
//     query = query.where("userId", "!=", userId);
//   }
//   const result = await query.limit(10).get();

//   const profiles = result.docs.map((user) => ({
//     ...user.data(),
//     docId: user.id,
//   }));

//   return profiles;
// }
