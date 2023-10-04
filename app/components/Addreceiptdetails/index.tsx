"use client"
import React, { useState } from "react";
import Link from "next/link";

const Addreceipts = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
    <div className="bg-cover bg-center h-screen">
      </div>
      <div className="w-1/2 bg-white sm:w-1/2 sm:p-24  mt-[-48%] ml-[25%]">
      <div className="title text-3xl font-semi bold text-[#0F0F0F] text-center">
      Add Receipt Details</div>
      <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-xl text-black font-black text-custom-color" htmlFor="receipt number">
                  Receipt Number
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center rounded-lg ">
                  <input
                    id="Receipt Number"
                    type="Receipt Number"
                    className="text-xl text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-xl text-black font-black text-custom-color" htmlFor="phone number">
                  Item
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center rounded-lg">
                  <input
                    id="Item"
                    type="Item"
                    className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-xl text-black font-black text-custom-color" htmlFor="quantity">
                  Quantity
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center rounded-lg">
                  <input
                    id="Quantity"
                    type="Quantity"
                    className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
                  />
                </div>
                </div>
                <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-xl text-black font-black text-custom-color" htmlFor="amount">
                  Amount
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center rounded-lg">
                  <input
                    id="Amount"
                    type="Amount"
                    className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
                  />
                </div>

              </div>
              <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-xl text-black font-black text-custom-color" htmlFor="date">
                  Date
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center rounded-lg">
                  <input
                    id="Date"
                    type="Date"
                    className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
                  />
                </div>

              </div>
              <div className="flex gap-10">
      <div className="justify-center mt-20 ">
      <button className="bg-[#47294C] text-white text-xl py-2 px-16 rounded-lg "
      >
        <Link href="/">
               <span className=" text-white font-bold p-2 text-purple ">Cancel</span>
         </Link>
              </button>
              
    </div>
    <div className="justify-center mt-[86px]">
      <button className="text-white ml-52 sm:w-1/2 text-xl  "
      >
        <Link href="/">
               <span className=" bg-[#C9ADC3] py-[10px] px-[80px] rounded-lg text-black font-bold ml-5 text-white">Add</span>
         </Link>
              </button>
              
    </div>
              
</div>
    </div>
    </div>
  );
};
export default Addreceipts;