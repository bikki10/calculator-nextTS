"use client";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { useState } from "react";
import { Input } from "./ui/input";

const digital7 = localFont({
  src: "../../public/fonts/digital-7.ttf",
  weight: "100",
  display: "swap",
});

// @ts-ignore
const Display = ({ value, currentOp, historyIndex }) => {
  const [input, setInput] = useState(0);
  const [operand, setOperand] = useState(0);
  const safeValue = value === "" ? "0" : value;

  // const handleInputChange = (e) => {
  //   e.preventDefault();
  //   const val = e.target.value;
  //   setInput(val);
  // };

  // const handleOperand = (e) => {
  //   const val = e.target.value;
  //   setOperand(val);
  // };

  const indexLabel =
    historyIndex === null ? "00" : String(historyIndex + 1).padStart(2, "0");

  return (
    <div className="rounded-t-lg p-2 px-4 bg-gray-900 text-white">
      {/* Header */}
      <div className="flex justify-between py-4">
        <p className="font-bold text-3xl flex items-end">deli</p>
        <div className="flex gap-2">
          <div className="flex gap-2 items-end">
            <p className="font-semibold leading-4 tracking-tighter">1654C</p>
            <div>
              <p className="leading-0 tracking-wide text-xl font-bold">
                12<span className="text-xs">DIGITS</span>
              </p>
              <p className="text-xs font-semibold -tracking-widest">
                TWO POWER
              </p>
            </div>
          </div>
          <div className="flex items-center ">
            <p className="h-9 w-8 rounded-bl-[3px] rounded-tl-[3px] bg-[#474747] border-r-2 border-[#565656]"></p>
            <p className="h-9 w-8 bg-[#474747] border-r-2 border-[#565656]"></p>
            <p className="h-9 w-8 bg-[#474747] border-r-2 border-[#565656]"></p>
            <p className="h-9 w-8 bg-[#474747] rounded-tr-[3px] rounded-br-[3px]"></p>
          </div>
        </div>
      </div>

      {/* Actual Display */}

      <div className="bg-[#DADADA] rounded-lg p-2 mb-2">
        <div className="bg-white p-1">
          <div
            className={cn(
              digital7.className,
              "flex items-center gap-1 w-full font-digital bg-[#9ea893] text-gray-800 px-2 font-extrabold"
            )}
          >
            <div className="w-[5%] flex flex-col justify-center">
              <p className="text-3xl text-start">{indexLabel}</p>
              {currentOp ? (
                <p className="text-3xl text-center">{currentOp}</p>
              ) : (
                // <Input
                //   className="text-3xl text-center"
                //   onKeyDown={handleOperand}
                // >
                //   {operand}
                // </Input>
                <p className="text-3xl text-center opacity-0"></p>
              )}
            </div>
            <p className="w-[95%] text-end sm:text-4xl md:text-7xl overflow-hidden">
              {safeValue}
            </p>
            {/* <Input
              type="number"
              value={input}
              onChange={handleInputChange}
              className="border-none w-[95%] h-16 text-end sm:text-4xl md:text-7xl overflow-clip "
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
