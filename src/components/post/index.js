// there are lots of information of posts in index.js
// we need comments input
import { useRef } from "react";
// we would pass content down:
import PropTypes from "prop-types";
import Header from "./header";
import Image from "./image";
import Actions from "./actions";
import Footer from "./footer";
import Comments from "./comments";

export default function Post({ content }) {
  //focus:
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  // component:
  // 1- header
  // 2- images
  // 3- actions like===>like and comment icons
  // 4- footer
  // 5- comments
  return (
    //1- header of posts: user pic and name:
    <div className="border rounded col-span-4 bg-white border-gray-200 mb-12">
      <Header username={content.username} />
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer caption={content.caption} username={content.username} />
      <Comments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
}

//validation of props:
Post.propTypes = {
  content: PropTypes.shape({
    // as a value it has a key inside:
    username: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
    imageSrc: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired, // array to calculate the number
    userLikedPhoto: PropTypes.bool.isRequired,
    docId: PropTypes.string.isRequired,
  }), // caue it is obj we write shape
};
