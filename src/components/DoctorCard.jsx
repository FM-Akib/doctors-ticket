import { FaEye } from "react-icons/fa";
import { FaSquarePen } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { CiMedicalClipboard } from "react-icons/ci";
import { Link } from "react-router-dom";




const DoctorCard = ({doctor}) => {
    const {_id,name,designation, chamber, fee, degree, availability, photo, description} =  doctor;
	// console.log(doctor);
    return (
        <>
    <div className="rounded-md grid grid-col-3 shadow-md p-8 sm:flex sm:space-x-6 bg-white text-gray-800">
	<div className="col-span-1 flex-shrink-0 w-full  mb-6 lg:h-44 sm:h-32 sm:mb-0">
		<img src={photo} alt="" className="object-cover object-center w-full h-full rounded bg-gray-200" />
	</div>


	<div className=" space-y-4 col-span-2  w-full">

        <div className="flex flex-row  justify-between w-full">
		<div>
			<h2 className="text-xl font-semibold">{name}</h2>
			<span className="text-sm text-orange-600 font-semibold">{degree}</span>

			<span className="flex items-center space-x-2">
			<CiMedicalClipboard />
				<span className="text-gray-600">{designation}</span>
			</span>
			<span className="flex items-center space-x-2">
			<MdEventAvailable />
				<span className="text-gray-600 text-xs">{availability}</span>
			</span>
		</div>


        <div className="flex flex-col">
          <Link to={`/doctorDetails/${_id}`}><button className="btn bg-white border-none"><FaEye /></button></Link>  
            <button className="btn bg-white border-none"><FaSquarePen /></button>
            <button className="btn bg-white border-none"><MdDeleteOutline /></button>
        </div>
        </div>
        
	</div>
   
</div>
        </>
    );
};

export default DoctorCard;