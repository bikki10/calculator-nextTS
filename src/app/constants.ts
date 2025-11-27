export enum Ecalc_button_type {
  CHECK = "check",
  NUMBER = "number",
  FUNC_CALC = "func_calc",
  RESET_ALL = "reset_all",
  OTHERS = "others",
}

export interface Icalc_button {
  label: string;
  type: Ecalc_button_type;
  action: string;
  value?: string;
  grid: string;
}

export const Buttons_Data: Icalc_button[] = [
  // TOP ROW Buttons
  {
    label: "🔺 CHECK",
    type: Ecalc_button_type.CHECK,
    action: "CHECK_UP",
    grid: "col-start-3 row-start-1",
  },
  {
    label: "🔻 CHECK",
    type: Ecalc_button_type.CHECK,
    action: "CHECK_DOWN",
    grid: "col-start-4 row-start-1",
  },
  {
    label: "AUTO REPLAY",
    type: Ecalc_button_type.OTHERS,
    action: "CHECK_UP",
    grid: "col-start-5 row-start-1",
  },
  {
    label: "CORRECT 00-->0",
    type: Ecalc_button_type.OTHERS,
    action: "CHECK_UP",
    grid: "col-start-6 row-start-1",
  },

  // 1ST ROW

  {
    label: "7",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "7",
    grid: "col-start-2 row-start-2",
  },
  {
    label: "8",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "8",
    grid: "col-start-3 row-start-2",
  },
  {
    label: "9",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "9",
    grid: "col-start-4 row-start-2",
  },
  {
    label: "%",
    type: Ecalc_button_type.FUNC_CALC,
    action: "",
    grid: "col-start-5 row-start-2",
  },
  {
    label: "√",
    type: Ecalc_button_type.FUNC_CALC,
    action: "",
    grid: "col-start-6 row-start-2",
  },

  //   2nd ROW

  {
    label: "+/-",
    type: Ecalc_button_type.FUNC_CALC,
    action: "",
    grid: "col-start-1 row-start-3",
  },
  {
    label: "4",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "4",
    grid: "col-start-2 row-start-3",
  },
  {
    label: "5",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "5",
    grid: "col-start-3 row-start-3",
  },
  {
    label: "6",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "6",
    grid: "col-start-4 row-start-3",
  },
  {
    label: "X",
    type: Ecalc_button_type.FUNC_CALC,
    action: "",
    grid: "col-start-5 row-start-3",
  },
  {
    label: "÷",
    type: Ecalc_button_type.FUNC_CALC,
    action: "",
    grid: "col-start-6 row-start-3",
  },

  //   3RD ROW

  {
    label: "ON/AC",
    type: Ecalc_button_type.RESET_ALL,
    action: "",
    grid: "col-start-1 row-start-4",
  },
  {
    label: "1",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "1",
    grid: "col-start-2 row-start-4",
  },
  {
    label: "2",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "2",
    grid: "col-start-3 row-start-4",
  },
  {
    label: "3",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "3",
    grid: "col-start-4 row-start-4",
  },
  {
    label: "+",
    type: Ecalc_button_type.FUNC_CALC,
    action: "",
    grid: "col-start-5 row-start-4 row-span-2 h-[calc(9rem+0.5rem)]",
  },
  {
    label: "-",
    type: Ecalc_button_type.FUNC_CALC,
    action: "",
    grid: "col-start-6 row-start-4",
  },

  //   4th ROW

  {
    label: "CE",
    type: Ecalc_button_type.RESET_ALL,
    action: "clear",
    grid: "col-start-1 row-start-5",
  },
  {
    label: "0",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "0",
    grid: "col-start-2 row-start-5",
  },
  {
    label: "00",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: "00",
    grid: "col-start-3 row-start-5",
  },
  {
    label: ".",
    type: Ecalc_button_type.NUMBER,
    action: "",
    value: ".",
    grid: "col-start-4 row-start-5",
  },
  {
    label: "=",
    type: Ecalc_button_type.FUNC_CALC,
    action: "total",
    grid: "col-start-6 row-start-5",
  },
];
