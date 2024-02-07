import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PortalPage from './pages/Portal.jsx'; 
import LoginPage from './pages/Login.jsx';
import CreateAccountPage from './pages/Creataccount.jsx';
import Rootpage from './pages/Rootpage.jsx';
import Profilepage from './pages/Profilepage.jsx';
import ProductDetailpage from './pages/ProductDetailpage.jsx';
import ResetPasswordPage from './pages/Resetpassword.jsx';
import Productpage from './pages/Productpage.jsx';
import UpdateAddressPage from './pages/UpdateAddressPage.jsx';
import Ordersuccess from './pages/Ordersuccess.jsx';
import OrderHistoryPage from './pages/OrderHistoryPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <><PortalPage /></>,
  },
  {
    path: "/sign-in",
    element: <><LoginPage /></>,
  },
  {
    path: "/sign-up",
    element: <><CreateAccountPage /></>,
  },
  {
    path: "/home",
    element: <><Rootpage /></>,
  },
  {
    path: "/products",
    element: <><Productpage /></>,
  },
  {
    path: "/profiles/:id",
    element: <><Profilepage /></>,
  },
  {
    path: "/products/:id",
    element: <><ProductDetailpage /></>,
  },
  {
    path: "/password/:id",
    element: <><ResetPasswordPage /></>,
  },
  {
    path: "/updates-address/:id",
    element: <><UpdateAddressPage /></>,
  },
  {
    path: "/ordersuccess",
    element: <><Ordersuccess /></>,
  },
  {
    path: "/orderhistory",
    element: <><OrderHistoryPage /></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    <App />

    </RouterProvider>
  </React.StrictMode>,
)
