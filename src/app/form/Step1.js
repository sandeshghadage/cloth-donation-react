import React, { useState } from "react";
import { donationData } from "../form/page";
import AutoComplete from "react-google-autocomplete";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <svg
    className="w-6 h-6 text-red-500"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fill-rule="evenodd"
      d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
      clip-rule="evenodd"
    />
  </svg>
);
const Step1 = ({
  setCurrStep,
  setStep1Data,
  data,
  step1Data,
  setCords,
  cords,
  setLocationError,
  locationError,
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
      setLocationError(true);
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
      className="flex items-center flex-col gap-4 p-3  pt-5 md:pt-20"
      style={{ height: "70vh" }}
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
            style={{ border: "none", outline: "2px solid #392993" }}
            className="w-full h-full px-2 dark:text-black"
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

          {cords == null && locationError && (
            <span style={{ color: "#db233e" }}>Location is Required</span>
          )}
        </div>

        <button
          className="p-2 "
          style={{
            // backgroundColor: "#392993",
            backgroundColor: "#392993",
            border: "1px solid #392993",
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
