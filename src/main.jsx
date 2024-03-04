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
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
