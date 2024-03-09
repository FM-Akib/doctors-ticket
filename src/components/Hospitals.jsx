import c1 from '../assets/h1.png';
import c2 from '../assets/h2.png';
import c3 from '../assets/h3.png';
import c4 from '../assets/h4.png';
const Hospitals = () => {
  return (
    <div className="w-[1100px] mx-auto py-10 ">

<div className="carousel w-full h-[400px]">
  <div id="slide1" className=" carousel-item relative w-full">
    <img src={c1} className="w-full object-cover rounded-xl" />

    <div className="absolute rounded-xl h-full flex  items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

    <div className="w-1/3 space-y-2 pl-14">
      <h1 className='text-5xl font-bold text-white'>Hospitals All are one roof.</h1>
      <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi porro necessitatibus dolorum esse a voluptate recusandae blanditiis, quidem odit.</p>
    
    
    <button className="btn btn-active btn-secondary mr-3">Appointment</button>
    <button className="btn btn-outline btn-secondary">Hospital</button>
    </div>

    </div>

    <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0">
      <a href="#slide4" className="btn bg-orange-600 text-white btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className=" carousel-item relative w-full">
    <img src={c2} className="w-full object-cover rounded-xl" />

    <div className="absolute rounded-xl h-full flex  items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

    <div className="w-1/3 space-y-2 pl-14">
      <h1 className='text-5xl font-bold text-white'>Hospitals All are one roof.</h1>
      <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi porro necessitatibus dolorum esse a voluptate recusandae blanditiis, quidem odit.</p>
    
    
    <button className="btn btn-active btn-secondary mr-3">Appointment</button>
    <button className="btn btn-outline btn-secondary">Hospital</button>
    </div>

    </div>

    <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0">
      <a href="#slide1" className="btn bg-orange-600 text-white btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className=" carousel-item relative w-full">
    <img src={c3} className="w-full object-cover rounded-xl" />

    <div className="absolute rounded-xl h-full flex  items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

    <div className="w-1/3 space-y-2 pl-14">
      <h1 className='text-5xl font-bold text-white'>Hospitals All are one roof.</h1>
      <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi porro necessitatibus dolorum esse a voluptate recusandae blanditiis, quidem odit.</p>
    
    
    <button className="btn btn-active btn-secondary mr-3">Appointment</button>
    <button className="btn btn-outline btn-secondary">Hospital</button>
    </div>

    </div>

    <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0">
      <a href="#slide2" className="btn bg-orange-600 text-white btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className=" carousel-item relative w-full">
    <img src={c4} className="w-full object-cover rounded-xl" />

    <div className="absolute rounded-xl h-full flex  items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

    <div className="w-1/3 space-y-2 pl-14">
      <h1 className='text-5xl font-bold text-white'>Hospitals All are one roof.</h1>
      <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi porro necessitatibus dolorum esse a voluptate recusandae blanditiis, quidem odit.</p>
    
    
    <button className="btn btn-active btn-secondary mr-3">Appointment</button>
    <button className="btn btn-outline btn-secondary">Hospital</button>
    </div>

    </div>

    <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0">
      <a href="#slide3" className="btn bg-orange-600 text-white btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 



    </div>

    </div>
  )
}

export default Hospitals