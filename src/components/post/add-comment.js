// we have to add comments to the firebase:

import PropTypes from "prop-types";
import { useState } from "react";
import { useContext } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

export default function AddComment({
  docId,
  comments,
  setComments,
  commentInput,
}) {
  const [comment, setComment] = useState("");
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName },
  } = useContext(UserContext); // it is what logged in

  //1- we need a handler for adding comment:
  const handleSubmitComment = (event) => {
    // 3--> connect to firebase and send the comments:
    event.preventDefault();
    // we pass new arry with[]
    // put new comment in there
    // add the old comments
    // then we have a new array with the new comment and older
    setComments([{ displayName, comment }, ...comments]);
    //clear the comment when it send:
    setComment("");
    // firebase:

    return firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
      });
  };

  /*2- we want to take the comment and send it to firebase: */

  return (
    <div className="border border-gray-200">
      <form
        className="flex justify-between pl-0 pr-5"
        method="POSt"
        onSubmit={(event) =>
          comment >= 1 ? handleSubmitComment : event.preventDefault
        }
      >
        <input
          aria-label="Add a comment"
          autoComplete="off"
          className="text-sm text-gray-800 w-full mr-3 py-5 px-4"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          // in ref baraye ine ke bezani ru aks comment mostaghim bere to gesmate comment

          ref={commentInput}
        />
        <button
          // if no commment put opacity to 25:
          className={`text-sm text-blue-800 font-bold ${
            !comment && "opacity-25"
          }`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

AddComment.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  setComments: PropTypes.func.isRequired,
  commentInput: PropTypes.object,
};
