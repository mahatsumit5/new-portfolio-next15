import { ReactNode } from "react";
import {
  IconHome,
  IconBook,
  IconMessage2,
  IconUserCheck,
  IconChecklist,
  IconGavel,
} from "@tabler/icons-react";
type link = {
  title: string;
  href: string;
  icon: ReactNode;
};
export const links: link[] = [
  {
    href: "#home",
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    href: "#about",
    title: "About",
    icon: (
      <IconUserCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    href: "#skills",
    title: "Skills",
    icon: (
      <IconGavel className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    href: "#education",
    title: "Education",
    icon: (
      <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    href: "#projects",
    title: "Projects",
    icon: (
      <IconChecklist className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    href: "#contact",
    title: "Contact",
    icon: (
      <IconMessage2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
];
