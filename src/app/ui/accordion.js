// import {
//   Accordion,
//   AccordionContent,
//   AccordionPanel,
//   AccordionTitle,
// } from "flowbite-react";

// export default function FlowByteAccordion() {
//   return (
//     <>
//       <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight m-10 text-center text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
//         Frequently Asked Questions
//       </h1>
//       <Accordion collapseAll className=" w-4/5  mx-auto my-10 mb-32">
//         <AccordionPanel>
//           <AccordionTitle>What is Flowbite?</AccordionTitle>
//           <AccordionContent>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Flowbite is an open-source library of interactive components built
//               on top of Tailwind CSS including buttons, dropdowns, modals,
//               navbars, and more.
//             </p>
//             <p className="text-gray-500 dark:text-gray-400">
//               Check out this guide to learn how to&nbsp;
//               <a
//                 href="https://flowbite.com/docs/getting-started/introduction/"
//                 className="text-cyan-600 hover:underline dark:text-cyan-500"
//               >
//                 get started&nbsp;
//               </a>
//               and start developing websites even faster with components on top
//               of Tailwind CSS.
//             </p>
//           </AccordionContent>
//         </AccordionPanel>
//         <AccordionPanel>
//           <AccordionTitle>Is there a Figma file available?</AccordionTitle>
//           <AccordionContent>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Flowbite is first conceptualized and designed using the Figma
//               software so everything you see in the library has a design
//               equivalent in our Figma file.
//             </p>
//             <p className="text-gray-500 dark:text-gray-400">
//               Check out the
//               <a
//                 href="https://flowbite.com/figma/"
//                 className="text-cyan-600 hover:underline dark:text-cyan-500"
//               >
//                 Figma design system
//               </a>
//               based on the utility classes from Tailwind CSS and components from
//               Flowbite.
//             </p>
//           </AccordionContent>
//         </AccordionPanel>
//         <AccordionPanel>
//           <AccordionTitle>
//             What are the differences between Flowbite and Tailwind UI?
//           </AccordionTitle>
//           <AccordionContent>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               The main difference is that the core components from Flowbite are
//               open source under the MIT license, whereas Tailwind UI is a paid
//               product. Another difference is that Flowbite relies on smaller and
//               standalone components, whereas Tailwind UI offers sections of
//               pages.
//             </p>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               However, we actually recommend using both Flowbite, Flowbite Pro,
//               and even Tailwind UI as there is no technical reason stopping you
//               from using the best of two worlds.
//             </p>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Learn more about these technologies:
//             </p>
//             <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
//               <li>
//                 <a
//                   href="https://flowbite.com/pro/"
//                   className="text-cyan-600 hover:underline dark:text-cyan-500"
//                 >
//                   Flowbite Pro
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://tailwindui.com/"
//                   rel="nofollow"
//                   className="text-cyan-600 hover:underline dark:text-cyan-500"
//                 >
//                   Tailwind UI
//                 </a>
//               </li>
//             </ul>
//           </AccordionContent>
//         </AccordionPanel>
//         <AccordionPanel>
//           <AccordionTitle>Is there a Figma file available?</AccordionTitle>
//           <AccordionContent>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Flowbite is first conceptualized and designed using the Figma
//               software so everything you see in the library has a design
//               equivalent in our Figma file.
//             </p>
//             <p className="text-gray-500 dark:text-gray-400">
//               Check out the
//               <a
//                 href="https://flowbite.com/figma/"
//                 className="text-cyan-600 hover:underline dark:text-cyan-500"
//               >
//                 Figma design system
//               </a>
//               based on the utility classes from Tailwind CSS and components from
//               Flowbite.
//             </p>
//           </AccordionContent>
//         </AccordionPanel>
//         <AccordionPanel>
//           <AccordionTitle>
//             What are the differences between Flowbite and Tailwind UI?
//           </AccordionTitle>
//           <AccordionContent>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               The main difference is that the core components from Flowbite are
//               open source under the MIT license, whereas Tailwind UI is a paid
//               product. Another difference is that Flowbite relies on smaller and
//               standalone components, whereas Tailwind UI offers sections of
//               pages.
//             </p>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               However, we actually recommend using both Flowbite, Flowbite Pro,
//               and even Tailwind UI as there is no technical reason stopping you
//               from using the best of two worlds.
//             </p>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Learn more about these technologies:
//             </p>
//             <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
//               <li>
//                 <a
//                   href="https://flowbite.com/pro/"
//                   className="text-cyan-600 hover:underline dark:text-cyan-500"
//                 >
//                   Flowbite Pro
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://tailwindui.com/"
//                   rel="nofollow"
//                   className="text-cyan-600 hover:underline dark:text-cyan-500"
//                 >
//                   Tailwind UI
//                 </a>
//               </li>
//             </ul>
//           </AccordionContent>
//         </AccordionPanel>
//         <AccordionPanel>
//           <AccordionTitle>Is there a Figma file available?</AccordionTitle>
//           <AccordionContent>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Flowbite is first conceptualized and designed using the Figma
//               software so everything you see in the library has a design
//               equivalent in our Figma file.
//             </p>
//             <p className="text-gray-500 dark:text-gray-400">
//               Check out the
//               <a
//                 href="https://flowbite.com/figma/"
//                 className="text-cyan-600 hover:underline dark:text-cyan-500"
//               >
//                 Figma design system
//               </a>
//               based on the utility classes from Tailwind CSS and components from
//               Flowbite.
//             </p>
//           </AccordionContent>
//         </AccordionPanel>
//         <AccordionPanel>
//           <AccordionTitle>
//             What are the differences between Flowbite and Tailwind UI?
//           </AccordionTitle>
//           <AccordionContent>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               The main difference is that the core components from Flowbite are
//               open source under the MIT license, whereas Tailwind UI is a paid
//               product. Another difference is that Flowbite relies on smaller and
//               standalone components, whereas Tailwind UI offers sections of
//               pages.
//             </p>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               However, we actually recommend using both Flowbite, Flowbite Pro,
//               and even Tailwind UI as there is no technical reason stopping you
//               from using the best of two worlds.
//             </p>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Learn more about these technologies:
//             </p>
//             <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
//               <li>
//                 <a
//                   href="https://flowbite.com/pro/"
//                   className="text-cyan-600 hover:underline dark:text-cyan-500"
//                 >
//                   Flowbite Pro
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://tailwindui.com/"
//                   rel="nofollow"
//                   className="text-cyan-600 hover:underline dark:text-cyan-500"
//                 >
//                   Tailwind UI
//                 </a>
//               </li>
//             </ul>
//           </AccordionContent>
//         </AccordionPanel>
//       </Accordion>
//     </>
//   );
// }

import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export default function FlowByteAccordion() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight m-10 text-center text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        Frequently Asked Questions
      </h1>
      <Accordion collapseAll className="w-4/5 mx-auto my-10 mb-32">
        <AccordionPanel className="border-b border-gray-200">
          <AccordionTitle className="flex justify-between items-center py-4 px-6 bg-gray-100 text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200">
            What is Flowbite?
          </AccordionTitle>
          <AccordionContent className="px-6 py-4 bg-white border-l border-r border-b border-gray-200">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="border-b border-gray-200">
          <AccordionTitle className="flex justify-between items-center py-4 px-6 bg-gray-100 text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200">
            Is there a Figma file available?
          </AccordionTitle>
          <AccordionContent className="px-6 py-4 bg-white border-l border-r border-b border-gray-200">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                href="https://flowbite.com/figma/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="border-b border-gray-200">
          <AccordionTitle className="flex justify-between items-center py-4 px-6 bg-gray-100 text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200">
            What are the differences between Flowbite and Tailwind UI?
          </AccordionTitle>
          <AccordionContent className="px-6 py-4 bg-white border-l border-r border-b border-gray-200">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </>
  );
}