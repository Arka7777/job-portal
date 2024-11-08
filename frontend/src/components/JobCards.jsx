import React from "react";

export default function JobCards() {
  return (
    <>
      <div className="p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer">
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p  className="text-sm text-gray-500">India</p>
        </div>
        <div>
          <h1 className="font-bold text-lg my-2">Job Title</h1>
          <p className="tex-sm text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consnte
            voluptas et quisquam aliquid?
          </p>
        </div>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-blue-600  rounded-md m-auto px-2 font-semibold py-1 shadow-md ">
            10 Positions
          </span>
          <span className="text-red-500 rounded-md m-auto px-2 font-semibold py-1 shadow-md">
            Part-time
          </span>
          <span className="text-cyan-400 rounded-md m-auto px-2 font-semibold py-1 shadow-md">
            20LPA
          </span>
        </div>
      </div>
    </>
  );
}
