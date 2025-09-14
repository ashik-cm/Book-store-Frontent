import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/home/Home';
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/books/Cart";
import Checkout from "../pages/books/Checkout";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import ManageBooks from "../pages/dashboard/managebooks/ManageBooks";
import Addbook from "../pages/dashboard/addBooks/Addbook";
import UpdateBook from "../pages/dashboard/editbook/UpdateBook";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/orders',
        element: <PrivateRoute>
          <OrderPage />
        </PrivateRoute>
        ,
      },
      {
        path: '/about',
        element: <div>About</div>,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <PrivateRoute>
          <Checkout />
        </PrivateRoute>
      },
      {
        path: '/books/:id',
        element: <SingleBook />
      },



    ],
  },
  {
    path:'/admin',
    element : <AdminLogin/>
  },
  {
    path:'/dashboard',
    element: <AdminRoute><DashboardLayout/></AdminRoute>,
    children:[
      {
        path:"",
        element:<AdminRoute><Dashboard/></AdminRoute>
      },
      {
        path:'add-new-book',
        element:<AdminRoute><Addbook/></AdminRoute>
      },
      {
        path:'edit-book/:id',
        element:<AdminRoute><UpdateBook/></AdminRoute>
      },
      {
        path:'manage-books',
        element:<AdminRoute><ManageBooks/></AdminRoute>
      },
    ]
  }
]);

export default router;
