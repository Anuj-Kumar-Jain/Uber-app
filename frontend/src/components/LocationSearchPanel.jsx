import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "H-9 Aurobindo hostel Mnit Jaipur, Malviya Nagar",
    "VLTC front Porch Mnit Jaipur, Malviya Nagar",
    "Prabha Bhawan Mnit Jaipur, Malviya Nagar",
    "Dean Gate, JLN Marg, Mnit Jaipur, Malviya Nagar",
  ];

  return (
    <div>
      {locations.map(function (element , idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 border-white active:border-black rounded-xl my-2 items-center jutify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full ">
              <i className="ri-map-pin-fill "></i>
            </h2>
            <h4 className="font-medium">{element}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
