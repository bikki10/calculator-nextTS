"use client";

import { useState } from "react";

export function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [operand, setOperand] = useState<number | null>(null);
  const [pendingOp, setPendingOp] = useState<null | "+" | "-" | "X" | "÷">(
    null
  );
  const [isNewEntry, setIsNewEntry] = useState(true);

  const [history, setHistory] = useState<{ value: string }[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [shadowDisplay, setShadowDisplay] = useState<string | null>(null);

  const MAX_DIGITS = 12;

  const clampToDigits = (str: string) => {
    if (str.replace("-", "").length > MAX_DIGITS) {
      return str.slice(0, str.startsWith("-") ? MAX_DIGITS + 1 : MAX_DIGITS);
    }
    return str;
  };

  const pushHistoryEntry = (value: string) => {
    setHistory((prev) => [...prev, { value }]);
  };

  const handleNumber = (btn: any) => {
    const val = btn.value ?? btn.label;

    setDisplay((prev) => {
      const current = prev;

      if (isNewEntry || current === "0") {
        setIsNewEntry(false);
        if (val === "00") return "0";
        if (val === ".") return "0.";
        return val;
      }

      if (val === "." && current.includes(".")) return current;

      const next = current + val;
      return clampToDigits(next);
    });
  };

  const compute = (a: number, b: number, op: string) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "X":
        return a * b;
      case "÷":
        return b === 0 ? NaN : a / b;
      default:
        return b;
    }
  };

  const handleOperator = (op: "+" | "-" | "X" | "÷") => {
    const current = parseFloat(display);

    if (!isNewEntry) {
      pushHistoryEntry(display);
    }

    if (operand === null) {
      setOperand(current);
    } else if (!isNewEntry && pendingOp) {
      const result = compute(operand, current, pendingOp);
      setOperand(result);
      setDisplay(String(result));
    }

    setPendingOp(op);
    setIsNewEntry(true);
  };

  const handleCheckUp = () => {
    if (history.length === 0) return;

    setHistoryIndex((prev) => {
      let nextIndex: number;

      if (prev === null) {
        setShadowDisplay(display);
        nextIndex = history.length - 1;
      } else {
        nextIndex = Math.max(prev - 1, 0);
      }

      const entry = history[nextIndex];
      setDisplay(entry.value);

      return nextIndex;
    });
  };

  const handleCheckDown = () => {
    if (history.length === 0) return;

    setHistoryIndex((prev) => {
      let nextIndex: number;

      if (prev === null) {
        setShadowDisplay(display);
        nextIndex = 0;
      } else {
        nextIndex = Math.min(prev + 1, history.length - 1);
      }

      const entry = history[nextIndex];
      setDisplay(entry.value);

      return nextIndex;
    });
  };

  const handleCorrectKey = () => {
    setDisplay((prev) => {
      if (isNewEntry) {
        return "0";
      }

      const withoutSign = prev.startsWith("-") ? prev.slice(1) : prev;

      if (withoutSign.length <= 1) {
        return "0";
      }

      const nextCore = withoutSign.slice(0, -1);
      const next = prev.startsWith("-") ? "-" + nextCore : nextCore;

      return next === "-" ? "0" : next;
    });
  };

  const handleEquals = () => {
    if (pendingOp == null || operand == null) return;
    const current = parseFloat(display);
    const result = compute(operand, current, pendingOp);

    setDisplay(String(result));
    setOperand(null);
    setPendingOp(null);
    setIsNewEntry(true);
    pushHistoryEntry(String(result));
  };

  const handleClearAll = () => {
    setDisplay("0");
    setOperand(null);
    setPendingOp(null);
    setIsNewEntry(true);

    setHistory([]);
    setHistoryIndex(null);
    setShadowDisplay(null);
  };

  const handleClearEntry = () => {
    setDisplay("0");
    setIsNewEntry(true);
  };

  const handlePlusMinus = () => {
    setDisplay((prev) => {
      if (prev === "0") return prev;
      return prev.startsWith("-") ? prev.slice(1) : "-" + prev;
    });
  };

  const handlePercent = () => {
    const current = parseFloat(display);
    const result = current / 100;
    setDisplay(String(result));
    setIsNewEntry(true);
  };

  const handleSqrt = () => {
    const current = parseFloat(display);
    if (current < 0) return;
    const result = Math.sqrt(current);
    setDisplay(String(result));
    setIsNewEntry(true);
  };

  const onButtonPress = (btn: any) => {
    const { type, label, action } = btn;

    if (type !== "check" && historyIndex !== null) {
      setHistoryIndex(null);
      if (shadowDisplay !== null) {
        setDisplay(shadowDisplay);
        setShadowDisplay(null);
      }
    }

    if (type === "number") {
      handleNumber(btn);
      return;
    }

    if (type === "func_calc") {
      if (label === "=" || action === "total") {
        handleEquals();
      } else if (["+", "-", "X", "÷"].includes(label)) {
        handleOperator(label as "+" | "-" | "X" | "÷");
      } else if (label === "%") {
        handlePercent();
      } else if (label === "√") {
        handleSqrt();
      }
      return;
    }

    if (type === "reset_all") {
      if (label === "ON/AC") {
        handleClearAll();
      } else if (label === "CE" || action === "clear") {
        handleClearEntry();
      }
      return;
    }

    if (label === "+/-") {
      handlePlusMinus();
      return;
    }

    if (type === "check") {
      if (action === "CHECK_UP") handleCheckUp();
      if (action === "CHECK_DOWN") handleCheckDown();
      return;
    }

    if (type === "others") {
      if (action === "CORRECT" || label.startsWith("CORRECT")) {
        handleCorrectKey();
        return;
      }
    }
  };

  return {
    display,
    pendingOp,
    onButtonPress,
    historyIndex,
    historyLength: history.length,
  };
}
