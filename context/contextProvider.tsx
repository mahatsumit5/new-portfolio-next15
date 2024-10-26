import { createContext, FC, ReactNode, useContext } from "react";

const Projects = createContext<null>(null);

export const useActiveProjects = () => useContext(Projects);
type props = { children: ReactNode; value: any };
export const ProjectProvider: FC<props> = ({ children, value }) => {
  return <Projects.Provider value={value}>{children}</Projects.Provider>;
};
