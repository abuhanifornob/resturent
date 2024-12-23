import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Pages/Sheardd/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Main = () => {
  const loginLocation = useLocation();
  console.log(loginLocation);
  const isLogin = loginLocation.pathname.includes("/login");
  console.log(isLogin);
  return (
    <div>
      {isLogin || <Navbar />}

      <Outlet />
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
