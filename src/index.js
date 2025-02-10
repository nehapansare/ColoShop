import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact'
import Shop from './components/Shop/Shop'
import CartDetail from './components/CartDetail/CartDetail';
import NavbarCart from './components/CartDetail/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './views/Login/Login';
import SignUp from './views/Sign/Signup';


 const root = ReactDOM.createRoot(document.getElementById('root'));

 const router=createBrowserRouter([
  {
    path:"/",
    element:< Home/>
  },
  {
    path:"/contact",
    element:< Contact/>
  },
  {
    path:"/shop",
    element:< Shop/>
  },
  {
    path:"/cartdetail/:id",
    element:< CartDetail/>
  },
  {
    path:"/navbarcart",
    element:< NavbarCart/>
  },
  {
    path:"/login",
    element:< Login/>
  },
  {
    path:"/signup",
    element:< SignUp/>
  },
 
 ])
root.render( 
<div>
  <RouterProvider router={router} /> 
  </div>
);
