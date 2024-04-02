"use client";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { useState } from "react";

export default function FlowByteAccordion() {
  const faqs = [
    {
      question: "How can I donate clothes through your website?",
      answer:
        "You can easily donate clothes through our website by clicking the 'Schedule a pickup' option on the homepage. From there, you'll be guided through a simple process to fill out your donation details and schedule a drop-off or pick-up.",
    },
    {
      question: "What types of clothing items do you accept for donation?",
      answer:
        "We accept a wide range of clothing items including shirts, pants, dresses, jackets, coats, sweaters, shoes, and accessories like hats, scarves, and gloves.",
    },
    {
      question: "Do you accept new or gently used clothing?",
      answer:
        "Yes, we accept both new and gently used clothing items. We appreciate donations in good condition to ensure they can be of use to those in need.",
    },
    {
      question:
        "Is there a minimum or maximum amount of clothing I can donate?",
      answer:
        "There is no minimum or maximum limit for clothing donations. We welcome any contributions you're willing to make.",
    },
    {
      question: "Where can I drop off my donated clothing?",
      answer:
        "You can drop off your donated clothing at any of our designated collection points, which are conveniently located throughout the community. You can find the nearest drop-off location on our website.",
    },
    {
      question: "Do you offer pick-up services for clothing donations?",
      answer:
        "Yes, we offer pick-up services for larger donations or for individuals who are unable to drop off their clothing items. Simply schedule a pick-up through our website, and we'll arrange a convenient time to collect your donations.",
    },
    {
      question: "What happens to the clothes after I donate them?",
      answer:
        "Donated clothes are sorted, cleaned if necessary, and distributed to individuals and families in need through various local charities and organizations.",
    },

    {
      question:
        "Can I donate clothing accessories like shoes, belts, and handbags?",
      answer:
        "Absolutely! We welcome donations of clothing accessories in addition to clothing items.",
    },
    {
      question: "Do you accept donations of children's clothing?",
      answer:
        "Yes, we accept donations of children's clothing in all sizes, from infants to teenagers.",
    },
  ];

  const [question, setQuestion] = useState(faqs);

  return (
    <>
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight m-10 text-center text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        Frequently Asked Questions
      </h1>
      <Accordion collapseAll className="w-4/5 mx-auto my-10 mb-32">
        {question.map((item, index) => {
          return (
            <AccordionPanel className="">
              <AccordionTitle className="flex justify-between items-center py-4 px-6 bg-gray-100 text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200">
                {item.question}
              </AccordionTitle>
              <AccordionContent className="px-6 py-4 bg-white border-l border-r border-b border-gray-200">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionPanel>
          );
        })}
      </Accordion>
    </>
  );
}
