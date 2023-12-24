import React from "react";
import Typed from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#36fff5] font-bold p-2">
          POWERING YOUR SaaS JOURNEY
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Unlock Growth
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"></p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2  text-[#87bffd]"
            strings={[
              "BTB",
              "BTC",
              "SASS",
              "MVP",
              "CRM",
              "ERP",
              "ROI",
              "UX",
              "UI",
              "API",
              "PaaS",
              "IaaS",
              "SaaS",
              "DaaS",
              "CaaS",
              "IoTaaS",
              "B2B",
              "B2C",
              "B2G",
              "B2E",
              "B2P",
              "O2O",
              "B2B2C",
              "A/B Testing",
              "SEO",
              "SEM",
              "PPC",
              "KPI",
              "OKR",
              "ABM",
              "CX",
              "NPS",
              "CTA",
              "UGC",
              "P2P",
              "AI",
              "ML",
              "DL",
              "NLP",
              "AR",
              "VR",
              "IoT",
              "Blockchain",
              "Big Data",
              "Cybersecurity",
              "FinTech",
              "EdTech",
              "MarTech",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>{" "}
        <br />
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Maximize your BTB, BTC, & SaaS revenue potential through data-driven
          insights.
        </p>
        <button className="bg-[#ffc519] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
