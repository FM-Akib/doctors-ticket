import { Link } from 'react-router-dom';
import heroImg from '../assets/Home_Head.png';

const Hero = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-2xl font-bold leadi sm:text-6xl">Book your
                    <span className="text-amber-600 ml-1">Doctors Appointment </span>
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">Find your doctor easily with a minimum of effort. 
                    <br  className="hidden md:inline lg:hidden" />We have kept everything organised for you.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <Link to="/appointment" className="px-8 py-3 text-lg font-semibold rounded bg-amber-600 text-gray-50">Appoinment</Link>
                    <Link to="/signup" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Sign Up</Link>
                </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src={heroImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    </section>
    );
};

export default Hero;
