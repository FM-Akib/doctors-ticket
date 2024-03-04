import { useLoaderData } from "react-router-dom";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { BsCalendar2Date } from "react-icons/bs";
import { FcMoneyTransfer } from "react-icons/fc";



const DoctorDetails = () => {
    const doctor = useLoaderData();
    console.log(doctor);
    const {name,designation, chamber, fee, degree, availability, photo, description} = doctor;
    return (
        <div>
          
    <div className="text-gray-300 container mx-auto px-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
    
<p className="font-sans text-xl font-bold text-gray-600 max-w-5xl lg:text-2xl lg:pr-24 md:text-2xl">
            {name}
        </p>
        <div className="h-10"></div>
        <p className="max-w-2xl font-serif text-xl text-gray-500 md:text-2xl">
           {degree}
        </p>

        {/* <div className="h-32 md:h-40"></div> */}

        <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
                <p
                    className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
                    {designation}
                </p>
                
                <div className="h-6"></div>
                <p className="font-serif text-sm text-gray-500 md:pr-10">
                    {description}
                </p>
                <div className="h-8"></div>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                    <div>
                        <p className="flex items-center font-semibold text-gray-600"><FaHouseMedicalFlag className="mr-1"/> Chamber</p>
                        <div className="h-4"></div>
                        <p className="font-serif text-gray-400">
                        {chamber}
                        </p>
                    </div>
                    <div>
                        <p className="flex items-center font-semibold text-gray-600"><BsCalendar2Date className="mr-1" />Availability</p>
                        <div className="h-4"></div>
                        <p className="font-serif text-gray-400">
                           {availability}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96">
                    <img className="bg-cover" src={photo}/>
                </div>
            </div>
        </div>

  

        <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col justify-center md:col-span-2">
                <p className="flex items-center self-start  font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600 my-4">
                 <FcMoneyTransfer className="mr-1" />  Fee - {fee}
                </p>

                <button type="button" className="px-8 py-3 font-semibold rounded bg-green-800 text-gray-100">Book Appoinment</button>
                
            </div>
            
        </div>

    </div>

        </div>
    );
};

export default DoctorDetails;