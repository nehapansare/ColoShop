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
import Designer from './components/Designer/Designer';
import DesignerDetail from './components/DesignerDetail/DesignerDetail';
import Payment from './components/Payment/Payment';
import OrderSummary from '../src/components/OrderSummary/OrderSummary';
import Blog from '../src/views/Blog/Blog'
import BlogDetail from './components/BlogDetail/BlogDetail';

 const root = ReactDOM.createRoot(document.getElementById('root'));

 const router=createBrowserRouter([
  {
    path:"/",
    element:< Home/>
  },
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
  {
    path:"/designer",
    element:<Designer/>
  },
  {
    path:"/designerdetail/:id",
    element:<DesignerDetail/>
  },
  {
    path:"/payment",
    element:<Payment/>
  },
  {
    path:"/ordersummary",
    element:<OrderSummary/>
  },
  {
    path:"/blog",
    element:<Blog/>
  },
  {
    path:"/blogdetail/:id",
    element:<BlogDetail/>
  },
 ])
root.render( 
<div>
  <RouterProvider router={router} /> 
  </div>
);
