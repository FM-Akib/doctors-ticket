import Swal from 'sweetalert2'
const AddDoctor = () => {

   const handleAddDoctor = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const designation = form.designation.value;
    const chamber = form.chamber.value;
    const fee = form.fee.value;
    const degree = form.degree.value;
    const availability = form.availability.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const doctor = {name, designation, chamber, fee, degree, availability, photo, description}
    // console.log(doctor)

    fetch(`http://localhost:5000/doctors`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(doctor)
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        if(data.acknowledged){
            form.reset();
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Doctor Added Successful!",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })

   }


    return (
        <div >
        <div className="my-8 flex flex-col justify-center items-center ">
     <h2 className="w-full text-center font-bold text-2xl mb-1">Add a doctor</h2>
    <p className=" text-center w-1/2 text-gray-500 ">The great doctors all got their education off dirt pavements and
poverty – not marble floors and foundations. Martin H. Fischer (1879 –
1962).</p>
            </div>


         
         <form onSubmit={handleAddDoctor} className="bg-gradient-to-r from-green-500 to-orange-500 px-16 py-8 mb-6 w-3/4 mx-auto rounded-md">

            <div className=" w-full flex">
                <div className="w-1/2 p-4">
                <label className="font-semibold p-1 text-white">Name</label>
                <input type="text" name="name" placeholder="Enter name here" className="input input-bordered w-full " />
                </div>

                <div className="w-1/2 p-4">
                <label className="font-semibold p-1 text-white">Designation</label>
                <input type="text" name="designation" placeholder="Enter designation here" className="input input-bordered w-full " />
                </div> 
            </div>

            <div className=" w-full flex">
                <div className="w-1/2 p-4">
                <label className="font-semibold p-1 text-white">Chamber</label>
                <input type="text" name="chamber" placeholder="Enter chamber here" className="input input-bordered w-full " />
                </div>

                <div className="w-1/2 p-4">
                <label className="font-semibold p-1 text-white">Appointment fee</label>
                <input type="text" name="fee" placeholder="Enter fee here" className="input input-bordered w-full " />
                </div> 
            </div>

            <div className=" w-full flex">
                <div className="w-1/2 p-4">
                <label className="font-semibold p-1 text-white">Degree</label>
                <input type="text" name="degree" placeholder="Enter degree here" className="input input-bordered w-full " />
                </div>

                <div className="w-1/2 p-4">
                <label className="font-semibold p-1 text-white">Availability</label>
                <input type="text" name="availability" placeholder="Enter availability here" className="input input-bordered w-full " />
                </div> 
            </div>
            <div className=" w-full ">
                <div className="w-full p-4">
                <label className="font-semibold p-1 text-white">Photo</label>
                <input type="text" name="photo" placeholder="Enter photo url here" className="input input-bordered w-full " />
                </div>

                <div className="w-full p-4">
                <label className="font-semibold p-1 text-white">Description</label>
                <textarea type="textarea" name="description" placeholder="Enter description here" className="input input-bordered w-full " />
                </div> 
            </div>

            <button type="submit" className="w-full bg-red-600 tracking-wider	  hover:bg-white  hover:text-gray-600 text-white font-bold px-4 py-2 rounded-md">
           ADD DOCTOR
           </button>


         </form>





            
        </div>
    );
};

export default AddDoctor;