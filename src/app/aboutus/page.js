export default function AboutUS() {
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
            HOW WE WORK
          </span>
        </div>

        {/* <div className=" w-full  md:py-16 h-full xl:py-24  ">
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
      </div> */}

        {/* <h1 className=" text-2xl underline font-extrabold leading-none tracking-tight m-10 text-center text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        HOW WE WORK
      </h1>
      <div className="flex flex-wrap">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3  dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg mx-auto"
              src="https://shareatdoorstep.com/wp-content/uploads/2018/07/icon1-300x250.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Schedule a Pickup
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Enter the pickup location, and schedule a pickup. *convenience fee
              applicable. You can also choose to go for the drop off option in
              case you want to drop the donations yourself.
            </p>
            
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3 dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg mx-auto"
              src="https://shareatdoorstep.com/wp-content/uploads/2018/07/iconvannew-1-300x200.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Donate at your Doorstep
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We will come to your doorstep to pick up the donations in the
              chosen slot and deliver them to the NGO where they can be given a
              new life.
            </p>
          
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3 dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg mx-auto"
              src="https://shareatdoorstep.com/wp-content/uploads/2018/07/icon3-300x250.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Get Rewards
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our brand partners provide our donors gifts* as a “gesture of
              thanks” for making a difference. Be ready to get surprised!
            </p>
            
          </div>
        </div>
      </div>
      <hr className="my-12 border-t-2 border-gray-300 dark:border-gray-600" />
      <div className="mb-12 mx-6">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Share At Door Step makes it super easy for you to make non-cash
          donations. Don’t we all have a lot of clothes, books, and other
          household goods just lying at some corner and getting dusted. It’s
          time to give them a new life by donating them to those who in need and
          bring smiles on their faces!! Just schedule a pickup and get the
          donations picked up from your doorstep. Now Spreading Happiness is
          just a click away!!
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-bold dark:text-white ml-6">
          How to Schedule a pickup?
        </h3>

        <ul className="space-y-4 text-gray-500  list-inside dark:text-gray-400">
          <li>
            <ol className="ps-5 my-4 mb-24 space-y-1 list-decimal list-inside ">
              <li>Go to our Home page and enter your location.</li>
              <li>
                Choose the option that you want to avail- Doorstep pickup (to
                avail a pickup) or Drop off (in case you want to drop off the
                items yourself).
              </li>
              <li>
                Select a convenient slot, fill in your details, and schedule a
                pickup.
              </li>
            </ol>
          </li>
        </ul>
      </div> */}
      </div>
      {/* <div className=" w-full  min-h-full  border-2 border-red-500 flex flex-col ">
        <div className="w-full md:py-16 min-h-full xl:py-24 border-2 border-red-500 flex flex-col">
          <div className=" w-full xl:px-16 ">
            <div className="flex flex-wrap">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3  dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg mx-auto"
                    src="https://shareatdoorstep.com/wp-content/uploads/2018/07/icon1-300x250.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Schedule a Pickup
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Enter the pickup location, and schedule a pickup.
                    *convenience fee applicable. You can also choose to go for
                    the drop off option in case you want to drop the donations
                    yourself.
                  </p>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3 dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg mx-auto"
                    src="https://shareatdoorstep.com/wp-content/uploads/2018/07/iconvannew-1-300x200.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Donate at your Doorstep
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    We will come to your doorstep to pick up the donations in
                    the chosen slot and deliver them to the NGO where they can
                    be given a new life.
                  </p>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3 dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg mx-auto"
                    src="https://shareatdoorstep.com/wp-content/uploads/2018/07/icon3-300x250.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Get Rewards
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Our brand partners provide our donors gifts* as a “gesture
                    of thanks” for making a difference. Be ready to get
                    surprised!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div
        className="relative w-full min-h-full flex flex-col"
        style={{
          backgroundImage: 'url("/bgabout.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "80vh",
        }}
      >
        {/* Overlay with faded color */}
        <div
          className="absolute inset-0 bg-white bg-opacity-80"
          style={{ zIndex: 0 }}
        ></div>

        {/* Content */}
        <div className="w-full md:py-16 min-h-full xl:py-24 flex flex-col relative z-10">
          <div className="w-full xl:px-16">
            <div className="flex flex-wrap">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3  dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg mx-auto"
                    src="https://shareatdoorstep.com/wp-content/uploads/2018/07/icon1-300x250.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Schedule a Pickup
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Enter the pickup location, and schedule a pickup.
                    *convenience fee applicable. You can also choose to go for
                    the drop off option in case you want to drop the donations
                    yourself.
                  </p>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3 dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg mx-auto"
                    src="https://shareatdoorstep.com/wp-content/uploads/2018/07/iconvannew-1-300x200.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Donate at your Doorstep
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    We will come to your doorstep to pick up the donations in
                    the chosen slot and deliver them to the NGO where they can
                    be given a new life.
                  </p>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3 dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg mx-auto"
                    src="https://shareatdoorstep.com/wp-content/uploads/2018/07/icon3-300x250.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Get Rewards
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Our brand partners provide our donors gifts* as a “gesture
                    of thanks” for making a difference. Be ready to get
                    surprised!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-12 mx-6">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Share At Door Step makes it super easy for you to make non-cash
            donations. Don’t we all have a lot of clothes, books, and other
            household goods just lying at some corner and getting dusted. It’s
            time to give them a new life by donating them to those who in need
            and bring smiles on their faces!! Just schedule a pickup and get the
            donations picked up from your doorstep. Now Spreading Happiness is
            just a click away!!
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold dark:text-white ml-6">
            How to Schedule a pickup?
          </h3>

          <ul className="space-y-4 text-gray-500  list-inside dark:text-gray-400">
            <li>
              <ol className="ps-5 my-4 mb-24 space-y-1 list-decimal list-inside ">
                <li>Go to our Home page and enter your location.</li>
                <li>
                  Choose the option that you want to avail- Doorstep pickup (to
                  avail a pickup) or Drop off (in case you want to drop off the
                  items yourself).
                </li>
                <li>
                  Select a convenient slot, fill in your details, and schedule a
                  pickup.
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
