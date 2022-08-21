// add comments in post:

import { formatDistance } from "date-fns";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

// posted : when it posted
// we have comments::::::
// allcomments: all of them
export default function Comments({
  docId,
  comments: allComments,
  posted,
  commontInput,
}) {
  const [comments, setComments] = useState(allComments);
  return (
    <>
      <div className="p-4 pt-1 pb-4">
        {comments.length >= 3 && (
          <p className="text-sm text-gray mb-1 cursor-pointer">
            View all {comments.length} comments
          </p>
        )}
        {comments.slice(0, 3).map((item) => (
          <p key={`${item.comment}-${item.displayName}`} className="mb-1">
            <Link to={`/p/${item.displayName}`}>
              <span className="mr-1 font-bold text-sm">{item.displayName}</span>
            </Link>
            <span>{item.comment}</span>
          </p>
        ))}
        {/*  convert to time of post::: */}
        <p className="text-gray-800 uppercase text-xs mt-2">
          {formatDistance(posted, new Date())} ago
        </p>
      </div>
    </>
  );

  //Add a comment need to acces to firestore:
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired,
};
