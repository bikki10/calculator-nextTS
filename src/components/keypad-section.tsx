"use client";
import { Button } from "./ui/button";
import { Buttons_Data, Ecalc_button_type } from "@/app/constants";

// TODO: Kina error aako hola?
const Keypad = ({ onKeyPress }) => {
  return (
    <div className="bg-linear-to-r from-[#c5c5c5] to-[#b9b9b9] rounded-b-lg py-4 px-8 grid grid-cols-6 gap-4 text-center">
      {Buttons_Data.map((btn, index) => {
        let btnClass = "bg-black";
        switch (btn.type) {
          case Ecalc_button_type.NUMBER:
            btnClass = "text-white bg-gray-600 hover:bg-gray-700 text-2xl";
            break;
          case Ecalc_button_type.RESET_ALL:
            btnClass = "text-white bg-pink-600 hover:bg-pink-700";
            break;
          case Ecalc_button_type.CHECK:
            btnClass = "text-yellow-500";
            break;
          case Ecalc_button_type.OTHERS:
            btnClass = "text-yellow-500 text-xs";
            break;
          case Ecalc_button_type.FUNC_CALC:
            btnClass = "text-xl";
            break;
        }

        return (
          <Button
            key={index}
            onClick={() => onKeyPress?.(btn)}
            className={`font-bold ${btnClass} ${btn.grid} text-wrap text-center p-8 border-black border-b-4 shadow-2xl transition-transform cursor-pointer active:translate-y-0.5 duration-75`}
          >
            <p className="text-wrap flex flex-col ">
              <span>{btn.label}</span>
            </p>
          </Button>
        );
      })}
    </div>
  );
};

export default Keypad;
