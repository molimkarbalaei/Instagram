import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//1- header of posts:

export default function Header({ username }) {
  return (
    <div className="flex border-b border-gray h-4 p-4 py-8">
      <div className="flex items-center">
        {/* we will have link to that person who post the phoro */}
        <Link to={`/p/${username}`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
            alt={`${username} profile picture`}
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
};
