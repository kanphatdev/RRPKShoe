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
    element: <><Rootpage /></>,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    <App />

    </RouterProvider>
  </React.StrictMode>,
)
