import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import DoctorCard from "../components/DoctorCard";

const Home = () => {
    const doctors = useLoaderData();
    
    return (
        <div>
            <Hero></Hero>
            <Partners></Partners>

            <div className="bg-gray-100 px-16 py-8 grid lg:grid-cols-2 justify-center items-center gap-4 mx-auto">
                {
                    doctors.map(adoctor=> <DoctorCard key={adoctor._id}
                    doctor={adoctor}
                    ></DoctorCard>)
                }
            </div>

            
        </div>
    );
};

export default Home;