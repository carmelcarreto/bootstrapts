import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ErrorPage from "./components/error-page";
import Contact from './routes/Contact';
import Root from './routes/Root';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]); 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render (
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
