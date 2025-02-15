import React from "react";
import uberCarLogo from "../utils/uber-car.png";
import uberAutoLogo from "../utils/uber-auto.webp";
import uberMotoLogo from "../utils/uber-bike.webp";
import "remixicon/fonts/remixicon.css";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-right w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-3xl text-black-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('car');
        }}
        className="flex p-3 border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between"
      >
        <img className="h-12" src={uberCarLogo} alt="" />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-lg">
            UberGo{" "}
            <span>
              <i className="ri-user-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-normal text-xs">Affordable compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.car}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('moto');
        }}
        className="flex p-3 border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between"
      >
        <img className="h-12" src={uberMotoLogo} alt="" />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-lg">
            Moto{" "}
            <span>
              <i className="ri-user-fill">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs">Affordable motorcycle rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.moto}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('auto');
        }}
        className="flex p-3 border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between"
      >
        <img className="h-12" src={uberAutoLogo} alt="" />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-lg">
            UberAuto{" "}
            <span>
              <i className="ri-user-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs">Affordable auto rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
