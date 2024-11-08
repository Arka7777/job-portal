import React from "react";
import { Link } from "react-router-dom";

import avatar from "../assets/avatar.avif";
import { IoIosLogOut } from "react-icons/io";


export default function Navbar() {
  const user = false;
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div className="lg:px-1">
            <h1 className=" font-bold text-2xl">
              Job<span className="text-red-700">Portal</span>
            </h1>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <ul className="flex font-medium items-center gap-5">
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/jobs">Jobs</Link> </li>
                <li><Link to="/browse">Browse</Link> </li>
                
              </ul>
              {!user ? (
                <div className="flex gap-2">
                  <Link to="/login">
                    <button className=" border-[2px] border-transparent font-bold hover:bg-zinc-300 hover:text-red-600 rounded-sm px-1 py-1  ">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="bg-black hover:bg-red-600 text-white rounded-sm font-medium px-1 border-[2px] border-transparent py-1 ">
                      Sign Up
                    </button>
                  </Link>
                </div>
              ) : (
                <>
                  <div>
                    <img
                      className="size-[40px] rounded-2xl cursor-pointer "
                      src={avatar}
                      alt=""
                    />
                  </div>
                  <div>
                    <button className="bg-zinc-300 rounded-md px-2 py-1 font-bold ">
                      Profile
                    </button>
                  </div>
                  <div>
                    <button className="rounded-md px-2 py-1 font-extrabold text-red-600 text-3xl">
                      {" "}
                      <IoIosLogOut />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
