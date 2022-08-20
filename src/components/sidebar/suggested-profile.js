// we have to sure that in followers we don't have that userId:
// we have 5 profile:
// so we created the suggestion profile:

import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId, // the user that molim requested to follow
  userId,
  loggedInUserDocId, // currently logged in user documentation id(molim)
}) {
  const [followed, setFollowed] = useState(false);
  //1-----> aval follow nadarimesh va mikhaym follow konim va az list hazf she bad.

  // 4----> when we follow dellet the sugestion:
  async function handleFollowUser() {
    setFollowed(true);

    ///*********firebase create 2 servises: (with docId= profileDocId) ************ */
    //5 ----> update the following array of the loggedin user(molim):
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    //6-----> update the follower array of the user that i follwed:
    //my userid and the followedid:
    await updateFollowedUserFollowers(profileDocId, userId, false);
  }

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        {/* 2--->  we want to link them to the correct their profiles: */}
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm ">{username}</p>
        </Link>
      </div>
      {/* 3----->  now we want to follow that user: 
        so we can have a button*/}
      <button
        className="text-sm font-bold text-blue-800 m-100 "
        type="button"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
// SuggestedProfile.propTypes = {
//   profileDocId: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   profileId: PropTypes.string.isRequired,
//   userId: PropTypes.string.isRequired,
//   loggedInUserDocId: PropTypes.string.isRequired,
// };
