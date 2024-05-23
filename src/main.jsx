import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import BookList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import Chart from "./components/Chart";
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,

    children:[{
      path:"/",
      element:<Home></Home>,
      errorElement:<ErrorPage></ErrorPage>
    },
    {
      path:'/book-details/:id',
      element:<BookDetails></BookDetails>,
      errorElement:<ErrorPage></ErrorPage>,
      loader:()=> fetch('../../public/data.json').then(res =>res.json()).then(data=> data),
    },
    {
      path:'/booklist',
      element:<BookList></BookList>,
      errorElement:<ErrorPage></ErrorPage>,
      loader:()=> fetch('../../public/data.json').then(res =>res.json()).then(data=> data)
    },
    {
      path:'/wishlist',
      element:<Chart></Chart>,
      errorElement:<ErrorPage></ErrorPage>,
  }
  ],
    
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
