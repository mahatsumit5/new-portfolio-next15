"use client";
import React from "react";
import ReuseableIcons from "./ui/ReuseableIcons";
import { useTheme } from "next-themes";
import github from "../public/github.svg";
import instagram from "../public/instagram.svg";
import linkedin from "../public/linkedin.svg";
import CustomText from "./ui/CustomText";
const Header = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className="flex justify-between w-full border-b p-4  sticky top-0 bg-background z-50">
      <CustomText text="mahatsumit5@gmail.com" size="text-md" />{" "}
      <div className="flex gap-4 items-center justify-center">
        <ReuseableIcons
          alt="github"
          height={25}
          width={25}
          src={github}
          link="https://github.com/mahatsumit5"
        />
        <ReuseableIcons
          alt="instagram"
          height={25}
          width={25}
          src={instagram}
          link="https://www.linkedin.com/in/sumit-mahat-9421381a3/"
        />
        <ReuseableIcons
          alt="linkedin"
          height={25}
          width={25}
          src={linkedin}
          link="https://www.linkedin.com/in/sumit-mahat-9421381a3/"
        />
        <button
          onClick={() => {
            if (theme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
          className="bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-all rounded-full px-3 py-1 shadow-lg "
        >
          {theme}
        </button>
      </div>
    </header>
  );
};

export default Header;
