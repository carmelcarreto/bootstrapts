import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import ErrorPage from './error-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,

  },
]); 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render (
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
