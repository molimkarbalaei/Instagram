import { FieldValue, firebase } from "../lib/firebase";

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

  return (
    result.docs
      // firstly get all the users:
      .map((user) => ({ ...user.data(), docId: user.id }))
      // then make sure that the user is not the same as the logged in user:
      .filter(
        (profile) =>
          profile.userId !== userId && !following.includes(profile.userId)
      )
  );
}

//updateLoggedInUserFollowing:
export async function updateLoggedInUserFollowing(
  loggedInUserDocId, // currently logged in user documentation id(molim)
  profileId, // the user that molim requested to follow
  isFollowingProfile // true or false
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      //i wanna update following:
      // do we follow it already?
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : //if not following the profile:
          FieldValue.arrayUnion(profileId),
    });
}

// updateFollowedUserFollowers:
export async function updateFollowedUserFollowers(
  profileDocId,
  loggedInUserDocId,
  isFollowingProfile /// true/false (am i currently following this person?)
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(profileDocId) // suggested profile id
    .update({
      //i wanna update following:
      // do we follow it already?
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : //if not following the profile:
          FieldValue.arrayUnion(loggedInUserDocId),
    });
}

//getPhotos
export async function getPhotos(userId, following) {
  const result = await firebase
    .firestore()
    .collection("photos")
    // my userid is in following:
    .where("userId", "in", following)
    .get();
  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  // console.log("userFollowedPhotos", userFollowedPhotos);
  // we don't have any data that say: ok has x person liked that paticular photo:
  // so we can check this:
  const photoWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      // we wanna loop over these photos and avalesh ke like nakardim!:
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        //my user id
        userLikedPhoto = true; // you turn it to true
      }
      // photo.userId = 2 for raphael
      const user = await getUserByUserId(photo.userId);
      const { username } = user[0];
      // we have to return all of them
      return { username, ...photo, userLikedPhoto }; // userLikedPhoto is boolian
    })
  );
  return photoWithUserDetails;
}
