import { useQuery } from "@tanstack/react-query";
import useAxiiousSecret from "../../../hooks/useAxiiousSecret";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiiousSecret();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${id}`).then((res) => {
          console.log(res.data);
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Admin",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Admin it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/${user._id}`).then((res) => {
          console.log(res.data);
          if (res?.data?.matchedCount > 0) {
            refetch();
            Swal.fire({
              title: "Admin!",
              text: `${user.name} has been Admin Successfully`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="uppercase text-4xl">Total Users:{users.length} </h2>
      </div>
      <div className="overflow-x-auto mt-10 w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-orange-400 rounded-t-2xl">
            <tr className="uppercase text-white text-xl">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th> action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id} className="text-xl">
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask h-20 w-20">
                        <p>{user.name}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="">{user.email}</td>
                <td>
                  {" "}
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-orange-400 text-white text-2xl"
                      >
                        <FaUsers />
                      </button>
                    </>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn bg-red-600 text-white text-2xl"
                  >
                    <RiDeleteBin5Line />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
