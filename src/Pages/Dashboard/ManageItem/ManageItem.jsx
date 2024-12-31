import { RiDeleteBin5Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiiousSecret from "../../../hooks/useAxiiousSecret";

const ManageItem = () => {
  const axiosSecure = useAxiiousSecret();
  const [menu, , refetch] = useMenu();
  const handleDelete = async (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data?.deletedCount === 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} Delete Successfully.!!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading={"Hurry Up!"}
        heading={"manage all tems"}
      ></SectionTitle>
      <div>
        <div className="">
          <div className="flex justify-between">
            <h2 className="uppercase text-4xl">Total Items:{menu.length}</h2>
          </div>
          <div className="overflow-x-auto mt-10 w-full">
            <table className="table w-full">
              {/* head */}
              <thead className="bg-orange-400 rounded-t-2xl">
                <tr className="uppercase text-white text-xl">
                  <th></th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>price</th>
                  <th> action</th>
                  <th> action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {menu.map((item, index) => (
                  <tr key={item._id} className="text-xl">
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask h-20 w-20">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="">{item.name}</td>
                    <td>${item.price}</td>
                    <th>
                      <Link to={`/dashboard/updateItem/${item._id}`}>
                        <button className="btn bg-emerald-600 text-white text-2xl">
                          <FaEdit className="text-2xl" />
                        </button>
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDelete(item)}
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
      </div>
    </div>
  );
};

export default ManageItem;
