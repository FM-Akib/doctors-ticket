import { useLoaderData } from "react-router-dom";

const DoctorDetails = () => {
    const doctor = useLoaderData();
    console.log(doctor);
    const {_id,name,designation, chamber, fee, degree, availability, photo, description} = doctor;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default DoctorDetails;