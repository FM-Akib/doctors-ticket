import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import AddDoctor from './Pages/AddDoctor';
import DoctorDetails from './Pages/DoctorDetails';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Authprovider from './Authentication/Authprovider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/doctors') 
      },
      {
        path: "addDoctors",
        element: <AddDoctor></AddDoctor>
      },
      {
        path: "doctorDetails/:id",
        element: <DoctorDetails></DoctorDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/doctors/${params.id}`)
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <Signup></Signup>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>,
)
