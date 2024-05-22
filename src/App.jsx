

import Navbar from "./components/Navbar";
import "./index.css";
import { Outlet } from "react-router-dom";
// import Home from "./components/Home";

  function App (){
    return <>
    <div className='w-10/12 mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      
    </div>
    </>
  }
  export default App