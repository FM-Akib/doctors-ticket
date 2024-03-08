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
import Appointment from './Pages/Appointment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('https://doctors-ticket-backend-r3es9eekq-motimiya08.vercel.app/doctors') 
      },
      {
        path: "addDoctors",
        element: <AddDoctor></AddDoctor>
      },
      {
        path: "doctorDetails/:id",
        element: <DoctorDetails></DoctorDetails>,
        loader: ({params})=> fetch(`https://doctors-ticket-backend-r3es9eekq-motimiya08.vercel.app/doctors/${params.id}`)
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <Signup></Signup>
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>
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
