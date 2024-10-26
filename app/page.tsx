import { ThreeDCardDemo } from "@/components/Card";
import { TypewriterEffectSmoothDemo } from "@/components/Typewriter";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Timeline } from "@/components/ui/timeline";
import TopNavigation from "@/components/ui/TopNavigation";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { projects } from "@/constants/project";

import Header from "@/components/Header";
import { products } from "@/constants/constants";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ProjectParallax } from "@/components/ui/project-parallax";
import { getActiveProjects } from "@/database/actions/projects.actions";
import { IProject } from "@/database/models/project.model";

export default async function Home() {
  const data: IProject[] = await getActiveProjects();
  console.log(data);
  return (
    <div className=" h-full bg-background  flex flex-col  items-center justify-center w-full gap-5 overflow-x-hidden">
      <Header />
      <TopNavigation />
      <BackgroundBeamsWithCollision className="flex flex-col">
        <TypewriterEffectSmoothDemo />
        <div className="h-[10rem] flex items-center justify-center">
          <TextHoverEffect text="SOFTWARE" />
        </div>
        <div className="h-[10rem] flex items-center justify-center">
          <TextHoverEffect text="DEVELOPER" />
        </div>
      </BackgroundBeamsWithCollision>

      <MacbookScroll
        src="https://assets.aceternity.com/templates/startup-1.webp"
        title="About Me"
        showGradient
      />

      <TracingBeam className="px-2">
        <div className="flex flex-wrap gap-5 justify-center">
          {projects.map((item) => (
            <ThreeDCardDemo key={item.name} project={item} />
          ))}
        </div>
      </TracingBeam>
      {/* <Timeline data={data} /> */}
      <ProjectParallax products={data} />
      <ContactSection />

      <Footer />
    </div>
  );
}
