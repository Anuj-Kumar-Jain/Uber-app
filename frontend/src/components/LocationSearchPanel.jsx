import React from "react";

const LocationSearchPanel = ({suggestions , setVehiclePanel , setPanelOpen , setPickup , setDestination , activeField}) => {
  
  const handleSuggestionClick = (suggestion) => {
    if(activeField === 'pickup'){
      setPickup(suggestion)
    }
    else if(activeField === 'destination'){
      setDestination(suggestion);
    }
  }

  return (
    <div>
      {suggestions.map(function (element , idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              handleSuggestionClick(element)
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
