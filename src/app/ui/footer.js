import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import "../globals.css";

export default function FlowByteFooter() {
  return (
    <Footer container style={{ padding: "0px" }}>
      <div className="flex flex-col px-0 py-0 my-0 mx-0 ">
        <div className="w-full  pb-10 pt-10  md:pb-12 md:pt-16">
          <div className="px-6  grid grid-cols-1 gap-10  md:px-8 md:grid-cols-3 md:gap-0">
            <div className=" px-10  first-container md:px-5 xl:px-16">
              <div className="flex flex-col gap-6 md:gap-8 ">
                <div>
                  <Image
                    src="/logofooter.jpg"
                    alt="My SVG"
                    width={200}
                    height={200}
                  />
                </div>
                <span className="tx-lg">
                  Working towards the mission of “Har Tan Kapda”. Our mission is
                  to provide neat and clean clothes to each and every individual
                  who is in need.
                </span>
                <div className="grid grid-cols-7 gap-0 social-icons md:grid-cols-5">
                  <FooterIcon
                    href="https://www.linkedin.com/company/100885923/admin/feed/posts/"
                    icon={FaLinkedin}
                    style={{ color: "#392993", height: "20px", width: "20px" }}
                  />
                  <FooterIcon
                    href="#"
                    icon={BsFacebook}
                    style={{ color: "#392993", height: "20px", width: "20px" }}
                  />
                  <FooterIcon
                    href="#"
                    icon={BsInstagram}
                    style={{ color: "#392993" }}
                  />
                  <FooterIcon
                    href="#"
                    icon={BsTwitter}
                    style={{ color: "#392993" }}
                  />
                </div>
              </div>
            </div>
            <div className=" px-10  first-container md:px-5 xl:px-16">
              <div className="flex flex-col gap-4 md:gap-6">
                <p className="text-[#392993] font-bold text-3xl ">Contact Info</p>

                <span className=" flex flex-row gap-2 ">
                  <p>
                    114A, Janpath Brijmandal Calony Kalwar Road Jaipur
                    Rajasthan  302012
                  </p>
                </span>
                <span className=" flex flex-row gap-2">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#392993"
                    viewBox="0 0 24 24"
                  >
                    <path d="m3.62 6.389 8.396 6.724 8.638-6.572-7.69-4.29a1.975 1.975 0 0 0-1.928 0L3.62 6.39Z" />
                    <path d="m22 8.053-8.784 6.683a1.978 1.978 0 0 1-2.44-.031L2.02 7.693a1.091 1.091 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043V8.053Z" />
                  </svg>

                  <p>agarwalritesh11@gmail.com</p>
                </span>
                <span className=" flex flex-row gap-2">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    fill="#392993"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                  </svg>

                  <p>+91 99535 93261</p>
                </span>
              </div>
            </div>
            <div className=" px-10  first-container md:px-5 xl:px-16">
              <div className=" flex flex-col gap-8 items-start  h-full">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <span className="tx-sm md:tx-base">Privacy Policy</span>
                  <div
                    className="h-10 w-0.5"
                    style={{ backgroundColor: "#392993" }}
                  ></div>{" "}
                  <span className="tx-sm md:tx-base">Terms Of Use</span>
                </div>
                <div>Copyright 2024 Chariti Theme, All Right Reserved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
