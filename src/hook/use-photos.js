// we create our own costum hook:
import { useState, useEffect, useContext } from "react";
// we have to have a create something in servisec that allows us
// to get photos so we need user===> UserContext:
import UserContext from "../context/user";
import { getUserByUserId, getPhotos } from "../services/firebase";

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      //examples: [2 , 5 , 1] => 2 is raphel
      // we need the get the user by userid:
      const [{ following }] = await getUserByUserId(userId);
      // we have an arry that gonna be a URL such imgsources
      let followedUserPhotos = [];

      // we have to check does the user follow people?
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);

        // display the photos in a formal way:
        //unix epoch:
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        // now we have newest photo in the feed.
        setPhotos(followedUserPhotos);
      }
    }

    getTimelinePhotos();
  }, [userId]);
  return { photos };
}

// we return photos as an obj  ==>  return { photos };

// import { useState, useEffect } from 'react';
// import { getPhotos } from '../services/firebase';

// export default function usePhotos(user) {
//   const [photos, setPhotos] = useState(null);

//   useEffect(() => {
//     async function getTimelinePhotos() {
//       // does the user actually follow people?
//       if (user?.following?.length > 0) {
//         const followedUserPhotos = await getPhotos(user.userId, user.following);
//         // re-arrange array to be newest photos first by dateCreated
//         followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
//         setPhotos(followedUserPhotos);
//       }
//     }

//     getTimelinePhotos();
//   }, [user?.userId, user?.following]);

//   return { photos };
// }
