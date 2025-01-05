import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import Contact from "../Pages/Contact/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import MenuUpdate from "../Pages/Dashboard/MenuUpdate/MenuUpdate";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "shop/:category",
        element: <Shop />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivetRoute>
            {" "}
            <Secret />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <MenuUpdate></MenuUpdate>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          // fetch(`http://localhost:5000/menu/${params.id}}`),
          fetch(`http://localhost:5000/menu/${params.id}`).then((res) =>
            res.json()
          ),
      },
    ],
  },
]);
