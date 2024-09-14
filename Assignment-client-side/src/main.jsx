import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';

import User from './Components/Users/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
        path: '/addemployee',
        element:<User></User>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
