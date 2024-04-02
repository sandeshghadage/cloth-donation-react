import React, { useState, ChangeEvent, useEffect } from "react";
import { donationData } from "./page";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

import "react-toastify/dist/ReactToastify.css";

// import { useRouter } from "next/router";

const Step4 = ({
  setCurrStep,
  setStep4Data,
  step4Data,
  step3Data,
  step2Data,
  step1Data,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isSelectedTimeSlot, setSelectedTimeSlot] = useState({
    day: "",
    time: "",
  });
  const router = useRouter();
  // const router = useRouter();

  const finalData = {
    ...step1Data,
    ...step2Data,
    ...step3Data,
    ...step4Data,
  };

  const optionData = [
    {
      THURSDAY: [
        "10:00 AM - 12:00 PM",
        "12:00 PM - 02:00 PM",
        "2:00 PM - 04:00 PM",
      ],
      FRIDAY: [
        "10:00 AM - 12:00 PM",
        "12:00 PM - 02:00 PM",
        "2:00 PM - 04:00 PM",
      ],
      SATURDAY: [
        "10:00 AM - 12:00 PM",
        "12:00 PM - 02:00 PM",
        "2:00 PM - 04:00 PM",
      ],
    },
  ];

  useEffect(() => {
    const found = step2Data.find((item) => item.isChecked == true);
    setSelectedVehicle(found);
  }, []);

  const handleChange = (event) => {
    setStep4Data((prevData) => ({
      ...prevData,
      note: event.target.value,
    }));
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleData = (day, timeSlot) => {
    setSelectedTimeSlot({ day, time: timeSlot });
  };

  const onSubmit = async () => {
    if (isChecked === true && Object?.keys(step4Data.time).length != 0) {
      if (hasErrors()) {
        toast.error("Please check all fields should be filled");
      } else {
        try {
          setLoading(true);
          const res = await fetch("/api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(finalData),
          });

          const body = await res.json();

          if (res.ok) {
            toast.success("form submit sucessfull");
            setLoading(false);
            // alert(`${body.message} 🚀`);
            router.push("/");
          }

          if (res.status === 400) {
            alert(`${body.message} 😢`);
            setLoading(false);
          }
        } catch (err) {
          setLoading(false);
          console.log("Something went wrong: ", err);
        }
      }
    } else {
      toast.error("Please select checkbox and Time slot");
    }
  };

  const handleStep4InputChange = (e) => {
    const { name, value } = e.target;
    setStep4Data((prevData) => ({
      ...prevData,
      userDetails: {
        ...prevData.userDetails,
        [name]: value,
      },
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = true;

    switch (name) {
      case "name":
        error = value.trim() === "" ? true : false;
        break;
      case "email":
        error = value.includes("@") ? false : true;
        break;
      case "mobileNumber":
        error = value.length === 10 ? false : true;
        break;
      case "flat":
        error = value.trim() === "" ? true : false;
        break;
      case "address":
        error = value.trim() === "" ? true : false;
        break;
      case "city":
        error = value.trim() === "" ? true : false;
        break;
      case "pincode":
        error = value.trim() === "" ? true : false;
        break;

      default:
        break;
    }
    setStep4Data((prevData) => ({
      ...prevData,
      errors: {
        ...prevData.errors,
        [name]: error,
      },
    }));
  };

  const hasErrors = () => {
    return Object.values(step4Data.errors).some((error) => error === true);
  };

  function handleBack() {
    setCurrStep(3);
  }

  return (
    <div
      className="flex flex-col gap-4 w-full md:px-10 px-4"
      // style={{ width: "40%" }}
    >
      <ToastContainer />
      <div className=" flex justify-center items-center flex-col w-full my-8 py-4">
        <span className="text-center w-full text-xl">SCHEDULE A PICKUP</span>
        <span className="text-center w-full text-sm">
          Please select a convenient slot as per your availability
        </span>
      </div>
      <div className="w-12/12  flex flex-row flex-wrap justify-between items-center px-8 gap-y-9 max-xl:flex-col max-xl:px-0  ">
        <div className="w-6/12  flex flex-col gap-y-14 max-xl:w-full max-xl:flex-row max-lg:flex-col">
          <div className="w-full flex flex-col justify-center items-left gap-y-6 py-4">
            <h2 className="text-xl">1. Choose a pickup slot</h2>
            <div className="w-full flex flex-col justify-center item-left gap-6">
              {optionData.map((item) => {
                return (
                  <>
                    {Object.entries(item).map(([day, timeSlots]) => {
                      return (
                        <>
                          <span className="text-sm">{day}</span>
                          <div className="flex flex-row justify-between items-center gap-2 max-xl:flex-wrap max-xl:justify-around">
                            {timeSlots.map((timeSlot, timeIndex) => (
                              <button
                                key={timeIndex}
                                onClick={() => {
                                  handleData(day, timeSlot);
                                  setStep4Data((prevData) => ({
                                    ...prevData,
                                    time: {
                                      day: day,
                                      timeSlot: timeSlot,
                                    },
                                  }));
                                }}
                                className={
                                  isSelectedTimeSlot?.day === day &&
                                  isSelectedTimeSlot?.time === timeSlot
                                    ? "border-2 w-48 h-10 rounded-md bg-red-900 text-white"
                                    : "border-2 border-gray-500 w-48 h-10 rounded-md max-xl w-45"
                                }
                              >
                                {timeSlot}
                              </button>
                            ))}
                          </div>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-left gap-y-6">
            <h2 className="text-xl">2. NOTES FOR PICKUP PERSON (Optional)</h2>
            <span className="text-sm">
              * We'll do our best to pass along your instructions to our Pickup
              Partner. Compliance isn't guaranteed.
            </span>
            <div className=" border-red-900 border-2">
              <textarea
                className=" border-red-900 focus:border-blue-500 focus:outline-none p-2 w-full outline-red-900 outline-offset-1 outline-width-0 dark:text-black"
                placeholder="Enter your comments here..."
                rows={4}
                cols={50}
                value={step4Data.note}
                onChange={handleChange}
                // style={{ borderColor: 'orange',outline:"none",outlineColor:"orange",outlineOffset:0 }}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-6/12  flex flex-col justify-center items-end gap-8 max-xl:w-full max-xl:flex-row max-lg:flex-col max-lg:items-center">
          <div className="flex flex-col justify-center items-center gap-2  rounded-md shadow-lg shadow-red-900/50">
            <h2 className="py-4 px-6 text-2xl font-normal antialiased ">
              Donar Details
            </h2>
            <div className="w-full  flex flex-col justify-center items-center gap-8">
              <div className="w-10/12 h-10 border-2 border-red-900 rounded-md">
                <input
                  className="w-full h-full px-2 rounded-md outline-red-900 outline-offset-1 dark:text-black"
                  placeholder="Name.."
                  name="name"
                  required
                  value={step4Data.userDetails.name}
                  onChange={handleStep4InputChange}
                />

                {step4Data.errors.name && (
                  <span style={{ color: "#db233e" }} className=" text-xs pt-1">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="w-10/12 h-10 border-2 border-red-900 rounded-md">
                <input
                  className="w-full h-full px-2 rounded-md outline-red-900 outline-offset-1 dark:text-black"
                  placeholder="Email"
                  name="email"
                  type="email"
                  required
                  value={step4Data.userDetails.email}
                  onChange={handleStep4InputChange}
                />
                {step4Data.errors.email && (
                  <span style={{ color: "#db233e" }} className=" text-xs pt-1">
                    email field is required and should be valid email
                  </span>
                )}
              </div>
              <div className="w-10/12 h-10 border-2 border-red-900 rounded-md">
                <input
                  className="w-full h-full px-2 rounded-md outline-red-900 outline-offset-1 dark:text-black"
                  placeholder="Mobile No.."
                  name="mobileNumber"
                  type="number"
                  required
                  value={step4Data.userDetails.mobileNumber}
                  onChange={handleStep4InputChange}
                />
                {step4Data.errors.mobileNumber && (
                  <span style={{ color: "#db233e" }} className=" text-xs pt-1">
                    Mobile number is required & should be 10 digits
                  </span>
                )}
              </div>
              <div className="w-10/12 h-15  flex flex-row justify-center gap-4 ">
                <div className="w-full h-full   flex flex-col justify-center  rounded-md">
                  <input
                    className="w-full h-10 border-2 border-red-900 px-2 rounded-md outline-red-900 outline-offset-1 dark:text-black"
                    placeholder="Flat/Door"
                    name="flat"
                    required
                    value={step4Data.userDetails.flat}
                    onChange={handleStep4InputChange}
                  />
                  {step4Data.errors.flat && (
                    <span
                      style={{ color: "#db233e" }}
                      className=" text-xs pt-1"
                    >
                      Flat field is required
                    </span>
                  )}
                </div>
                <div className="w-full h-full  flex flex-col justify-center  rounded-md">
                  <input
                    className="w-full h-10 border-2 border-red-900 px-2 rounded-md outline-red-900 outline-offset-1 dark:text-black"
                    placeholder="Full Address"
                    name="address"
                    required
                    value={step4Data.userDetails.address}
                    onChange={handleStep4InputChange}
                  />
                  {step4Data.errors.address && (
                    <span
                      style={{ color: "#db233e" }}
                      className=" text-xs pt-1"
                    >
                      Address field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="w-10/12 h-15 flex flex-row justify-center gap-4 ">
                <div className="w-full h-full   flex flex-col justify-center  rounded-md">
                  <input
                    className="w-full h-10 border-2 border-red-900 px-2 rounded-md outline-red-900 outline-offset-1 dark:text-black"
                    placeholder="City"
                    name="city"
                    required
                    value={step4Data.userDetails.city}
                    onChange={handleStep4InputChange}
                  />
                  {step4Data.errors.city && (
                    <span
                      style={{ color: "#db233e" }}
                      className=" text-xs pt-1"
                    >
                      city field is required
                    </span>
                  )}
                </div>
                <div className="w-full h-full   flex flex-col justify-center  rounded-md">
                  <input
                    className="w-full h-10 border-2 border-red-900 px-2 rounded-md outline-red-900 outline-offset-1 dark:text-black"
                    placeholder="Pincode"
                    name="pincode"
                    required
                    value={step4Data.userDetails.pincode}
                    onChange={handleStep4InputChange}
                  />
                  {step4Data.errors.pincode && (
                    <span className="text-red-500 text-sm pt-2">
                      Pincode field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="w-9/12 h-10 mb-1 w-full px-6">
                {/* <input type="checkbox" className="border-2 rounded border-gray-400 outline-none outline-0"/> */}
                <input
                  type="checkbox"
                  id="terms"
                  className="hidden peer"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="terms"
                  className=" cursor-pointer relative w-full flex items-center"
                >
                  <span className="relative inline-block w-6 h-6 bg-white border border-gray-400 rounded"></span>
                  <span className="absolute top-1.5 left-1.5 flex items-center justify-center">
                    <svg
                      className={`w-4 h-4 fill-current pointer-events-none ${
                        isChecked ? "block text-red-900" : "hidden"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 10.75l-3.5-3.5-2.5 2.5 6 6 12-12-2.5-2.5-9.5 9.5z" />
                    </svg>
                  </span>
                  <div
                    className="ml-2 text-xs"
                    style={{ width: "fit-content" }}
                  >
                    I have read and agree with the Terms of Use.
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="w-8/12 border-2 bg-slate-100 flex flex-col justify-center items-left max-lg:w-10/12">
            <h1 className=" flex items-center py-2 px-6 text-xl dark:text-black">
              Donated Items
            </h1>
            {step3Data && step3Data.cartItems && (
              <>
                {step3Data?.cartItems
                  .filter((item) => item.qty > 0)
                  .map((item) => {
                    return (
                      <div className="border-t-2 flex flex-row justify-between items-center py-2 px-6 dark:text-black">
                        <span>{item.name}</span>
                        <span>{item.qty}</span>
                      </div>
                    );
                  })}
              </>
            )}

            <div className="border-t-2 flex flex-col justify-between items-left py-2 px-6">
              {selectedVehicle && (
                <div className="flex flex-row justify-between items-center">
                  <span className="text-sm dark:text-black">
                    {selectedVehicle.name} - Fee
                  </span>
                  <span className="text-emerald-500 text-sm">FREE</span>
                </div>
              )}
              <div className="text-sm dark:text-black">(Incl. all Taxes)</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-end gap-x-12 items-right flex-row w-11/12 my-10 ">
        <button
          onClick={handleBack}
          className=" px-4 py-2 bg-gray-400 rounded text-white"
        >
          Back
        </button>
        <button
          style={{ opacity: loading ? 0.5 : 1 }}
          disabled={loading}
          onClick={onSubmit}
          // className=" px-4 py-2 bg-red-900 rounded text-white "
          className={`px-4 py-2 rounded text-white ${"bg-red-900"}`}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Step4;
