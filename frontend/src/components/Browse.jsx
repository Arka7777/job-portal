import React from "react";
import Navbar from "./Navbar";
import Job from "./Job";
const randomJobs = [1, 2, 3,4,5];

export default function Browse() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl ">Search Results : ({randomJobs.length})</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
        {randomJobs.map((item, index) => {
          return <Job />;
        })}
        </div>
      </div>
    </>
  );
}
