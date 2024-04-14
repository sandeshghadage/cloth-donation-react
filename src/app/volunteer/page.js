export default function Volunteer() {
  return (
    <>
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
            Become a Volunteer
          </span>
        </div>
      </div>

      <ol className="space-y-4 text-white list-none list-inside  p-6 bg-[#392993]">
        <li className="">
          <span className="font-extrabold text-4xl">
            Join Our Mission of Clothing and Caring
          </span>
          <div className="mt-4">
            "Do you have a passion for helping others and a desire to make a
            difference in your community? At Old Cloth Foundation, we believe
            that everyone deserves the dignity of warm clothing. We're a team of
            dedicated volunteers transforming gently used clothes into
            opportunities for the less fortunate. If you share our commitment to
            compassion, we invite you to join our team.
          </div>
        </li>
        <div>
          "Your time and talents have the power to change lives. As an Old Cloth
          Foundation volunteer, you won't just be sorting donations – you'll be
          providing warmth, comfort, and confidence to those in need. Every hour
          you volunteer makes a direct and meaningful impact on our community.
          Join our mission, and experience the joy of giving back.
        </div>

        <h2 className="text-2xl font-bold mb-4">Volunteer Opportunities</h2>

        <p className="mb-4">
          We're always looking for enthusiastic volunteers to help with:
        </p>

        <ul className="list-disc list-inside ml-6">
          <li>Sorting and organizing clothing donations</li>
          <li>Assisting with donation drives</li>
          <li>Distributing clothing to those in need</li>
          <li>Outreach and community engagement</li>
        </ul>

        <p className="pb-2">
          No experience is necessary – just a desire to help!
        </p>
        <div>
          Write to us at agarwalritesh11@gmail.com with your info mentioning
          what type of volunteering opportunities you are looking for.
        </div>
      </ol>
    </>
  );
}
