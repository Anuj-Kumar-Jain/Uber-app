import React from 'react'
import uberCarLogo from "../utils/uber-car.png";

const LookingForDriver = (props) => {
  return (
     <div>
          <h5
            className="p-1 text-right w-[93%] absolute top-0"
            onClick={() => {
              props.setVehicleFound(false);
            }}
          >
            <i className="text-3xl text-black-200 ri-arrow-down-wide-fill"></i>
          </h5>
          <h3 className="text-2xl text-center font-semibold mb-5">Looking for nearby Drivers...</h3>
    
            <div className="mt-5 flex gap-2 justify-between flex-col items-center">
                <img className="h-20" src={uberCarLogo} alt="Uber Car Logo" />
                <div className="w-full">
                    <div className="flex items-center gap-2 p-3 border-b-2">
                    <i className="ri-map-pin-line"></i>
                    <div>
                        <h3 className="text-lg font-medium">Prabha Bhawan</h3>
                        <p className="text-sm text-gray-600 -mt-1">{props.pickup}</p>
                    </div>
                    </div>
                    <div>
                    <div className="flex items-center gap-2 p-3 border-b-2">
                    <i className="ri-map-pin-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium">3rd Gate</h3>
                        <p className="text-sm text-gray-600 -mt-1">{props.destination}</p>
                    </div>
                    </div>
                    </div>
                    <div>
                    <div className="flex items-center gap-2 p-3">
                    <i className="ri-money-rupee-circle-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium">₹{props.fare[props.vehicleType]}</h3>
                        <p className="text-sm text-gray-600 -mt-1">Cash</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
          
        </div>
  )
}

export default LookingForDriver
