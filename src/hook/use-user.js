// pull out information from firebase user
import { useContext, useState, useEffect } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);
  // listen to changes:

  useEffect(() => {
    async function getUserObjByUserId() {
      // we need to get the user object from firebase by user id
      // we need a func that we can call (firebase services) that gests user dada based on user id
      const [response] = await getUserByUserId(user.uid);

      // if we have that:
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);
  //for active user:
  return { user: activeUser, setActiveUser };
}
