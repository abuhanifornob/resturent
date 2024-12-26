/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiiousSecret from "../../hooks/useAxiiousSecret";
import useCart from "../../hooks/uuseCart";

/* eslint-disable react/prop-types */
const ShopCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiiousSecret();
  const [, refetch] = useCart();
  const { name, image, recipe, _id, price } = item;
  const handeShopCard = (item) => {
    if (user && user.email) {
      console.log(item, user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure
        .post("/cart", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} add to Cart success!!`,
              showConfirmButton: false,
              timer: 3000,
            });
            refetch();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "You Are Not Login!!",
        text: "Please Login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handeShopCard(item)}
              className="btn btn-outline border-0 border-b-4 uppercase"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
