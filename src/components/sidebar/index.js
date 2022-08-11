import useUser from "../../hook/use-user";
import User from "./user";
import Suggestions from "./suggestions";

export default function Sidebar() {
  const {
    user: { fullName, userName, userId },
  } = useUser();

  return (
    <div className="p-4">
      <User />
      <Suggestions />
    </div>
  );
}
