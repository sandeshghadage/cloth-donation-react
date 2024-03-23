// import FlowByteButton from "./ui/button";
// import FlowByteTimeline from "./ui/timeLIne";
// import FlowByteModal from "./ui/modal";
// import FlowByteDropdown from "./ui/dropdown";
// import FlowByteNewsletter from "./ui/newsletter";
import Link from "next/link";
import Image from "next/image";
import FlowByteCarousel from "./ui/carousel";
// import FlowByteCarousel from "./ui/carousel";

export default function Home() {
  return (
    <>
      <div className="h-50 border-2">{/* <FlowByteCarousel /> */}</div>

      <div className="flex w-full justify-center gap-3 p-3 bg-white">
        <Link
          href="/form"
          className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Schedule Pickup
        </Link>
      </div>
      <div className="w-full ml-auto bg-white mr-auto">
        <div className="flex justify-center">
          <Image src="/timeline.png" alt="My SVG" width={400} height={500} />
        </div>
      </div>
    </>
  );
}
