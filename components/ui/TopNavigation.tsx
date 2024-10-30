"use client";
import React from "react";
import { FloatingDock } from "./floating-dock";
import { links } from "@/constants/constants";

const TopNavigation = () => {
  return (
    <FloatingDock items={links} desktopClassName="w-[500px] justify-center " />
  );
};

export default TopNavigation;
