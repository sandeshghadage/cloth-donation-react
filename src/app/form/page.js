"use client";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step4 from "./Step4";
import Step3 from "./Step3";
import "../globals.css";

const Form = () => {
  const [currStep, setCurrStep] = useState(1);
  const [cords, setCords] = useState(null);
  const [locationError, setLocationError] = useState(false);
  const [step1Data, setStep1Data] = useState({});

  let var3 = [
    {
      id: "1",
      name: "Self Drop (Jaipur)",
      address:
        "114A, Janpath Brijmandal Calony, Kalwar Road, Jaipur, Rajasthan, 302012",
      cost: "FREE",
      isChecked: false,
    },
    {
      id: "2",
      name: "Self Drop (Jaipur)",
      address:
        "21/12, Bhargu Path, Mansarovar, Near Mohan Jewellery, Madhayam Marg Mansarovar, 302020",
      cost: "FREE",
      isChecked: false,
    },
    {
      id: "3",
      name: "Self Drop (Ghaziabad, Uttar Pradesh)",
      address:
        "Urja Yog Foundation, Plot 724, Flat No #C1, Shakti Khand 4, Indirapuram, Ghaziabad, Uttar Pradesh, 201014",
      cost: "FREE",
      isChecked: false,
    },
  ];
  const [step2Data, setStep2Data] = useState(var3);
  const [step3Data, setStep3Data] = useState({
    cartItems: [
      {
        name: "Clothes (No. Of Bags)",
        qty: 0,
        volume: 5,
      },
      {
        name: "Footwear (No. of Pairs)",
        qty: 0,
        volume: 5,
      },
      {
        name: "Stationary (No. of Stationary)",
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
    pickupData: null,

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
    location: "",
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

  // const [currIndex, setCurrIndex] = useState(0);

  // const indicators = ["completed", "", "", ""];
  // const progressWidth = `${(currIndex / (indicators.length - 1)) * 100}%`;

  // function previous() {
  //   if (currIndex > 0) {
  //     setCurrIndex(currIndex - 1);
  //   }
  // }

  // function next() {
  //   if (currIndex < indicators.length - 1) {
  //     setCurrIndex(currIndex + 1);
  //   }
  // }

  // const [currStep, setCurrStep] = useState(1);

  // const next = () => {
  //   setCurrStep((prevStep) => prevStep + 1);
  // };

  // const prev = () => {
  //   setCurrStep((prevStep) => prevStep - 1);
  // };

  // const steps = [
  //   { component: "/location.png" },
  //   { component: "/vehicle.png" },
  //   { component: "/carts.png" },
  //   { component: "/pickup.png" },
  // ];

  const steps = [
    {
      component: (
        <svg
          className="w-8 h-8 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#392993"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    {
      component: (
        <svg
          className="w-8 h-8 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#392993"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    {
      component: (
        <svg
          className="w-8 h-8 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#392993"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    {
      component: (
        <svg
          className="w-8 h-8 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#392993"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="p-6 flex justify-center ">
      <div
        className="bg-white dark:bg-slate-800 container flex justify-center items-center flex-col rounded"
        style={{ height: "100%" }}
      >
        <div
          className="bg-white dark:bg-slate-800 container  flex justify-center items-center flex-col rounded"
          style={{ height: "100%" }}
        >
          <div className="stepper-wrapper">
            <div
              className="bar-complete"
              style={{
                width: `${((currStep - 1) / (steps.length - 1)) * 100}%`,
              }}
            ></div>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`screen-indicator ${
                  index === currStep - 1 ? "completed" : ""
                }`}
              >
                {/* <img
                  src={step.component}
                  style={{
                    objectFit: "cover",
                    height: "80%",
                    width: "80%",
                  }}
                /> */}
                {step.component}
              </div>
            ))}
          </div>
        </div>

        {currStep === 1 && (
          <Step1
            setCurrStep={setCurrStep}
            setStep1Data={setStep1Data}
            step1Data={step1Data}
            cords={cords}
            setCords={setCords}
            setLocationError={setLocationError}
            locationError={locationError}
            step4Data={step4Data}
            setStep4Data={setStep4Data}
          />
        )}
        {currStep === 2 && (
          <Step2
            setCurrStep={setCurrStep}
            setStep2Data={setStep2Data}
            step2Data={step2Data}
            step4Data={step4Data}
            setStep4Data={setStep4Data}
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
