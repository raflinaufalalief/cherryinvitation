import React, { useState } from "react";
import logo from "../assets/signup.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <>
      <h1 className="mt-6 mb-4 text-3xl font-bold text-center">Sign Up</h1>
      <p className="mb-4 text-center ">Daftar Sebagai </p>
      <div className="flex flex-wrap items-center justify-center max-w-6xl px-6 py-12 mx-auto ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src={logo} alt="login" className="w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border-2 rounded border-secondary"
              type="name"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
            />
            <input
              className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border-2 rounded border-secondary"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
            />
            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 transition ease-in-out bg-white border-2 rounded border-secondary "
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Create a password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute text-xl right-3 top-3 cursor pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute text-xl right-3 top-3 cursor pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between text-sm ">
              <p className="mb-6">
                Have account?
                <Link
                  to="/sign-up"
                  className="ml-1 text-red-600 transition duration-200 ease-in-out hover:text-red-700"
                >
                  Sign in
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password?"
                  className="text-blue-600 transition duration-200 ease-in-out hover:text-blue-700"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
              className="w-full py-3 text-sm font-medium text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Sign up
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="mx-4 font-semibold text-center">OR</p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 text-sm font-medium text-white uppercase transition duration-150 ease-in-out bg-red-700 rounded shadow-md px-7 hover:bg-red-800 active:bg-red-900 hover:shadow-lg active:shadow-lg"
            >
              <FcGoogle className="mr-2 text-2xl bg-white rounded-full" />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
