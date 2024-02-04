import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PortalPage from './components/Portal.jsx';
import LoginPage from './components/Login.jsx';
import CreateAccountPage from './components/Creataccount.jsx';
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
