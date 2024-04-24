"use client";
import React from "react";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function DemoCarousel(){
    return (
        <Swiper
        //   navigation
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
          spaceBetween={100}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 100 }} // Autoplay every 3 seconds
          loop={true} // Infinite loop
        >
          <SwiperSlide style={{display:"flex", justifyContent:"center"}} > <div style={{width:"80vw",height:"100px", backgroundColor:"pink"}}>slide 1</div></SwiperSlide>
          <SwiperSlide style={{display:"flex", justifyContent:"center"}}   ><div style={{width:"50vw",height:"100px",  backgroundColor:"blue"}}>slide 1</div></SwiperSlide>
          <SwiperSlide style={{display:"flex", justifyContent:"center"}}  ><div style={{width:"80vw",height:"100px", backgroundColor:"yellow"}}>slide 1</div></SwiperSlide>
          
        </Swiper>
    );
}
