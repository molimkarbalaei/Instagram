import { useEffect } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid grid-cols-5 gap-4 justify-between max-auto max-w-screen-lg ">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}

//headers ==> hearder of instagram
//instagram timeline ==>profile, posts, followers, following
// instagram side bar ==> recommendatin

// 1024 is middle of the screen
// 2/3 <-> 1/3
// 66% | 33%
// 768 is the top of the screen
// 600 is the bottom of the screen
// for the header:
// h-16 is the height of the header

//
