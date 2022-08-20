// we need to get the logged in user's photos
// on loading the photos, we need to use react skeleton
// if we need photos, render them(create a post component)
// if the user has no photo, tell them create some

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePhotos from "../hook/use-photos";

export default function Timeline() {
  // 1--- we need to get the logged in user's photos
  const { photos } = usePhotos();

  return (
    //************************ inja span ro khodesh 2 gozashte */
    <div className="container col-span-2">
      {/* 2----- on loading the photos, we need to use react skeleton */}
      {/* if no photos go ahead and  */}
      {!photos ? (
        <Skeleton count={10} width={640} height={500} className="mt-5" />
      ) : photos?.length > 0 ? (
        photos.map((content) => <p key={content.docId}>{content.imageSrc}</p>)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos</p>
      )}
    </div>
  );
}
// we rerutn back photos as an obj and u have photos inside and inside photos you have array.
