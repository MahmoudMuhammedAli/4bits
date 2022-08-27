// import Hero from "../components/Hero/Hero";
// import Projects from "../components/Sections/Projects";
// import Team from "../components/Sections/Team";
import WhatDoing from "../components/WhatDoing/WhatDoing";

// import Testimonials from "../components/Sections/Testimonials";
import dynamic from "next/dynamic";
const Team = dynamic(()=>import('../components/Sections/Team')) ;
const Projects = dynamic(()=>import('../components/Sections/Projects')) ;
const Hero = dynamic(()=>import('../components/Hero/Hero')) ;
const Testimonials = dynamic(()=>import('../components/Sections/Testimonials')) ;

export default function Home() {
  return (
    // <div classNameName="overflow-x-hidden">
    //   <Hero />
    //   <Team />
    //   <Testimonials />
    //   <Projects />
    //   <WhatDoing />
    // </div>
    <>
      <Contact />
    </>
  );
}
