import Marquee from 'react-fast-marquee';
import h1 from '../assets/hospitsLogo/image.png'
import h2 from '../assets/hospitsLogo/h2.png'
import h3 from '../assets/hospitsLogo/h3.jpg'
import h4 from '../assets/hospitsLogo/h4.jpg'
import h5 from '../assets/hospitsLogo/h5.png'
import h6 from '../assets/hospitsLogo/h7.jpg'
import h7 from '../assets/hospitsLogo/h6.jpg'
import h8 from '../assets/hospitsLogo/h8.png'

const Partners = () => {
    return (
        <>
        <h1 className="text-orange-500 bg-[#F3F4F6] text-center text-2xl font-bold leadi sm:text-2xl p-2">Partners Hospital</h1>
       <Marquee className="h-24 bg-white">
               <div className="h-20 p-2 mr-12">
                <img className="h-full" src={h1} alt=""/>
               </div>
               <div className="h-20 p-2 mr-12">
                <img className="h-full" src={h2} alt=""/>
               </div>
               <div className="h-20 p-2 mr-12">
                <img className="h-full" src={h3} alt=""/>
               </div>
               <div className="h-20 p-2 mr-12">
                <img className="h-full" src={h4} alt=""/>
               </div>
               <div className="h-20 p-2 mr-12">
                <img className="h-full" src={h5} alt=""/>
               </div>
               <div className="h-20 p-2 mr-12">
                <img className="h-full" src={h6} alt=""/>
               </div>
               <div className="h-20 p-2 mr-12">
                <img className="h-full" src={h7} alt=""/>
               </div>
               <div className="h-20 p-2 mr-12">
                <img className="h-full" src={h8} alt=""/>
               </div>
       </Marquee>
       </>
    );
};

export default Partners;