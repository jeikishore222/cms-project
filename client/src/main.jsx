import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
import SignIn from './pages/SignIn.jsx'
const router=createBrowserRouter([
  {
    path : '/',
    element:<Home/>
  },
  {
    path : '/login',
    element:<SignIn/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
