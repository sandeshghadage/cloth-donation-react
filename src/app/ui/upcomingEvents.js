"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
export default function UpcomingEvents() {
  const images = [
    {
      img: "/upcomingevents.jpg",
      eventName: "Cloth Destribution - Delhi",
      eventDate: "MAY 12",
    },
    {
      img: "/ourStory1.jpg",
      eventName: "Cloth Donation - Jaipur",
      eventDate: "APR 28",
    },
    {
      img: "/bgabout2.jpg",
      eventName: "Cloth Destribution - Delhi",
      eventDate: "APR 14",
    },
    {
      img: "/bgabout.jpg",
      eventName: "Cloth Donation - Jaipur",
      eventDate: "MAR 31",
    },
    {
      img: "/upcomingevents.jpg",
      eventName: "Cloth Destribution - Delhi",
      eventDate: "MAR 17",
    },
    {
      img: "/upcomingevents.jpg",
      eventName: "Cloth Destribution - Delhi",
      eventDate: "FEB 25",
    },
  ];

  return (
    <div
      className="relative flex flex-col"
      style={{
        backgroundImage: 'url("/upcomingevents.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "600px",
      }}
    >
      {/* Overlay with faded color */}
      <div
        className="absolute inset-0 bg-white bg-opacity-100"
        style={{
          zIndex: 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,10000) 40%, rgba(255,255,255,1000000) 100%)",
          opacity: 0.8,
        }}
      ></div>

      <div className=" absolute inset-0 flex flex-col border-2  w-full py-28 md:py-40">
        <div className="border-gray-800 border-r-2 border-t-2 border-b-2 w-10/12 h-[40rem]  hidden lg:flex ">
          <div
            style={{ width: "62rem" }}
            className=" min-h-70 bg-transparent  flex flex-row gap-6 absolute top-24 "
          >
            <Swiper
              slidesPerView={3}
              spaceBetween={14}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className=" p-t-8  w-full flex flex-row gap-8 h-[480px]"
              style={{ paddingTop: "20px" }}
              effect="fade"
              autoplay={{
                delay: 3000, // Adjust the delay as needed (in milliseconds)
                disableOnInteraction: false, // Keeps autoplay running when user interacts with slides
                pauseOnMouseEnter: true, // Pauses autoplay when user hovers over slides
              }}
            >
              {images.map((item, index) => {
                return (
                  <SwiperSlide
                    style={{
                      display: "flex",
                      width: "300px",
                      overflow: "visible",
                    }}
                    key={index}
                  >
                    <div
                      className=" h-[450px] "
                      style={{
                        width: "300px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url("${item.img}")`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          height: "80%",
                          width: "300px",
                        }}
                      >
                        <div
                          style={{
                            zIndex: 99,
                            // marginTop: "-10px",
                            position: "absolute",
                            right: "40px",
                            top: "-30px",
                          }}
                          className="w-2/12 h-18 bg-[#392993]  flex flex-col justify-center items-center py-4 px-8"
                        >
                          <span className="text-[#fff]">
                            {item.eventDate.split(" ")[0]}
                          </span>
                          <span className="text-[#fff]">
                            {item.eventDate.split(" ")[1]}
                          </span>
                        </div>
                      </div>
                      <div
                        className="bg-slate-300 px-4 flex flex-row justify-center items-center"
                        style={{ height: "10%" }}
                      >
                        <span>{item.eventName}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="w-3/12 min-h-40 bg-white ml-14 px-6 py-6 flex flex-col gap-4 absolute right-14 top-52">
            <h5 className="text-xl md:text-1xl lg:text-2xl font-medium text-[#392993] italic">
              <span
                style={{ transform: "skewX(4deg)", display: "inline-block" }}
              >
                R
              </span>
              ecent&nbsp;
              <span
                style={{ transform: "skewY(3deg)", display: "inline-block" }}
              >
                E
              </span>
              vents
            </h5>
            <p className="text-sm md:test-sm dark:text-gray-400">
              Successfully distributed clothing to families in need, spreading
              warmth and smiles throughout our community
            </p>
          </div>
        </div>

        <div className="border-gray-800 border-r-2 border-t-2 border-b-2 w-9/12 h-[40rem]  hidden md:flex lg:hidden  ">
          <div
            // style={{ width: "56rem" }}
            className=" min-h-70 bg-transparent  flex w-7/12 justify-center items-center  flex-row gap-6 absolute top-24 "
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={100}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              // className=" p-t-8  w-full flex flex-row gap-8 h-[480px]"
              className="p-t-8 w-full flex justify-center items-center gap-8 h-[480px]  "
              style={{
                paddingTop: "20px",
                paddingLeft: "110px",
                paddingRight: "110px",
              }}
              effect="fade"
              autoplay={{
                delay: 3000, // Adjust the delay as needed (in milliseconds)
                disableOnInteraction: false, // Keeps autoplay running when user interacts with slides
                pauseOnMouseEnter: true, // Pauses autoplay when user hovers over slides
              }}
            >
              {images.map((item, index) => {
                return (
                  <SwiperSlide
                    style={{
                      display: "flex",
                      width: "300px",
                      overflow: "visible",
                    }}
                    key={index}
                  >
                    <div
                      className=" h-[450px] "
                      style={{
                        width: "300px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url("${item.img}")`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          height: "80%",
                          width: "300px",
                        }}
                      >
                        <div
                          style={{
                            zIndex: 99,
                            // marginTop: "-10px",
                            position: "absolute",
                            right: "40px",
                            top: "-30px",
                          }}
                          className="w-2/12 h-18 bg-[#392993]  flex flex-col justify-center items-center py-4 px-8"
                        >
                          <span className="text-[#fff]">
                            {item.eventDate.split(" ")[0]}
                          </span>
                          <span className="text-[#fff]">
                            {item.eventDate.split(" ")[1]}
                          </span>
                        </div>
                      </div>
                      <div
                        className="bg-slate-300 px-4 flex flex-row justify-center items-center"
                        style={{ height: "10%" }}
                      >
                        <span>{item.eventName}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="w-3/12 min-h-40 bg-white px-6 py-6 flex flex-col gap-4 absolute right-44 top-52 md:absolute md:right-20 ">
            <h5 className="text-xl md:text-1xl lg:text-2xl font-medium text-[#392993] italic">
              <span
                style={{ transform: "skewX(4deg)", display: "inline-block" }}
              >
                R
              </span>
              ecent&nbsp;
              <span
                style={{ transform: "skewY(3deg)", display: "inline-block" }}
              >
                E
              </span>
              vents
            </h5>
            <p className="text-sm md:test-sm">
              Successfully distributed clothing to families in need, spreading
              warmth and smiles throughout our community
            </p>
          </div>
        </div>

        <div className="border-gray-800 border-r-2 border-t-2 border-b-2 w-11/12 h-[30rem] hidden ms:flex md:hidden lg:hidden  ">
          <div
            // style={{ width: "56rem" }}
            className=" min-h-70 bg-transparent  flex w-11/12 justify-center items-center  flex-row gap-6 absolute ms:top-52 top-24 "
          >
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              // centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              // className=" p-t-8  w-full flex flex-row gap-8 h-[480px]"
              className="p-t-8 w-full flex justify-center items-center gap-8 h-[390px]"
              style={{
                paddingTop: "20px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
              effect="fade"
              autoplay={{
                delay: 3000, // Adjust the delay as needed (in milliseconds)
                disableOnInteraction: false, // Keeps autoplay running when user interacts with slides
                pauseOnMouseEnter: true, // Pauses autoplay when user hovers over slides
              }}
            >
              {images.map((item, index) => {
                return (
                  <SwiperSlide
                    style={{
                      display: "flex",
                      width: "240px",
                      overflow: "visible",
                    }}
                    key={index}
                  >
                    <div
                      className=" h-[350px] "
                      style={{
                        width: "240px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url("${item.img}")`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          height: "70%",
                          width: "240px",
                        }}
                      >
                        <div
                          style={{
                            zIndex: 99,
                            // marginTop: "-10px",
                            position: "absolute",
                            right: "40px",
                            top: "-30px",
                          }}
                          className="w-2/12 h-18 bg-[#392993]  flex flex-col justify-center items-center py-4 px-8"
                        >
                          <span className="text-[#fff]">
                            {item.eventDate.split(" ")[0]}
                          </span>
                          <span className="text-[#fff]">
                            {item.eventDate.split(" ")[1]}
                          </span>
                        </div>
                      </div>
                      <div
                        className="bg-slate-300 px-4 flex flex-row justify-center items-center"
                        style={{ height: "10%" }}
                      >
                        <span>{item.eventName}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="w-5/12 min-h-40 bg-white px-6 py-6 flex flex-col gap-4 lg:right-44 lg:top-52 md:right-20 md:absolute absolute ms:right-52 ms:top-6">
            <h5 className="text-xl md:text-1xl lg:text-2xl font-medium text-[#392993] italic">
              <span
                style={{ transform: "skewX(4deg)", display: "inline-block" }}
              >
                R
              </span>
              ecent&nbsp;
              <span
                style={{ transform: "skewY(3deg)", display: "inline-block" }}
              >
                E
              </span>
              vents
            </h5>
            <p className="text-xs md:test-sm">
              Successfully distributed clothing to families in need, spreading
              warmth and smiles throughout our community
            </p>
          </div>
        </div>

        {/* <div className="border-gray-800 border-r-2 border-t-2 border-b-2 w-11/12 h-[30rem]  flex ms:hidden "> */}
        <div className="relative ms:hidden" style={{ height: "100%" }}>
          <div
            style={{ height: "100%" }}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-0 min-h-70 bg-transparent border-gray-800 border-2 flex w-11/12 justify-center items-center  flex-row gap-6  ms:hidden md:hidden lg:hidden "
          ></div>

          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-white px-6 py-6 flex flex-col gap-4 w-10/12">
            <h5 className="text-xl md:text-1xl lg:text-2xl font-medium text-[#392993] italic">
              <span
                style={{ transform: "skewX(4deg)", display: "inline-block" }}
              >
                R
              </span>
              ecent&nbsp;
              <span
                style={{ transform: "skewY(3deg)", display: "inline-block" }}
              >
                E
              </span>
              vents
            </h5>
            <p className="text-sm md:test-sm">
              Successfully distributed clothing to families in need, spreading
              warmth and smiles throughout our community
            </p>
          </div>
          <div className=" w-full flex justify-center items-center absolute left-1/2 top-32 transform -translate-x-1/2">
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              centeredSlides={true}
              pagination={{
                clickable: true,
                bulletClass: "my-custom-pagination-bullet",
              }}
              modules={[Pagination, Autoplay]}
              className="p-t-8 w-full flex justify-center items-center gap-8"
              style={{
                paddingTop: "20px",
                paddingLeft: "20%",
                paddingRight: "40px",
              }}
              effect="fade"
              autoplay={{
                delay: 3000, // Adjust the delay as needed (in milliseconds)
                disableOnInteraction: false, // Keeps autoplay running when user interacts with slides
                pauseOnMouseEnter: true, // Pauses autoplay when user hovers over slides
              }}
            >
              {images.map((item, index) => {
                return (
                  <SwiperSlide
                    style={{
                      display: "flex",
                      width: "250px",
                      overflow: "visible",
                    }}
                    key={index}
                  >
                    <div
                      className=" h-[350px] "
                      style={{
                        width: "250px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url("${item.img}")`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          height: "70%",
                          width: "250px",
                        }}
                      >
                        <div
                          style={{
                            zIndex: 99,
                            // marginTop: "-10px",
                            position: "absolute",
                            right: "40px",
                            top: "-30px",
                          }}
                          className="w-2/12 h-18 bg-[#392993]  flex flex-col justify-center items-center py-4 px-8"
                        >
                          <span className="text-[#fff]">
                            {item.eventDate.split(" ")[0]}
                          </span>
                          <span className="text-[#fff]">
                            {item.eventDate.split(" ")[1]}
                          </span>
                        </div>
                      </div>
                      <div
                        className="bg-slate-300 px-4 flex flex-row justify-center items-center"
                        style={{ height: "10%" }}
                      >
                        <span>{item.eventName}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
