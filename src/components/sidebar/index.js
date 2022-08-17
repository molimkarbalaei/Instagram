import useUser from "../../hook/use-user";
import User from "./user";
import Suggestions from "./suggestions";

export default function Sidebar() {
  const {
    user: { fullName, username, userId, following },
  } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following={following} />
    </div>
  );
}
// we have to sure that in followers we don't have that userId:
// so we created the suggestion profile:
