import React from 'react'
import uberCarLogo from "../utils/uber-car.png";

const WaitForDriver = (props) => {
  return (
    <div>
              <h5
                className="p-1 text-right w-[93%] absolute top-0"
                onClick={() => {
                  props.waitingForDriver(false);
                }}
              >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
              </h5>
                
                <div className='flex items-center justify-between'>
                    <img className="h-12" src={uberCarLogo} alt="Uber Car Logo" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                        <h1 className='text-lg font-semibold'> {props.ride?.otp} </h1>
                    </div>
                </div>

                <div className="mt-5 flex gap-2 justify-between flex-col items-center">
                    <div className="w-full">
                        <div className="flex items-center gap-2 p-3 border-b-2">
                        <i className="ri-map-pin-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">Prabha Bhawan</h3>
                            <p className="text-sm text-gray-600 -mt-1">{props.ride?.pickup}</p>
                        </div>
                        </div>
                        <div>
                        <div className="flex items-center gap-2 p-3 border-b-2">
                        <i className="ri-map-pin-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">3rd Gate</h3>
                            <p className="text-sm text-gray-600 -mt-1">{props.ride?.destination}</p>
                        </div>
                        </div>
                        </div>
                        <div>
                        <div className="flex items-center gap-2 p-3">
                        <i className="ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
                            <p className="text-sm text-gray-600 -mt-1">Cash</p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
              
            </div>
  )
}

export default WaitForDriver
