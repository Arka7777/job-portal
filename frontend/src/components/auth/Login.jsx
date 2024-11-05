import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import toast from "../toast";
import axios from "axios";
import { USER_API_END_POINT } from "../../../../utils/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setloading } from "../../redux/authslice.js";
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Login() {
  const [input, setInput] = useState({
    email: "",

    password: "",
    role: "",
  });
  const {loading}=useSelector(store=>store.auth)
const nevigate=useNavigate()
const dispatch=useDispatch()
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setloading(true))
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res.data.success)
      if (res.data.success) {
        nevigate("/");
        // toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally{
      dispatch(setloading(false))
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-r-gray-200 rounded-md p-4 my-10 "
        >
          <h1 className="text-2xl font-bold mb-5">Login</h1>

          <div className="my-2">
            <p className="text-zinc-900 font-bold font-serif">Email</p>
            <input
              className="border border-gray-400 rounded-md px-2 py-1 mt-2"
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="biswas@gmail.com"
            />
          </div>

          <div className="my-2">
            <p className="text-zinc-900 font-bold font-serif">Password</p>
            <input
              className="border border-gray-400 rounded-md px-2 py-1 mt-2"
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="abcd"
            />
          </div>
          <div
            className="gap-2 flex btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className=" cursor-pointer btn-check"
              name="role"
              id="btnradio1"
              autocomplete="off"
              checked={input.role == "student"}
              onChange={changeEventHandler}
              value="student"
            />
            <label class="btn btn-outline-primary" for="btnradio1">
              Student
            </label>

            <input
              type="radio"
              className="btn-check cursor-pointer"
              name="role"
              id="btnradio2"
              autocomplete="off"
              checked={input.role == "recruiter"}
              onChange={changeEventHandler}
              value="recruiter"
            />
            <label class="btn btn-outline-primary" for="btnradio2">
              Recruiter
            </label>
          </div>
          {
            loading? <button><AiOutlineLoading3Quarters />please wait</button>:<button
            className="w-full bg-zinc-900 hover:bg-zinc-600 rounded-md text-white font-bold text-1xl py-1 my-4"
            type="submit"
          >
            Login
          </button>
          }
          
          <span>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700 font-bold ">
              {" "}
              Sign up
            </Link>{" "}
          </span>
        </form>
      </div>
    </>
  );
}
