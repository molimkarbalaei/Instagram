import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getSuggestedProfiles } from "../../services/firebase";
import SuggestedProfile from "./suggested-profile";
export default function Suggestions({ userId, following, loggedInUserDocId }) {
  const [profiles, setProfiles] = useState(null);
  // for getting the suggested profiles when ever userId changes:
  useEffect(() => {
    async function suggestedProfile() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }

    if (userId) {
      suggestedProfile();
    }
  }, [userId]);

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col ">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className=" font-bold text-gray-800">Suggestions for you</p>
      </div>
      {/* how to show suggested profiles */}
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId} // the user that molim requested to follow
            userId={userId}
            loggedInUserDocId={loggedInUserDocId}
          />
          // by this you allow ureself send a userid this person i'm not following
          // but i want to follow:
          // so==> 1- add to my following
          // 2- add to that person new followers

          // we create suggested-profiles file:
        ))}
      </div>
    </div>
  ) : null;
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
  loggedInUserDocId: PropTypes.string,
};
// Suggestions.propTypes = {
//   userId: PropTypes.string,
//   following: PropTypes.array,
// };
// // suggested profiles
// // use firebase(call using userId) to get the suggested profiles
// // getSugestedProfiles
// //call the async function in the useEffect
// // store in the state
// // go ahead and render (wait on the profiles as in skeleton)
