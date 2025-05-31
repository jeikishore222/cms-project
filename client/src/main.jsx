import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Develop from './pages/Develop';
import Dashboard from './pages/Dashboard';
import Food from './pages/Food';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/develop',
    element: <Develop />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/food',
    element: <Food />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);