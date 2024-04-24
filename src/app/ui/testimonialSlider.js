"use client";
import React from "react";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function TestimonialSlider() {
    const testimonial = [
        {
          name: "Rajesh Vaidya",
          profession: "IT Consultant",
          place: "Gurgaon",
          content:
            "Donating clothes through Old Cloth Foundation was a breeze! It feels great knowing my old clothes are going to someone who really needs them. Keep up the good work!",
        },
        {
          name: "Ananya Singh",
          profession: "Marketing Executive",
          place: "Noida",
          content:
            "I was skeptical at first, but [Your Website Name] exceeded my expectations. The process was simple, and I received updates on where my donations went. I'm proud to be a part of such a meaningful initiative.",
        },
        {
          name: "Vikram Sharma",
          profession: "Bank Manager",
          place: "Faridabad",
          content:
            "The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country. The regulation, the tax treatment.",
        },
      ];
    return (
        <Swiper
            //   navigation
            //   pagination={{ clickable: true }}
            //   scrollbar={{ draggable: true }}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 100 }} // Autoplay every 3 seconds
            loop={true} // Infinite loop
        >
            {
                testimonial.map(testimonial =>(

            <SwiperSlide style={{ display: "flex", justifyContent: "center" }} > 
                <div className="md:p-12 bg-white flex flex-col justify-center items-center">
                    <div className="flex flex-col gap-4" style={{ width: "65%" }}>
                        <div
                            className="md:text-xl text-sm text-center"
                            style={{ color: "#292929", letterSpacing: "1px" }}
                        >
                            {testimonial.content}
                        </div>
                        <div className="flex flex-col items-center">
                            <div
                                className="text-lg text-center font-bold"
                                style={{ color: "orange", letterSpacing: "1px" }}
                            >
                                {testimonial.name}
                            </div>
                            <div
                                className="text-base text-center"
                                style={{ color: "#404040", letterSpacing: "1px" }}
                            >
                                {testimonial.profession} {testimonial.place}
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
