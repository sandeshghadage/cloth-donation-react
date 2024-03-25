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
      name: "Heavy Pickup",
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
