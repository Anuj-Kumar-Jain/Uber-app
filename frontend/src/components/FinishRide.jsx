import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const FinishRide = (props) => {

  const navigate = useNavigate();

  async function endRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`,{
      
      rideId: props.ride._id

    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if(response.status === 200){
      navigate('/captain-home')
    }
  }

  return (
    <div>
      <h5
        className="p-1 text-right w-[93%] absolute top-0"
        onClick={() => {
          props.setFinishRidePanel(false);
        }} 
      >
        <i className="text-3xl text-black-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this Ride</h3>

      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg mt-2">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfW0dXMgXaC3O1buHeaqH8Ro40OHcyib1UsOUkX0-qnNumQItC4EgwWHlL9FNqI8JKIac&usqp=CAU"
            alt="User Image"
          />
          <h2 className="text-lg font-medium"> {props.ride?.user.fullname.firstname} </h2>
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
            <button
              onClick={endRide}
              className="mt-5 flex justify-center w-full bg-black text-white font-semibold p-2 rounded-lg"
            >
              Finish Ride
            </button>
        </div>
      </div>
    </div>
  )
}

export default FinishRide
