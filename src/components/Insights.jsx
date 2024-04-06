import React from "react";

function Insights() {
  return (
    <div
      name="Insight"
      className="w-full bg-[#F4FEFD] py-16 px-4 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 rounded-3xl"
          src="https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#242c30] font-bold ">
            Data Analysis, Simplified.
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Break Down Data Silos: Centralized Analytics for Unified Insights
          </h1>
          <p>
            Data analytics is a field that uses technology, statistical
            techniques and big data to identify patterns, extract insights and
            support decision-making. It involves the collection, processing and
            interpretation of structured and unstructured data. Data analytics
            can help organizations understand their customers, evaluate their ad
            campaigns, personalize content, create content strategies and
            develop products.
          </p>
          <button className="bg-black text-[#ffc519] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Insights;
