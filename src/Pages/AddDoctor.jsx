
const AddDoctor = () => {
    return (
        <div >
        <div className="my-8 flex flex-col justify-center items-center ">
     <h2 className="w-full text-center font-bold text-2xl mb-1">Add a doctor</h2>
    <p className=" text-center w-1/2 text-gray-500 ">The great doctors all got their education off dirt pavements and
poverty – not marble floors and foundations. Martin H. Fischer (1879 –
1962).</p>
            </div>


         
         <form className="bg-gradient-to-r from-green-500 to-orange-500 px-16 py-8 w-3/4 mx-auto rounded-md">

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
                <input type="text" name="name" placeholder="Enter photo url here" className="input input-bordered w-full " />
                </div>

                <div className="w-full p-4">
                <label className="font-semibold p-1 text-white">Description</label>
                <textarea type="textarea" name="description" placeholder="Enter description here" className="input input-bordered w-full " />
                </div> 
            </div>

            <button type="button" className="w-full bg-red-600  hover:bg-white  hover:text-gray-600 text-white font-bold px-4 py-2 rounded-md">
           ADD DOCTOR
           </button>


         </form>





            
        </div>
    );
};

export default AddDoctor;