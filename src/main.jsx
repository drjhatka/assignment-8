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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path:"/",
      element:<Home></Home>
    },
    {
      path:'/book-details/:id',
      element:<BookDetails></BookDetails>,
      loader:()=> fetch('../../public/data.json').then(res =>res.json()).then(data=> data),
    },
    {
      path:'/booklist',
      element:<BookList></BookList>,
      loader:()=> fetch('../../public/data.json').then(res =>res.json()).then(data=> data)
    },
    {
      path:'/wishlist',
      element:<Chart></Chart>,
//      loader:()=> fetch('../../public/data.json').then(res =>res.json()).then(data=> data)
    }
  ],
    
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
