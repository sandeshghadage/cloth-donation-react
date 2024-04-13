import React from "react";
import Link from "next/link";

export default function Donation() {
  return (
    <div className="w-full ">
      <div
        className="relative w-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: 'url("/bgabout2.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
        {/* Overlay with faded color */}
        <div
          className="absolute inset-0  bg-opacity-40"
          style={{
            zIndex: 0,
            backgroundColor: "black",
            opacity: 0.8,
          }}
        ></div>

        {/* Text */}
        <div className="relative flex flex-col justify-center items-center w-full z-10">
          <span className="text-6xl md:text-7xl xl:text-8xl text-white">
            Donation
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-0">
        <div className="flex flex-col justify-center items-start p-16 gap-4 bg-blue-800 ">
          {/* <div className="text-xl font-bold text-orange-500">Our Story __</div>
          <div className="text-2xl font-medium text-white">Why Choose Us?</div> */}
          <div className="text-lg font-medium text-white">
            Your generosity has the power to transform lives. Your donation will
            directly provide food and clothing to those in need. A simple act of
            kindness can offer hope and support. Help us create a more
            compassionate community. Your contribution, no matter the size,
            makes a difference. Donate now.
          </div>
          {/* <Link
            href={"#"}
            className="bg-white text-blue-800 px-6 py-3 text-xs font-bold"
          >
            Donate Now
          </Link> */}
        </div>
        <div
          className="flex flex-col items-start p-16 gap-4 pr-0"
          style={{ backgroundColor: "#1d1d1d" }}
        >
          {/* <div className="text-xl font-bold text-orange-500">Our Story __</div>
          <div className="text-2xl font-medium text-white">Who are we?</div>
          <div className="text-base font-medium text-white">
            We're on a mission to bridge the gap between those with excess
            clothing and those in need. Through our platform, we make it easy to
            donate gently used clothing, spreading warmth and dignity to
            individuals and communities worldwide. Join us in making a
            difference today."
          </div>
          <Link
            href={"/aboutus"}
            className="bg-blue-800 text-white px-6 py-3 text-xs font-bold"
          >
            LEARN MORE
          </Link> */}
          <div className="flex gap-6">
            <img
              src="/qr1.jpeg"
              alt="gallary5"
              width={"50%"}
              style={{ borderRadius: "12px" }}
            />
            <div className="flex flex-col justify-center">
              <div className="text-white text-lg">Account Details </div>
              <div className="text-white">
                Account Name : Old Cloth Foundation
              </div>
              <div className="text-white">Account Number : 765466366424 </div>
              <div className="text-white">IFSC Code : SBI04567S7 </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="relative w-full min-h-full flex flex-col"
        style={{
          backgroundImage: 'url("/bgabout.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "80vh",
        }}
      >
        <div
          className="absolute inset-0 bg-white bg-opacity-80"
          style={{ zIndex: 0 }}
        ></div>

        <div className="w-full md:py-16 min-h-full xl:py-24 flex flex-col relative z-10">
          <div className="w-full xl:px-16">
            <div className="flex flex-wrap"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
