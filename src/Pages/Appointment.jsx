import Swal from 'sweetalert2'
import '../App.css'

const Appointment = () => {


    const handleAddDoctor = (e) =>{
        // e.preventDefault();
        // const form = e.target;
        // const name = form.name.value;
        // const designation = form.designation.value;
        // const chamber = form.chamber.value;
        // const fee = form.fee.value;
        // const degree = form.degree.value;
        // const availability = form.availability.value;
        // const photo = form.photo.value;
        // const description = form.description.value;
        // const doctor = {name, designation, chamber, fee, degree, availability, photo, description}
        // // console.log(doctor)
    
        // fetch(`http://localhost:5000/doctors`,{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(doctor)
        // })
        // .then(res=>res.json())
        // .then(data =>{
        //     console.log(data);
        //     if(data.acknowledged){
        //         form.reset();
        //         Swal.fire({
        //             position: "top-center",
        //             icon: "success",
        //             title: "Doctor Added Successful!",
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
        //     }
        // })
    
        
       }


    return (
        <div >
        <div className="my-8 flex flex-col justify-center items-center ">
     <h2 className="w-full text-center font-bold text-2xl mb-1">Book Your Appointment</h2>
    <p className=" text-center w-1/2 text-gray-500 ">Wherever the art of Medicine is loved, there is also a love of Humanity.</p>
            </div>


         
         <form onSubmit={handleAddDoctor} className="form-bg-appointment bg-cover object-bottom px-16 py-8 mb-6 w-3/4 mx-auto rounded-md">

            <div className=" w-full flex">
                <div className="w-1/2 p-4">
                <label className="font-semibold p-1 text-gray-600">Patient Name</label>
                <input type="text" name="name" placeholder="Enter name here" className="input input-bordered w-full " />
                </div>

                <div className="w-1/2 p-4">
                <label className="font-semibold p-1 text-gray-600">Age</label>
                <input type="text" name="designation" placeholder="Enter age here" className="input input-bordered w-full " />
                </div> 
            </div>

            <div className=" w-full flex">

            <div className="w-1/2 p-4">
                <label className="font-semibold p-1 text-gray-600">Complain</label>
                <input type="text" name="fee" placeholder="Write complain here" className="input input-bordered w-full " />
                </div> 

                <div className="w-1/2 p-4 flex items-center ">
                <label className="font-semibold p-1 text-gray-600 mr-4">Gender</label>
                <div className="flex items-center">
                <div className="flex items-center mr-6 text-gray-600">
                <input type="radio" name="radio-4" className="radio radio-accent mr-1" checked />Male
                </div>
                <div className="flex items-center text-gray-600">
                <input type="radio" name="radio-4" className="radio radio-accent mr-1" />Female
                </div>
                </div>

                </div>
                
            </div>

            <div className=" w-full flex">
                <div className="w-1/2 p-4">
                <label className="font-semibold p-1 text-gray-600">Mobile</label>
                <input type="text" name="degree" placeholder="Enter mobile here" className="input input-bordered w-full " />
                </div>

                <div className="w-1/2 p-4 flex items-center ">
                <label className="font-semibold p-1 text-gray-600 mr-4">Fee</label>
                <div className="flex items-center">
                <div className="flex items-center mr-6 text-gray-600">
                <input type="radio" name="radio-4" className="radio radio-accent mr-1" checked />Due
                </div>
                <div className="flex items-center text-gray-600">
                <input type="radio" name="radio-4" className="radio radio-accent mr-1" />Paid
                </div>
                </div>

                </div>
            </div>
          
            <div className="flex justify-center items-center">
            <button type="submit" className="w-2/6  bg-red-600 tracking-wider 	  hover:bg-white  hover:text-gray-600 text-white font-bold px-4 py-2 rounded-md">
           Book Appointment
           </button>
           </div>

         </form>





            
        </div>
    );
};

export default Appointment;