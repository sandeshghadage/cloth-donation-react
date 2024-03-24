import React, { useState, ChangeEvent } from "react";
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
  console.log(54, step4Data);

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
          const res = await fetch("/api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(finalData),
          });

          const body = await res.json();

          if (res.ok) {
            alert(`${body.message} 🚀`);
          }

          if (res.status === 400) {
            alert(`${body.message} 😢`);
          }
          // router.push("/");
        } catch (err) {
          console.log("Something went wrong: ", err);
        }
        toast.success("form submit sucessfull");
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
      className="flex flex-col gap-4 w-full px-10"
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
                                    ? "border-2 w-48 h-10 rounded-xl bg-orange-500 text-white"
                                    : "border-2 border-gray-500 w-48 h-10 rounded-xl max-xl w-45"
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
            <div className=" border-orange-500 border-2">
              <textarea
                className=" border-orange-500 focus:border-blue-500 focus:outline-none p-2 w-full outline-orange-500 outline-offset-1 outline-width-0"
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
          <div className="w-8/12  flex flex-col justify-center items-center gap-2  rounded-xl shadow-lg shadow-orange-500/50 max-2xl:w-10/12 ">
            <h2 className="py-4 px-6 text-2xl font-normal antialiased ">
              Donar Details
            </h2>
            <div className="w-full  flex flex-col justify-center items-center gap-6">
              <div className="w-10/12 h-10 border-2 border-orange-500 rounded-xl ">
                <input
                  className="w-full h-full px-2 rounded-xl outline-orange-500 outline-offset-1"
                  placeholder="Name.."
                  name="name"
                  required
                  value={step4Data.userDetails.name}
                  onChange={handleStep4InputChange}
                />

                {step4Data.errors.name && (
                  <span className="text-red-500 text-sm pt-2">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="w-10/12 h-10 border-2 border-orange-500 rounded-xl">
                <input
                  className="w-full h-full px-2 rounded-xl outline-orange-500 outline-offset-1"
                  placeholder="Email"
                  name="email"
                  type="email"
                  required
                  value={step4Data.userDetails.email}
                  onChange={handleStep4InputChange}
                />
                {step4Data.errors.email && (
                  <span className="text-red-500 text-sm pt-2">
                    email field is required and should be valid email
                  </span>
                )}
              </div>
              <div className="w-10/12 h-10 border-2 border-orange-500 rounded-xl">
                <input
                  className="w-full h-full px-2 rounded-xl outline-orange-500 outline-offset-1"
                  placeholder="Mobile No.."
                  name="mobileNumber"
                  type="number"
                  required
                  value={step4Data.userDetails.mobileNumber}
                  onChange={handleStep4InputChange}
                />
                {step4Data.errors.mobileNumber && (
                  <span className="text-red-500 text-sm pt-2">
                    Mobile number is required & should be 10 digits
                  </span>
                )}
              </div>
              <div className="w-10/12 h-15  flex flex-row justify-center gap-4 ">
                <div className="w-full h-full   flex flex-col justify-center  rounded-xl">
                  <input
                    className="w-full h-10 border-2 border-orange-500 px-2 rounded-xl outline-orange-500 outline-offset-1"
                    placeholder="Flat/Door"
                    name="flat"
                    required
                    value={step4Data.userDetails.flat}
                    onChange={handleStep4InputChange}
                  />
                  {step4Data.errors.flat && (
                    <span className="text-red-500 text-sm pt-2">
                      Flat field is required
                    </span>
                  )}
                </div>
                <div className="w-full h-full  flex flex-col justify-center  rounded-xl">
                  <input
                    className="w-full h-10 border-2 border-orange-500 px-2 rounded-xl outline-orange-500 outline-offset-1"
                    placeholder="Full Address"
                    name="address"
                    required
                    value={step4Data.userDetails.address}
                    onChange={handleStep4InputChange}
                  />
                  {step4Data.errors.address && (
                    <span className="text-red-500 text-sm pt-2">
                      Address field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="w-10/12 h-15 flex flex-row justify-center gap-4 ">
                <div className="w-full h-full   flex flex-col justify-center  rounded-xl">
                  <input
                    className="w-full h-10 border-2 border-orange-500 px-2 rounded-xl outline-orange-500 outline-offset-1"
                    placeholder="City"
                    name="city"
                    required
                    value={step4Data.userDetails.city}
                    onChange={handleStep4InputChange}
                  />
                  {step4Data.errors.city && (
                    <span className="text-red-500 text-sm pt-2">
                      city field is required
                    </span>
                  )}
                </div>
                <div className="w-full h-full   flex flex-col justify-center  rounded-xl">
                  <input
                    className="w-full h-10 border-2 border-orange-500 px-2 rounded-xl outline-orange-500 outline-offset-1"
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
              <div className="w-9/12 h-10 mb-1 ">
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
                  className="inline-block cursor-pointer relative"
                >
                  <span className="relative inline-block w-6 h-6 bg-white border border-gray-400 rounded"></span>
                  <span className="absolute top-1.5 left-1.5 flex items-center justify-center">
                    <svg
                      className={`w-4 h-4 fill-current pointer-events-none ${
                        isChecked ? "block text-orange-500" : "hidden"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 10.75l-3.5-3.5-2.5 2.5 6 6 12-12-2.5-2.5-9.5 9.5z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-xs">
                    I have read and agree with the Terms of Use.
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-8/12 border-2 bg-slate-100 flex flex-col justify-center items-left max-lg:w-10/12">
            <h1 className=" flex items-center py-2 px-6 text-xl">
              Donated Items
            </h1>
            {step3Data && step3Data.cartItems && (
              <>
                {step3Data?.cartItems
                  .filter((item) => item.qty > 0)
                  .map((item) => {
                    return (
                      <div className="border-t-2 flex flex-row justify-between items-center py-2 px-6">
                        <span>{item.name}</span>
                        <span>{item.qty}</span>
                      </div>
                    );
                  })}
              </>
            )}

            <div className="border-t-2 flex flex-col justify-between items-left py-2 px-6">
              <div className="flex flex-row justify-between items-center">
                <span className="text-sm">
                  Light Pickup (via 2-Wheeler) - Fee
                </span>
                <span className="text-emerald-500 text-sm">FREE</span>
              </div>
              <div className="text-sm">(Incl. all Taxes)</div>
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
          // disabled={hasErrors()}
          onClick={onSubmit}
          // className=" px-4 py-2 bg-orange-500 rounded text-white "
          className={`px-4 py-2 rounded text-white ${"bg-orange-500"}`}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Step4;
