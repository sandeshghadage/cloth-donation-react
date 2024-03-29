import React, { useState } from "react";
import { donationData } from "./page";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// interface Step2Props {
//   setCurrStep: React.Dispatch<React.SetStateAction<number>>;
//   setStep2Data: React.Dispatch<React.SetStateAction<donationData>>;
//   data: donationData;
//   step2Data: donationData;
// }

const Step2 = ({ setCurrStep, setStep2Data, step2Data }) => {
  const [optionData, setOptionData] = useState([
    {
      name: "Light Pickup",
      cost: "FREE",
      isChecked: false,
    },
    {
      name: "Heavy Pickup",
      cost: "FREE",
      isChecked: false,
    },
  ]);

  // const handleLocationselect = (value) => {
  //   setStep2Data((prevData) => ({
  //     ...prevData,
  //     vehicalType: value.name,
  //   }));
  // };

  // const handleProceed = () => {
  //   setCurrStep(3);
  // };

  const handleProceed = () => {
    const found = step2Data.some((item) => item.isChecked == true);
    if (!found) {
      // setStep2Data((prevData) => ({
      //   ...prevData,
      //   error: true,
      // }));
      toast.error("Please select vehicle before proceeding");
    } else {
      console.log("Location is not empty");
      setCurrStep(3);
    }
  };

  function handleBack() {
    setCurrStep(1);
  }
  const handleCheck = (clickedItem) => {
    const updatedData = step2Data.map((item) => {
      if (item.name === clickedItem.name) {
        return {
          ...item,
          isChecked: true,
        };
      } else {
        return {
          ...item,
          isChecked: false,
        };
      }
    });
    setStep2Data(updatedData);
  };
  return (
    <div
      className="flex justify-center items-center flex-col gap-4 p-4 my-5 my-md-0"
      // style={{ height: "80vh" }}
    >
      <ToastContainer />
      <h3 className="text-center" style={{ fontSize: "24px" }}>
        HOW DO YOU WISH TO DONATE?
      </h3>
      <h6 className="text-center">
        Options shown as per your location: Pune, Maharashtra, India
      </h6>
      <div
        className="flex justify-center border p-4 flex-col"
        style={{
          width: "100%",
          backgroundColor: "#f6f6f6",
          borderRadius: "6px",
        }}
      >
        {" "}
        <div
          className="text-center uppercase mb-4 dark:text-black"
          style={{ fontSize: "16px", fontWeight: "600" }}
        >
          PICKUP FROM DOORSTEP
        </div>
        <div className="flex flex-col gap-3">
          {step2Data?.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#e6e4e4",
                cursor: "pointer",
                border: "1px solid #cccbcb",
                display: "flex",
                justifyContent: "space-between",
              }}
              className="p-4"
              onClick={() => handleCheck(item)}
            >
              <div className="flex items-center gap-2">
                {item.isChecked ? (
                  <div
                    // onClick={() => handleCheck(item.name)}
                    style={{ width: "22px", height: "22px" }}
                  >
                    <img
                      src="/check2.jpeg"
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 dark:text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                    />
                  </svg>
                )}
                <div
                  className="dark:text-black"
                  style={{ fontSize: "15px", fontWeight: "600" }}
                >
                  {item.name}
                </div>
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "green",
                }}
              >
                {item.cost}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between gap-8">
        <button
          onClick={handleBack}
          className=" px-6 py-2 bg-gray-400 text-white rounded-md"
        >
          Back
        </button>
        <button
          className="rounded-md"
          style={{
            backgroundColor: "#711220",
            border: "1px solid #711220",
            color: "#fff",
            fontWeight: "600",
            fontSize: "14px",
            width: "120px",
            alignSelf: "center",
            padding: "12px 20px",
          }}
          onClick={handleProceed}
        >
          PROCEED
        </button>
      </div>
    </div>
  );
};
export default Step2;
