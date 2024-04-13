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
        <div className="relative flex flex-col justify-center items-center w-full z-10">
          <span className="text-4xl md:text-7xl xl:text-8xl text-white">
            HOW WE WORK
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
              Share At Door Step makes it super easy for you to make non-cash
              donations. Don’t we all have a lot of clothes, books, and other
              household goods just lying at some corner and getting dusted. It’s
              time to give them a new life by donating them to those who in need
              and bring smiles on their faces!! Just schedule a pickup and get
              the donations picked up from your doorstep. Now Spreading
              Happiness is just a click away!!
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
          <div className="flex flex-col  w-full h-full justify-center items-center px-10 py-10 text-white">
            <h3 className="text-3xl font-bold ml-6 ">
              How to Schedule a pickup?
            </h3>

            <ul className="space-y-4 list-inside">
              <li>
                <ol className="ps-5 my-4 mb-24 space-y-1 list-decimal list-inside ">
                  <li className="text-xl">
                    Go to our Home page and enter your location.
                  </li>
                  <li className="text-xl">
                    Choose the option that you want to avail- Doorstep pickup
                    (to avail a pickup) or Drop off (in case you want to drop
                    off the items yourself).
                  </li>
                  <li className="text-xl">
                    Select a convenient slot, fill in your details, and schedule
                    a pickup.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
