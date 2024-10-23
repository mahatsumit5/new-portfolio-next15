"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi,",
      className: "md:text-[5rem]",
    },
    {
      text: "I",
      className: "md:text-[5rem]",
    },
    {
      text: "am",
      className: "md:text-[5rem]",
    },

    {
      text: "Sumit Mahat.",
      className: "md:text-[5rem] text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center   ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
