import { Carousel } from "flowbite-react";

export default function FlowByteCarousel() {
  return (
    <div
      className="h-50 sm:h-50 xl:h-50 2xl:h-50"
      style={{ border: "5px solid red", width: "100%", height: "100%" }}
    >
      <Carousel
        pauseOnHover
        style={{ border: "2px solid blue", width: "100%", height: "100%" }}
      >
        <img
          height={"100px"}
          width={"100px"}
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
          // height={"50px"}
          height={"100px"}
          width={"100px"}
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
          // height={"50px"}
          height={"100px"}
          width={"100px"}
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
          // height={"50px"}
          height={"100px"}
          width={"100px"}
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
          // height={"50px"}
          height={"100px"}
          width={"100px"}
        />
      </Carousel>
    </div>
  );
}
