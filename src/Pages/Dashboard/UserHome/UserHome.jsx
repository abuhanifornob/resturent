import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl uppercase">
        Hi,
        <span>Welcome {user?.displayName ? user?.displayName : "BACK"} </span>
      </h2>
    </div>
  );
};

export default UserHome;
