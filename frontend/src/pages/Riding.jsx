import React from "react";
import uberCarLogo from "../utils/uber-car.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import LiveTracking from "../components/LiveTracking";

const Riding = () => {

  const location = useLocation();
  const {ride} = location.state || {}
  const {socket} = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on('ride-ended' , () => {
    navigate('/home');
  })

  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-1 top-1 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-4-fill"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
        {/* <LiveTracking/> */}
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img className="h-12" src={uberCarLogo} alt="Uber Car Logo" />
          <div className="text-right">
            <h2 className="text-lg font-medium">{ride?.captain.fullname.firstname}</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">{ride?.captain.vehicle.plate}</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="mt-5 flex gap-2 justify-between flex-col items-center">
          <div className="w-full">
            <div>
              <div className="flex items-center gap-2 p-3 border-b-2">
                <i className="ri-map-pin-fill"></i>
                <div>
                  <h3 className="text-lg font-medium">3rd Gate</h3>
                  <p className="text-sm text-gray-600 -mt-1">
                    {ride?.destination}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 p-3">
                <i className="ri-money-rupee-circle-fill"></i>
                <div>
                  <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
                  <p className="text-sm text-gray-600 -mt-1">Cash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-5 w-full bg-black text-white font-semibold p-2 rounded-lg">
          Make a payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
