import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IoLogoDropbox } from "react-icons/io5";

export default function Job() {
  return (
    <>
      <div className="p-5 rounded-md shadow-xl bg-zinc-100 border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">2 Days ago</p>
          <button className="rounded-full  ">
            <FaRegBookmark />
          </button>
        </div>

        <div className="flex items-center gap-2 my-2 ">
          <button className="p-6 ">
            <IoLogoDropbox />
          </button>
          <div>
            <h1 className="font-medium text-lg">Company Name</h1>
            <p className="text-sm text-gray-600">India</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-lg my-2">Title</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolonctio quam maiores temporibumpedit velit.
          </p>
        </div>
        <div>
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
        <div className="flex items-center gap-4 mt-5  ">
          <button className="bg-zinc-200 rounded-sm
          p-1 font-semibold mx-auto my-auto border shadow-xl ">Details</button>
          <button className="bg-zinc-200 rounded-sm border shadow-xl
          p-1 font-semibold ">Save For Later</button>
        </div>
      </div>
    </>
  );
}
