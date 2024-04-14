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
        <div className="absolute inset-0  bg-opacity-40"></div>
        <div className="relative flex flex-col justify-center items-center w-full z-10">
          <span className="text-4xl md:text-7xl xl:text-8xl text-white">
            How We Work
          </span>
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
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2   w-full ">
        <div
          className="relative  min-h-full flex flex-col"
          style={{
            backgroundImage: 'url("/bg6.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "80vh",
          }}
        >
          {/* Overlay with faded color */}
          <div
            className="absolute inset-0 bg-white bg-opacity-50"
            style={{
              zIndex: 0,
              backgroundColor: "#392993",
              opacity: 0.5,
            }}
          ></div>

          <div className=" absolute inset-0 flex flex-col justify-center items-center w-full md:px-16 px-8 py-20 ">
            <p className="mb-3 font-normal text-white dark:text-white text-xl">
              Do you want to clear out clutter and do something meaningful at
              the same time? Old Cloth Foundation Step provides the perfect
              solution. Donate your gently used clothes, books, and other
              household goods and help those less fortunate. Not only will you
              declutter your home, but you'll also experience the heartwarming
              feeling of making a difference. Their convenient doorstep pickup
              service makes the process effortless.
            </p>
          </div>
        </div>
        <div className="relative  min-h-full flex flex-col">
          <div
            className="absolute inset-0 bg-white bg-opacity-80"
            style={{
              zIndex: -5,
              backgroundColor: "#392993",
              opacity: 0.8,
            }}
          ></div>
          {/* <div className="flex flex-col  w-full h-full justify-center items-center px-10 py-10 text-white">
            <h3 className="text-3xl font-bold ml-6 ">
              How to Schedule a pickup?
            </h3>

            <ul className="space-y-4 list-inside">
              <li>
                <ol className="ps-5 my-4 mb-24 space-y-1 ">
                  <li className="text-xl">
                    Start on our Home page. Find the location field and enter
                    your address.
                  </li>
                  <li className="text-xl">
                    <div className="font-bold">2. Choose your service: </div>
                    <ol>
                      <div className="font-bold">
                        Doorstep Pickup: We'll come to you! Drop-Off: Prefer to
                      </div>
                      <div className="font-bold">
                        bring your items to us? Select this option.
                      </div>
                    </ol>
                  </li>
                  <li className="text-xl">
                    <div className="font-bold">
                      Pick a time that works for you. View the available slots
                      and select the one that fits your schedule. Enter your
                      contact details and confirm your selection.
                    </div>
                  </li>
                </ol>
              </li>
            </ul>
          </div> */}
          <div className="flex flex-col  w-full h-full justify-center mr-2 px-10 py-10 container mx-auto p-6 text-white">
            <h2 className="mb-4 text-2xl font-bold ml-6">
              How to Schedule a Pickup or Drop-Off
            </h2>

            <ol className="list-outside list-decimal pl-6">
              <li className="mb-3">
                <p className="mb-1">
                  <span className="font-bold">Start on our Home page:</span>{" "}
                  Find the location field and enter your address.
                </p>
              </li>
              <li className="mb-3">
                <p className="mb-1 font-semibold">Choose your service:</p>
                <ul className="list-inside list-disc">
                  <li>Doorstep Pickup: We'll come to you!</li>
                  <li>
                    Drop-Off: Prefer to bring your items to us? Select this
                    option.
                  </li>
                </ul>
              </li>
              <li>
                <p className="mb-1">
                  <span className="font-bold">
                    Pick a time that works for you:{" "}
                  </span>{" "}
                  View the available slots and select the one that fits your
                  schedule. Enter your contact details and confirm your
                  selection.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
