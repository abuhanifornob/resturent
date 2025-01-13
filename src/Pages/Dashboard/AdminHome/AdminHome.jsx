import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiiousSecret from "../../../hooks/useAxiiousSecret";
import { TbCalendarEvent } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiiousSecret();

  const { data: adminDashboarData = [] } = useQuery({
    queryKey: ["admin-status"],
    queryFn: async () => {
      const res = await axiosSecure.get("admin-status");
      return res.data;
    },
  });
  console.log(adminDashboarData);

  return (
    <div>
      <h2 className="text-3xl uppercase">
        Hi,
        <span>Welcome {user?.displayName ? user?.displayName : "BACK"} </span>
      </h2>
      <div className="stats shadow gap-3 grid grid-cols-3">
        <div className="stat w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6 px-6 rounded-lg shadow-lg">
          <div className="stat-value flex justify-center items-center gap-4">
            <TbCalendarEvent className="tex-3xl" />${" "}
            {adminDashboarData.totalRevenuea}{" "}
          </div>
          <div className="text-2xl text-center mt-4">Revenue</div>
        </div>
        <div className="stat w-full bg-gradient-to-r from-green-500 via-teal-600 to-red-500 py-6 px-6 rounded-lg shadow-lg">
          <div className="stat-value flex justify-center items-center gap-4">
            <FaUsers className="tex-3xl" />
            {adminDashboarData.users.length < 10 ? "0" : ""}{" "}
            {adminDashboarData.users}{" "}
          </div>
          <div className="text-3xl text-center mt-4">Customers</div>
        </div>

        <div className="stat w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6 px-6 rounded-lg shadow-lg">
          <div className="stat-value flex justify-center items-center gap-4">
            <TbCalendarEvent className="tex-3xl" />${" "}
            {adminDashboarData.totalRevenuea}{" "}
          </div>
          <div className="text-2xl text-center mt-4">Revenue</div>
        </div>
        <div className="stat w-full bg-gradient-to-r from-purple-500 via-pink-500  py-6 px-6 rounded-lg shadow-lg">
          <div className="stat-value flex justify-center items-center gap-4">
            <TbCalendarEvent className="tex-3xl" /> {adminDashboarData.oredrs}{" "}
          </div>
          <div className="text-2xl text-center mt-4">Orders</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
