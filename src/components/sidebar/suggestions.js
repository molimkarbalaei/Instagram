// import { useState, useEffect } from "react";
// import { PropTypes } from "prop-types";
// import Skeleton from "react-loading-skeleton";
// import { getSuggestedProfiles } from "../../services/firebase";

// export default function Suggestions({ userId, following }) {
//   const [profiles, setProfiles] = useState(null);

//   useEffect(() => {
//     async function suggestedProfiles() {
//       const response = await getSuggestedProfiles(userId);
//       setProfiles(response);
//     }
//     if (userId) {
//       suggestedProfiles();
//     }
//   }, [userId]);

//   // if there is no profiles: !profiles
//   return !profiles ? (
//     <Skeleton count={1} height={150} className="mt-5" />
//   ) : profiles.length > 0 ? (
//     <div className="rounded flex flex-col">
//       <div className="text-sm flex items-center align-items justify-between mb-2 text-blue">
//         <p className="font-bold text-gray-base">Suggestions for you</p>
//       </div>
//       <div className="mt-4 grid gap-5">
//         {profiles.map((profile) => (
//           <SuggestedProfile
//             key={profile.docId}
//             profileDocId={profile.docId}
//             username={profile.username}
//             profileId={profile.userId}
//             userId={userId}
//             loggedInUserDocId={loggedInUserDocId}
//           />
//         ))}
//       </div>
//     </div>
//   ) : null;
// }

// Suggestions.propTypes = {
//   userId: PropTypes.string,
//   following: PropTypes.array,
// };
// // suggested profiles
// // use firebase
// // getSugestedProfiles
// //call the async function in the useEffect
// // store in the state
// // go ahead and render (wait on the profiles as in skeleton)

export default function Suggestions() {
  return <p>kuhgytghujk</p>;
}
