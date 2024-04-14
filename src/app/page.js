// import FlowByteButton from "./ui/button";
// import FlowByteTimeline from "./ui/timeLIne";
// import FlowByteModal from "./ui/modal";
// import FlowByteDropdown from "./ui/dropdown";
// import FlowByteNewsletter from "./ui/newsletter";
"use client";
import Link from "next/link";
import FlowByteCarousel from "./ui/carousel";
import Image from "next/image";
// import { url } from "inspector";

export default function Home() {
  const sliderOptions = {
    dots: false,
    center: true,
    items: 1,
    margin: 20,
    autoplay: true,
    // autoplayTimeout: 3000,
    delay: 1000,
    damping: 20,
    curve: "Spring",
    shiftness: 177.8,
    damping: 20,
    mouseDrag: true,
    touchDrag: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      500: {
        items: 1,
        nav: true,
      },
      700: {
        items: 1,
        nav: true,
      },
      900: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
        nav: true,
      },
    },
  };
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
  const mission = [
    {
      slogan: "From Collection to Compassion.",
      content:
        "Our mission is to efficiently collect, organize, and distribute clothing donations, empowering individuals and communities with warmth and dignity.",
    },
    {
      slogan: "One Garment at a Time",
      content:
        "We're dedicated to facilitating the seamless journey of clothing donations from collection to distribution, ensuring every garment finds its purpose.",
    },
    {
      slogan: "Your Donation, Their Dignity.",
      content:
        "At our core, we're committed to making a tangible impact by connecting donors with those in need through effective clothing collection and distribution.",
    },
  ];
  return (
    <>
      <div
        style={{ height: "100vh", overflow: "hidden", position: "relative" }}
      >
        {/* <FlowByteCarousel /> */}

        <img
          src="/heroImg2.png"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            // opacity: 0.2,
          }}
        />
        <div
          className="flex flex-col justify-center items-center gap-6 px-8 text-center"
          style={{
            width: "100%",
            height: "100%",
            zIndex: 100,
            position: "absolute",
            top: "0",
            left: "0",
            color: "white",
            // backgroundColor: "#000",
            // opacity: 0.4,
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 3.8) 100%)",
          }}
        >
          <div
            className="bg-[#392993] p-2 flex justify-center"
            style={{
              position: "absolute",
              top: "0px",
              width: "100vw",
            }}
          >
            <div className="text-white font-bold">
              Donation service is only available in Delhi NCR & Jaipur
            </div>
          </div>
          <div className="text-4xl md:text-6xl font-bold">
            Share. Care. Wear.
          </div>
          {/* <div class="text-4xl md:text-6xl font-bold [text-shadow: 2px 2px 4px rgba(0,0,0,0.5)]">
            Share. Care. Wear.
          </div> */}
          <div className="text-xl md:text-2xl font-medium">
            Transforming lives, one garment at a time. Join us today!
          </div>
          <div className="flex w-full justify-center gap-3 p-3">
            <Link href="/form" class="button-85" role="button">
              Schedule Pickup / Drop
            </Link>
          </div>
        </div>
      </div>
      <div
        className="md:flex hidden"
        style={{
          backgroundColor: "white",
          paddingTop: "10vh",
          paddingBottom: "10vh",
        }}
      >
        <img
          src="/Road-map-vertical.png"
          alt="gallary5"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div
        className="flex md:hidden"
        style={{
          backgroundColor: "white",
          paddingTop: "10vh",
        }}
      >
        <img
          src="/Road-map-horizontal.png"
          alt="gallary5"
          width={"100%"}
          height={"100%"}
        />
      </div>
      {/* <div
        className="bg-white h-36 flex justify-center items-center text-4xl font-bold"
        style={{ color: "#292929" }}
      >
        Our Story
      </div> */}
      {/* Our Story */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-0">
        <div className="flex justify-center">
          <img src="/ourStory1.jpg" alt="gallary5" width={"100%"} />
        </div>
        <div
          className="flex flex-col items-start p-16 gap-4"
          style={{ backgroundColor: "#392993" }}
        >
          <div className="text-xl font-bold text-orange-500">Our Story __</div>
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
            className="bg-white text-[#392993] px-6 py-3 text-xs font-bold"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="flex flex-col items-start p-16 gap-4 bg-[#392993]">
          <div className="text-xl font-bold text-orange-500">Our Story __</div>
          <div className="text-2xl font-medium text-white">Why Choose Us?</div>
          <div className="text-base font-medium text-white">
            Donators choose us for our seamless donation process, extensive
            network of recipients, and commitment to making a tangible
            difference. With Old Cloth Foundation, you can trust your
            contributions will directly impact those in need, fostering warmth
            and dignity in communities worldwide.
          </div>
          <Link
            href={"/aboutus"}
            className="bg-white text-[#392993] px-6 py-3 text-xs font-bold"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="md:flex justify-center hidden">
          <img src="/ourStory2.jpg" alt="gallary5" width={"100%"} />
        </div>
      </div>
      {/* Mission Steps 1, 2, 3 */}
      {/* <div className="w-full min-h-52 ">
        <div
          className="w-full min-h-52 "
          style={{
            backgroundImage: 'url("/bg.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className=" w-full  md:py-16 h-full xl:py-24  ">
            <div className=" w-full h-full xl:px-16 ">
              <div className="grid grid-cols-1 gap-0 md:grid-cols-3 py-8">
                {mission.map((item, index) => {
                  return (
                    <div className=" bg-transparent  px-8">
                      <div className=" w-full h-full bg-transparent xl:pt-14 xl:pb-8 xl:px-6 md:pt-12 md:pb-6 xl:px-4  ">
                        <div
                          className="w-full h-full xl:px-6 md:px-6 "
                          style={{
                            backgroundColor:
                              index === 0
                                ? "#121111"
                                : index === 1
                                ? " #2123bc"
                                : index === 2
                                ? "#e86053"
                                : "",
                            opacity: 0.87,
                          }}
                        >
                          <div
                            className=""
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              padding: "50px 30px",
                              justifyContent: "space-between",
                              gap: "30px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div
                                style={{
                                  border:
                                    index === 2
                                      ? "2px solid white"
                                      : "2px solid #ea5f52",
                                  width: "20px",
                                }}
                              ></div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "left",
                              }}
                            >
                              <h2
                                style={{
                                  fontSize: "57px",
                                  color: "white",
                                  fontWeight: "700",
                                  fontStyle: "normal",
                                }}
                              >
                                0{index + 1}
                              </h2>
                              <h5
                                style={{
                                  fontSize: "26px",
                                  color:
                                    index === 0
                                      ? "#ff6f61"
                                      : index === 1
                                      ? "#ff6f61"
                                      : "#2123bc",
                                  fontWeight: "400",
                                }}
                              >
                                {item.slogan}
                              </h5>
                            </div>
                            <div>
                              <span
                                style={{
                                  fontSize: "16px",
                                  color: "white",
                                  lineHeight: "1.7px",
                                }}
                              >
                                {item.content}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Testimonial */}
      <div>
        <div
          className="bg-white h-36 flex flex-col justify-center items-center gap-3"
          style={{ color: "#292929" }}
        >
          <div className="text-4xl font-bold">Testimonial</div>
          <div
            className="text-base font-medium"
            style={{ color: "#bdbdbd", letterSpacing: "2px" }}
          >
            WHAT PEOPLE SAY ABOUT US
          </div>
        </div>
        <div className="md:p-12 bg-white flex flex-col justify-center items-center">
          <div className="flex flex-col gap-4" style={{ width: "65%" }}>
            <div
              className="md:text-xl text-sm text-center"
              style={{ color: "#292929", letterSpacing: "1px" }}
            >
              {testimonial[0].content}
            </div>
            <div className="flex flex-col items-center">
              <div
                className="text-lg text-center font-bold"
                style={{ color: "orange", letterSpacing: "1px" }}
              >
                {testimonial[0].name}
              </div>
              <div
                className="text-base text-center"
                style={{ color: "#404040", letterSpacing: "1px" }}
              >
                {testimonial[0].profession} {testimonial[0].place}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallary */}
      <div>
        <div
          className="bg-white h-36 flex justify-center items-center text-4xl font-bold"
          style={{ color: "#292929" }}
        >
          Gallary
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-0">
          <div className="flex justify-center">
            <Image
              src="/gallery-10.jpg"
              alt="gallary5"
              width={400}
              height={500}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/gallery-9.jpg"
              alt="gallary5"
              width={400}
              height={500}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/gallery-11.jpg"
              alt="gallary5"
              width={400}
              height={500}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/gallery-12.jpg"
              alt="gallary5"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
