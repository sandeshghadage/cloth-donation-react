// import FlowByteButton from "./ui/button";
// import FlowByteTimeline from "./ui/timeLIne";
// import FlowByteModal from "./ui/modal";
// import FlowByteDropdown from "./ui/dropdown";
// import FlowByteNewsletter from "./ui/newsletter";
import Link from "next/link";
import Image from "next/image";
import FlowByteCarousel from "./ui/carousel";
import { url } from "inspector";

export default function Home() {
  return (
    <>
      <div className=" border" style={{ height: "350px", overflow: "hidden" }}>
        {/* <FlowByteCarousel /> */}
        <img
          src="/Donations.jpg"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>

      <div className="flex w-full justify-center gap-3 p-3 pt-8 bg-white">
        {/* <Link
          href="/form"
          className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Schedule Pickup
        </Link> */}
        <Link href="/form" class="button-85" role="button">
          Schedule Pickup
        </Link>
      </div>
      {/* <div className="bg-white">
        <button class="button-85" role="button">
          Button 85
        </button>
      </div> */}
      <div className="w-full ml-auto bg-white mr-auto">
        <div className="flex justify-center">
          <Image src="/timeline.png" alt="My SVG" width={400} height={500} />
        </div>
      </div>
      <div className="w-full min-h-52 ">
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
                {[1, 2, 3].map((item, index) => {
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

                                // ont-size: 26px;
                                // font-weight: 400;
                                // letter-spacing: 0px;
                                // text-transform: none;
                                // color: #ff6f61;
                              >
                                We seek to drive change on large scale
                              </h5>
                            </div>
                            <div>
                              <span
                                style={{
                                  fontSize: "16px",
                                  color: "white",
                                  lineHeight: "1.7px",
                                  // font-size: 16px;
                                  // line-height: 1.7;
                                }}
                              >
                                Towards the end of the 19th century, with the
                                advent of the New Liberalism and the innovative
                                work of Charles
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
      </div>
    </>
  );
}
