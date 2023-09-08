import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Layout/Register/Register";
import Login from "../Layout/Login/Login";
import Checkout from "../Cashin/Checkout/Checkout";
import Billing from "../Layout/Billing/Billing";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import Services from "../Pages/Home/Services/Services";
import Orders from './../Pages/Orders/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
    ],
  },
  {
    path: '/',
    element:<Billing></Billing> ,
    children: [
        
      {
        path: "/checkout/:id",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: () => fetch(`http://localhost:3000/orders`)
      }
    ]
  }
]);
export default router;
