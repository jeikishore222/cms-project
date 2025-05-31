import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
import SignIn from './pages/SignIn.jsx'
import Signup from './pages/Signup.jsx'
import Develop from './pages/Develop.jsx'
import Dashboard from './pages/dashboard.jsx'
import Food from './pages/Food'
const router=createBrowserRouter([
  {
    path : '/',
    element:<Home/>
  },
  {
    path : '/login',
    element:<SignIn/>
  },
  {
    path : '/logout',
    element:<Signup/>
  },
  {
    path : '/develop',
    element:<Develop/>
  },
  {
    path : '/dashboard',
    element:<Dashboard/>
  },
  {
    path : '/food',
    element:<Food/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)