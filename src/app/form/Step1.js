import React, { useState } from "react";
import { donationData } from "../form/page";
import AutoComplete from "react-google-autocomplete";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{"text"}</div>;

const Step1 = ({
  setCurrStep,
  setStep1Data,
  data,
  step1Data,
  setCords,
  cords,
}) => {
  const mapKey = process.env.REACT_APP_API_KEY;

  const defaultProps = {
    center: {
      lat: cords?.lat,
      lng: cords?.lng,
    },
    zoom: 11,
  };
  // const handleLocationChange = (data) => {
  //   setStep1Data(data);
  // };

  // const handleProceed = () => {
  //   if (!step1Data.location.length > 1) {
  //     console.log(22);
  //     setCurrStep(2);
  //   } else {
  //     console.log(25);
  //     setStep1Data((prevData) => ({
  //       ...prevData,
  //       error: true,
  //     }));
  //   }
  // };

  const handleProceed = () => {
    if (!cords) {
      // Check if location is empty
      console.log("Location is empty");
      // setStep1Data((prevData) => ({
      //   ...prevData,
      //   error: true,
      // }));
    } else {
      console.log("Location is not empty");
      setCurrStep(2); // Proceed to the next step
    }
  };

  return (
    <div
      className="flex justify-center items-center flex-col gap-4 p-3 "
      style={{ height: "80vh" }}
    >
      <h3 className="text-center" style={{ fontSize: "24px" }}>
        HELP US WITH YOUR EXACT LOCATION
      </h3>
      <h6 className="text-center">
        This allows us to check if your area is within our coverage
      </h6>
      <div className="flex justify-center" style={{ width: "100%" }}>
        <div className="w-10/12 h-10 border-2 border-orange-500">
          {/* <input
            className="w-full h-full px-2 outline-orange-500 outline-offset-1 dark:text-black"
            placeholder="Enter your location ..."
            value={step1Data.location}
            onChange={handleLocationChange}
          /> */}
          <AutoComplete
            className="w-full h-full px-2 outline-orange-500 outline-offset-1 dark:text-black"
            apiKey={"AIzaSyCrVddibPFddYJu2M77BOwZjzR0IRLHoXA"}
            onPlaceSelected={(place) => {
              const data = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
              };
              // console.log(87, data);
              setCords(data);
              setStep1Data(data);
            }}
          />

          {cords == null && (
            <span className="text-red-500">Location is Required</span>
          )}
        </div>

        <button
          className="p-2 "
          style={{
            backgroundColor: "#f15622",
            border: "1px solid #f15622",
            color: "#fff",
            fontWeight: "600",
            fontSize: "12px",
          }}
          onClick={handleProceed}
        >
          PROCEED
        </button>
      </div>

      {cords && (
        <div style={{ height: "30vh", width: "100%" }}>
          <GoogleMapReact
            key={cords.lat}
            bootstrapURLKeys={{
              key: "AIzaSyCrVddibPFddYJu2M77BOwZjzR0IRLHoXA",
            }}
            defaultCenter={cords}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={defaultProps.lat}
              lng={defaultProps.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      )}
    </div>
  );
};
export default Step1;
