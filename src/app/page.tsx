"use client";
import Display from "@/components/display-screen";
import Keypad from "@/components/keypad-section";
import { useCalculator } from "@/hooks/useCalculator";

export default function Home() {
  const { display, pendingOp, onButtonPress, historyIndex } = useCalculator();
  return (
    <main>
      <section className="flex justify-center items-center p-6 h-screen">
        <div className="rounded-lg bg-gray-700 flex flex-col p-3 w-full max-w-[600px] shadow-2xl">
          {/* Display Section */}
          <Display
            value={display}
            currentOp={pendingOp}
            historyIndex={historyIndex}
          />
          {/* Keypad Section */}
          <Keypad onKeyPress={onButtonPress} />
        </div>
      </section>
    </main>
  );
}
