// we have to sure that in followers we don't have that userId:
// so we created the user profile:
// proptypes:
// import { memo } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
// so we need username and fullname:

const User = ({ username, fullName }) =>
  // do we have the name and fullname?
  !username && !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    // if we have user info:
    <Link to={`/p/${username}`} className="grid grid-cols-4 mb-4 items-center">
      {/* we want to put my picture */}
      <div className="flex items-center justify-between col-span-1">
        <img
          src={`/images/avatars/${username}.jpg`}
          alt=""
          className="rounded-full w-16 flex mr-3 border-radius: 9999px "
        />
        <p> {username} </p>
      </div>
    </Link>
  );

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};

export default User;
