import React from "react";

function Cards() {
  return (
    <div
      name="Pricing"
      className="w-full py-[10rem] px-4 bg-white  bg-gradient-to-r from-slate-500 to-yellow-100"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src="https://th.bing.com/th/id/OIG.4Ub7Oy9F2ZLW4xzhpiC8?pid=ImgGn"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#f6f86f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-400 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src="https://th.bing.com/th/id/OIG.agn44eEAxEyg1tP7jXA0?pid=ImgGn"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Two User</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 3.5 GB</p>
          </div>
          <button className="bg-black text-[#f6f86f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className=" w-20 mx-auto mt-[-3rem]"
            src="https://th.bing.com/th/id/OIG.JmYsxMkZdyYgJ_kIl.ET?pid=ImgGn"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Multiple Users
          </h2>
          <p className="text-center text-4xl font-bold">$599</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">2 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 5 GB</p>
          </div>
          <button className="bg-[#f6f86f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
