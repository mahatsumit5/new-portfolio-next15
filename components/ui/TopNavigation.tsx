import React from "react";
import { FloatingDock } from "./floating-dock";
import { links } from "@/constants/constants";

const TopNavigation = () => {
  return (
    <FloatingDock
      items={links}
      desktopClassName="w-[500px] justify-center sticky top-0 bg-background z-50"
    />
  );
};

export default TopNavigation;
