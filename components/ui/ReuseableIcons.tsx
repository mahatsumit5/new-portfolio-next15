import Image from "next/image";
import React, { FC } from "react";
type props = {
  src: string;
  alt: string;
  height: number;
  width: number;
  link: string;
};
const ReuseableIcons: FC<props> = ({ link, alt, ...rest }) => {
  return (
    <a href={link} target="_blank">
      <Image alt={alt} {...rest} />
    </a>
  );
};

export default ReuseableIcons;
