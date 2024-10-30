"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi,",
      className: "text-[2rem] md:text-[5rem]",
    },
    {
      text: "I",
      className: "text-[2rem] md:text-[5rem]",
    },
    {
      text: "am",
      className: "text-[2rem] md:text-[5rem]",
    },

    {
      text: "Sumit Mahat.",
      className:
        "text-[2rem] md:text-[5rem] text-transparent  bg-clip-text bg-gradient-to-r from-primary to-secondary    [text-shadow:0_0_rgba(0,0,0,0.1)]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center   ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
