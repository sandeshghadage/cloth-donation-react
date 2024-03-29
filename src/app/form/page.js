"use client";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step4 from "./Step4";
import Step3 from "./Step3";

const Form = () => {
  const [currStep, setCurrStep] = useState(1);
  const [cords, setCords] = useState(null);
  const [step1Data, setStep1Data] = useState({});
  let var3 = [
    {
      name: "Light Pickup",
      cost: "FREE",
      isChecked: false,
    },
    {
      name: "Self Drop (Delhi NCR)",
      cost: "FREE",
      isChecked: false,
    },
  ];
  const [step2Data, setStep2Data] = useState(var3);
  const [step3Data, setStep3Data] = useState({
    cartItems: [
      {
        name: "Clothes",
        qty: 0,
        volume: 5,
      },
      {
        name: "Footwear",
        qty: 0,
        volume: 5,
      },
      {
        name: "Stationery",
        qty: 0,
        volume: 5,
      },
    ],
    error: false,
  });
  const [step4Data, setStep4Data] = useState({
    userDetails: {
      name: "",
      email: "",
      mobileNumber: "",
      flat: "",
      address: "",
      city: "",
      pincode: "",
    },
    note: "",
    time: {},
    errors: {
      name: true,
      email: true,
      mobileNumber: true,
      flat: true,
      address: true,
      city: true,
      pincode: true,
    },
    isChecked: false,
  });

  const [allDataCollection, setAllDataCollection] = useState({
    location: "",
    vehicalType: "",
    cartItems: [],
    time: {},
    userDetails: {
      name: "",
      email: "",
      mobileNumber: "",
      address: "",
      city: "",
      pincode: "",
      flat: "",
    },
    note: "",
  });

  const handleStep1Submit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const nextStep = () => {
    setCurrStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrStep((prevStep) => prevStep - 1);
  };

  const handleStep1InputChange = (e) => {
    const { name, value } = e.target;
    setStep1Data((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleStep2InputChange = (e) => {
  //   const { name, value } = e.target;
  //   setStep2Data((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleStep3InputChange = (e) => {
    const { name, value } = e.target;
    setStep3Data((prevData) => ({
      ...prevData,
      userDetails: {
        ...prevData.userDetails,
        [name]: value,
      },
    }));
  };

  const handleNoteChange = (e) => {
    const { value } = e.target;
    setStep3Data((prevData) => ({
      ...prevData,
      note: value,
    }));
  };
  return (
    <div className="p-6 flex justify-center ">
      <div
        className="bg-white dark:bg-slate-800 container flex justify-center items-center flex-col rounded"
        style={{ height: "100%" }}
      >
        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base px-8 py-4">
          <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg
                class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
          <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span class="me-2">2</span>
              Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
          <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span class="me-2">2</span>
              Account2 <span class="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
          <li class="flex items-center">
            <span class="me-2">3</span>
            Confirmation
          </li>
        </ol>

        {currStep === 1 && (
          <Step1
            setCurrStep={setCurrStep}
            setStep1Data={setStep1Data}
            step1Data={step1Data}
            cords={cords}
            setCords={setCords}
          />
        )}
        {currStep === 2 && (
          <Step2
            setCurrStep={setCurrStep}
            setStep2Data={setStep2Data}
            step2Data={step2Data}
          />
        )}
        {currStep === 3 && (
          <Step3
            setCurrStep={setCurrStep}
            setStep3Data={setStep3Data}
            step3Data={step3Data}
          />
        )}
        {currStep === 4 && (
          <Step4
            setCurrStep={setCurrStep}
            setStep4Data={setStep4Data}
            step4Data={step4Data}
            step3Data={step3Data}
            step2Data={step2Data}
            step1Data={step1Data}
          />
        )}
      </div>
    </div>
  );
};

export default Form;
