import React from "react";
import { FaSearch } from "react-icons/fa";

export default function HeroSection() {
  return (
    <>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
        <span className="px-4 mx-auto py-2 shadow-xl rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Hunt Website
          
        </span>
        <h1 className="font-bold text-5xl">
          Search,Apply & <br /> Get your{" "}
          <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elaceat magni?</p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 rounded-lg items-center m-auto p-1">
          <input type="text"placeholder="Find your dream job" className="outline-none border-none w-full"/>
          <button className="">
            <FaSearch className="h-5 w-5"/>
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
