import React from 'react';
import uberCarLogo from "../utils/uber-car.png";
import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-1 top-1 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-home-4-fill"></i>
        </Link>
      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
                            <img className="h-12" src={uberCarLogo} alt="Uber Car Logo" />
                            <div className='text-right'>
                                <h2 className='text-lg font-medium'>Sourabh</h2>
                                <h4 className='text-xl font-semibold -mt-1 -mb-1'>RJ14 AJ 9192</h4>
                                <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                            </div>
                        </div>
        
                        <div className="mt-5 flex gap-2 justify-between flex-col items-center">
                            <div className="w-full">
                                
                                <div>
                                <div className="flex items-center gap-2 p-3 border-b-2">
                                <i className="ri-map-pin-fill"></i>
                                <div>
                                    <h3 className="text-lg font-medium">3rd Gate</h3>
                                    <p className="text-sm text-gray-600 -mt-1">Jaipur Junction, Jaipur</p>
                                </div>
                                </div>
                                </div>
                                <div>
                                <div className="flex items-center gap-2 p-3">
                                <i className="ri-money-rupee-circle-fill"></i>
                                <div>
                                    <h3 className="text-lg font-medium">₹193.30</h3>
                                    <p className="text-sm text-gray-600 -mt-1">Cash</p>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
        <button className='mt-5 w-full bg-black text-white font-semibold p-2 rounded-lg'>Make a payment</button>
      </div>
    </div>
  )
}

export default Riding
