import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Pages/Sheardd/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Main = () => {
  const loginLocation = useLocation();

  const isLogin =
    loginLocation.pathname.includes("/login") ||
    loginLocation.pathname.includes("/signUp");

  return (
    <div>
      {isLogin || <Navbar />}

      <Outlet />
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
