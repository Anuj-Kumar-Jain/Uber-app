import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ConfirmRidePopUp = (props) => {

    const [otp , setOtp] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
          params: {
            rideId: props.ride._id,
            otp: otp
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })

        if(response.status === 200){
          props.setConfirmRidePopUpPanel(false);
          props.setRidePopUpPanel(false)
          navigate('/captain-riding',{state: {ride:props.ride}})
        }
    }

  return (
    <div>
      <h5
        className="p-1 text-right w-[93%] absolute top-0"
        onClick={() => {
          props.setConfirmRidePopUpPanel(false);
        }}
      >
        <i className="text-3xl text-black-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm ride to start...</h3>

      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg mt-2">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfW0dXMgXaC3O1buHeaqH8Ro40OHcyib1UsOUkX0-qnNumQItC4EgwWHlL9FNqI8JKIac&usqp=CAU"
            alt="User Image"
          />
          <h2 className="text-lg font-medium capitalize"> {props.ride?.user.fullname.firstname} </h2>
        </div>
        <h5 className="font-semibold">2.7 KM</h5>
      </div>

      <div className="mt-5 flex gap-2 justify-between flex-col items-center">
        <div className="w-full">
          <div className="flex items-center gap-2 p-3 border-b-2">
            <i className="ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">Prabha Bhawan</h3>
              <p className="text-sm text-gray-600 -mt-1">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 p-3 border-b-2">
              <i className="ri-map-pin-fill"></i>
              <div>
                <h3 className="text-lg font-medium">3rd Gate</h3>
                <p className="text-sm text-gray-600 -mt-1">
                  {props.ride?.destination}
                </p>
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

        <div className="mt-6 w-full">
          <form
            onSubmit={submitHandler}
          >
            <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5' placeholder="Enter OTP" />
            <button
              className="mt-5 flex justify-center w-full bg-black text-white font-semibold p-2 rounded-lg"
            >
              Confirm
            </button>

            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className="mt-1 w-full bg-gray-200 text-red-700 font-semibold p-2 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
