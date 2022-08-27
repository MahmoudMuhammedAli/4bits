import Hero from "../components/Hero/Hero";
import Projects from "../components/Sections/Projects";
import Team from "../components/Sections/Team";
import WhatDoing from "../components/WhatDoing/WhatDoing";
import Testimonials from "../components/Sections/Testimonials";
import Contact from "../components/ContactUs/Contact";
export default function Home() {
  return (
    <div classNameName="overflow-x-hidden">
      <Hero />
      <Team />
      <WhatDoing />
      <Testimonials />
      <Projects />
      <Contact />
    </div>
  );
}
