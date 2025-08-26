import React from 'react'
import heroImage from '../assets/heroImage.png'
import ServicesCards from '../components/ServicesCards'
import { assets } from '../assets/assets'
import { Headset, PiggyBank, CalendarCheck } from "lucide-react";
import { MdManageHistory } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";

const Home = () => {
  return (
    <>
    {/* Hero */}
    <div className="h-[500px] w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}>
      
      <div className="py-8 px-8 absolute inset-0 flex flex-col items-start justify-center">
        <h2 className='text-white font-bold text-6xl'>Your Rental Business <br /> Managed Better</h2>
        <p className='text-white py-4'>Trained virtual Assistant & Full-Service <br/> out Sourcing your rentals.</p>
        <button
          type="button"
          className="bg-[#157682] text-white border border-[#157682] md:inline hidden text-sm active:scale-95 transition-all w-40 h-11 rounded-md"
        >
          Get a Free Consultation
        </button>
      </div>
    </div>
    {/* Hero */}
    {/* Our Services */}
    <div className='bg-[#f1f6f2] px-8 py-8'>
      <h2 className='font-bold text-6xl text-center mb-6'>Our Services</h2>
      <p className="mb-6 text-sm text-gray-500 text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <ServicesCards heading="24/7 Guest Communication" icon={<Headset className="text-white w-4 h-4"/>} imageUrl="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"/>
        <ServicesCards heading="Revenue Optimization" icon={<FaDollarSign className="text-white w-4 h-4"/>}/>
        <ServicesCards heading="End-to-End Management" icon={<MdManageHistory className="text-white w-4 h-4"/>} imageUrl="https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4"/>
        <ServicesCards heading="Multi-Platform Support" icon={<CalendarCheck className="text-white w-4 h-4"/>}/>
      </div>
      {/* Cards */}
    </div>
    {/* Our Services */}

    {/* Our Services */}
    <div className='bg-white px-8 py-8'>
      <h2 className='font-bold text-6xl text-center mb-6'>Why Choose Us</h2>
      <p className="mb-6 text-sm text-gray-500 text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
        {/* <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex items-center justify-center'>
            <img src={assets.Why} alt="why" className='w-[100px] h-[100px] lg:ml-32' />
          </div>
          
          <div className="flex flex-col gap-6 justify-between">
      <div className="flex gap-8 items-center">
        <div className="bg-[#13767c] rounded-full w-10 h-10 flex items-center justify-center">
          <Headset className="text-white w-5 h-5" />
        </div>
        <h1 className="font-bold">24/7 Support</h1>
      </div>

      <div className="flex gap-8 items-center">
        <div className="bg-[#13767c] rounded-full w-10 h-10 flex items-center justify-center">
          <PiggyBank className="text-white w-5 h-5" />
        </div>
        <h1 className="font-bold">Cost Saving</h1>
      </div>

      <div className="flex gap-8 items-center">
        <div className="bg-[#13767c] rounded-full w-10 h-10 flex items-center justify-center">
          <CalendarCheck className="text-white w-5 h-5" />
        </div>
        <h1 className="font-bold">Increased Bookings</h1>
      </div>
    </div>
        
        </div>  */}
    </div>
    {/* Our Services */}
    </>
  )
}

export default Home
