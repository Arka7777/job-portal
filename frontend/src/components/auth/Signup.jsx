import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../../../../utils/constant.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store.js";
import { setloading } from "../../redux/authslice.js";


export default function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const {loading}=useSelector(store=>store.auth)
  const nevigate = useNavigate();
  const dispatch=useDispatch()

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setloading(true))
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          'Content-Type': "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        nevigate("/login");
        // toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    finally{
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
          <h1 className="text-2xl font-bold mb-5">Sign Up</h1>
          <div className="my-2">
            <p className="text-zinc-900 font-bold font-serif">Full Name</p>
            <input
              className="border border-gray-400 rounded-md px-2 py-1 mt-2"
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="biswas"
            />
          </div>
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
            <p className="text-zinc-900 font-bold font-serif">Phone Number</p>
            <input
              className="border border-gray-400 rounded-md px-2 py-1 mt-2"
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="1234567890"
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
          <div>
            <p className="text-zinc-900 font-bold font-serif">Profile </p>
            <input
              type="file"
              name="file"
              accept="image/*"
              className="cursor-pointer m-3 "
              onChange={changeFileHandler}
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
            Signup
          </button>
          }
          
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 font-bold ">
              {" "}
              Login
            </Link>{" "}
          </span>
        </form>
      </div>
    </>
  );
}
