import React, { FC } from "react";

type props = { text: string; size?: string };
const CustomText: FC<props> = ({ text, size = "text-4xl" }) => {
  return (
    <p
      className={`text-transparent  bg-clip-text bg-gradient-to-r from-primary to-secondary ${size} font-bold   [text-shadow:0_0_rgba(0,0,0,0.1)]`}
    >
      {text}
    </p>
  );
};

export default CustomText;
