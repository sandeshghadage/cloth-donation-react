"use client";
import React from "react";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function RecentActivitySlider() {
    const testimonial = [
        {
            name: "Rajesh Vaidya",
            profession: "IT Consultant",
            place: "Gurgaon",
            content:
                "ze! It feels great knowing my old clothes are going to someone who really needs them. Keep up the good work!",
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
                testimonial.map(testimonial => (

                    <SwiperSlide style={{ display: "flex", justifyContent: "center", backgroundColor: "white" }} >
                        <div className="md:p-4 bg-white flex flex-col justify-center items-center w-full">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 shadow-xl md:p-8 mb-4" style={{ width: "85%" }}>
                                <div className="h-full">
                                    <img src="/ourStory2.jpg" alt="gallary5" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                                <div className="h-full p-4 flex flex-col justify-center">
                                    <ul style={{ padding: 0 }}>
                                        <li>
                                            <span role="img" aria-label="Location">🌍</span> <strong>Location:</strong> Delhi NCR
                                        </li>
                                        <li>
                                            <span role="img" aria-label="Date of Donation">📅</span> <strong>Date of Donation:</strong> May 2024
                                        </li>
                                        <li>
                                            <span role="img" aria-label="Donated Items">🛍️</span> <strong>Donated Items:</strong> T-shirts, shorts, sandals
                                        </li>
                                        <li>
                                            <span role="img" aria-label="Number of Items">🔢</span> <strong>Number of Items:</strong> 150+
                                        </li>
                                        <li>
                                            <span role="img" aria-label="Collaboration">🤝</span> <strong>Collaboration:</strong> In partnership with Zordian Group
                                        </li>
                                        {/* <p>
                                            <span role="img" aria-label="Social Media">📱</span> <strong>Social Media:</strong> Follow us on Instagram for more photos and stories!
                                        </p> */}
                                        {/* <p>
                                            <span role="img" aria-label="Message">💬</span> Delhi NCR, your generosity is sizzling hot this summer! Over 150 items donated in May, thanks to the support of local schools and businesses. Together, we're making a difference for children and families in need! 🌞
                                        </p> */}
                                    </ul>



                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
