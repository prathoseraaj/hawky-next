import React from "react";

const page = () => {
  return (
    <div className="h-[70vh] w-[500px] bg-white-100 flex flex-col  bg-white shadow-sm rounded-[20px]">
      <div className="items-center">
        <img
          src="/logo.jpeg"
          alt="logo"
          height={500}
          width={500}
          className="mt-5"
        />{" "}
      </div>
      <div className="flex flex-col ml-15 mt-10">
        <label htmlFor="" className="font-bold text-[20px] ">
          Email
        </label>
        <input type="email" className="w-[380px] h-[30px] border rounded  " />

        <label htmlFor="" className="font-bold text-[20px] ">
          Password
        </label>
        <input type="text" className="w-[380px] h-[30px] border rounded  " />
      </div>{" "}
    </div>
  );
};

export default page;
