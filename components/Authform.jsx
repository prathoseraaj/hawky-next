import React from "react";

const Authform = ({ type = "signin", onsumbit, showForgotPassword = true }) => {
  const isSignUp = (type = "signup");

  const handleSumbit = (e) => {
    e.preventDefalut();
    if (onsumbit) {
      onsumbit();
    }
  };

  return (
    <div className="h-[70vh] w-[500px] bg-white-100 flex flex-col  bg-white shadow-sm rounded-[20px]">
      <div className="items-center">
        <img
          src="/logo.jpeg"
          alt="logo"
          height={500}
          width={500}
          className="mt-10 -mb-5"
        />
      </div>
      <h1 className="text-[20px] font-bold ml-15 mt-10 -mb-5">Sign-In</h1>
      <div className="flex flex-col gap-7 ml-15 mt-10">
        <input
          type="email"
          className="w-[380px] h-[40px] border rounded  pl-5"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-[380px] h-[40px] border rounded pl-5  "
          placeholder="Password"
        />
      </div>
      <p className="ml-15 mt-5 text-[13px] font-bold text-green-600">
        Forgot Password?
      </p>
      <button
        type="button"
        className="w-[380px] h-[40px] mt-5 text-white font-bold text-[17px] rounded ml-15 bg-green-500 cursor-pointer"
      >
        Login
      </button>

      <div className="flex flex-row w-[400px] ">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="ml-15 mt-5  "
        />
        <p className="mt-5 text-[12px] ml-2 mt-5 text-gray-500">
          By countinuing, I agree to the terms of Use & Privacy policy{" "}
        </p>
      </div>
      <div className="ml-15 mt-5 text-[13px]">
        <p>
          Create an account?
          <span className="text-green-500 ml-1 font-bold">click here</span>
        </p>
      </div>
    </div>
  );
};

export default Authform;
