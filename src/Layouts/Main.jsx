import { Outlet } from "react-router-dom";

import Footer from "../Pages/Sheardd/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
