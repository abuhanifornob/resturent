import useCart from "../../../hooks/uuseCart";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  const [orderCart] = useCart();
  const totalPrice = orderCart.reduce((total, item) => total + item.price, 0);
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
                  <button className="btn bg-red-600 text-white text-2xl">
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
