import React from "react";
import Navbar from "./Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Jobs() {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto mt-5">
          <div className="flex gap-5">
            <div className="w-20%">
              <FilterCard />
            </div>
            {
              jobsArray.length<=0?<span>No Jobs Found</span>:(
                <div className="flex-1 h-[80vh] overflow-y-auto pb-5"> 
                <div className="grid grid-cols-3 gap-4">
                  {
                    jobsArray.map((item, index) => (
                      <div>
                        <Job/>
                      </div>
                    ))
                  }

                </div>

                </div>
              )

            }
          </div>
        </div>
      </div>
      {/* filter at left  */}
      {/* job card at right */}
    </>
  );
}
