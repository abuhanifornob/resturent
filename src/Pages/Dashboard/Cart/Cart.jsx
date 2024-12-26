import Swal from "sweetalert2";
import useAxiiousSecret from "../../../hooks/useAxiiousSecret";
import useCart from "../../../hooks/uuseCart";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  const [orderCart, refetch] = useCart();
  const totalPrice = orderCart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiiousSecret();
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
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
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
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="uppercase text-4xl">Total Items:{orderCart.length}</h2>
        <h2 className="uppercase text-4xl">
          Total price:${totalPrice.toFixed(2)}
        </h2>
        <button className=" btn bg-orange-400 uppercase px-6 py-4 text-white ">
          pay
        </button>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead className="bg-orange-400 rounded-t-2xl">
            <tr className="uppercase text-white text-xl">
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>price</th>
              <th> action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orderCart.map((item, index) => (
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
                  <button
                    onClick={() => handleDelete(item._id)}
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

export default Cart;
