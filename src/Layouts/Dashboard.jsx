import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaShop } from "react-icons/fa6";

import { MdOutlinePayments } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-orange-400 p-10">
        <h1 className=" mb-10 text-3xl font-bold">
          HTHR BOSS <br /> RESTAURANT
        </h1>
        <ul>
          <li className="text-xl mb-4">
            <NavLink to={"/dashboard/home"}>
              {" "}
              <div className="flex justify-start items-center gap-4 hover:text-white">
                <FaHome className="text-3xl" />
                USER HOME
              </div>
            </NavLink>
          </li>
          <li className="text-xl mb-4">
            <NavLink to={"/dashboard/reservation"}>
              {" "}
              <div className="flex justify-start items-center gap-4 hover:text-white">
                <FaCalendarAlt className="text-3xl" />
                RESERVATION
              </div>
            </NavLink>
          </li>
          <li className="text-xl mb-4">
            <NavLink to={"/dashboard/payment"}>
              {" "}
              <div className="flex justify-start items-center gap-4 hover:text-white">
                <MdOutlinePayments className="text-3xl" />
                PAYMENT HISTORY
              </div>
            </NavLink>
          </li>
          <li className="text-xl mb-4">
            <NavLink to={"/dashboard/cart"}>
              {" "}
              <div className="flex justify-start items-center gap-4 hover:text-white">
                <FaCartPlus className="text-3xl" />
                MY CART
              </div>
            </NavLink>
          </li>
          <li className="text-xl mb-4">
            <NavLink to={"/dashboard/review"}>
              {" "}
              <div className="flex justify-start items-center gap-4 hover:text-white">
                <MdOutlineRateReview className="text-3xl" />
                ADD REVIEW
              </div>
            </NavLink>
          </li>
          <li className="text-xl mb-4">
            <NavLink to={"/dashboard/booking"}>
              {" "}
              <div className="flex justify-start items-center gap-4 hover:text-white">
                <TbBrandBooking className="text-3xl" />
                MY BOOKING
              </div>
            </NavLink>
          </li>
          <hr className="border-t-3 border-white my-4 mt-10" />
          <li className="text-xl mb-4">
            <NavLink to={"/"}>
              {" "}
              <div className="flex justify-start items-center gap-4 hover:text-white">
                <FaHome className="text-3xl" />
                HOME
              </div>
            </NavLink>
          </li>
          <li className="text-xl mb-4">
            <NavLink to={"/menu"}>
              {" "}
              <div className="flex justify-start items-center gap-4 hover:text-white">
                <IoMdMenu className="text-3xl" />
                MENU
              </div>
            </NavLink>
          </li>
          <li className="text-xl mb-4">
            <NavLink to={"/shop/salad"}>
              {" "}
              <div className="flex justify-start items-center gap-4 hover:text-white">
                <FaShop className="text-3xl" />
                SHOP
              </div>
            </NavLink>
          </li>
          <li className="text-xl mb-4">
            <NavLink to={"/contact"}>
              {" "}
              <div className="flex justify-start items-center gap-4 hover:text-white">
                <MdContactMail className="text-3xl" />
                CONTACT
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
