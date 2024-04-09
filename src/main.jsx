import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root/Root';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';

import Review from './components/Review/Review';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';

import Service from './components/Service/Service';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  children:[
    {
      path:"/",
      element:<Home></Home>,

    },
    {
      path:"/about",
      element:<About></About>,

    },
    {
      path:"/service",
     
      element:<PrivateRoute><Service></Service></PrivateRoute>,

    },


    {
      path:"/review",
      element:<Review></Review>,

    },
    {
      path:"/login",
      element:<LogIn></LogIn>,

    }
    ,{
      path:"/register",
      element:<Register></Register>,
    },
    
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
  <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
