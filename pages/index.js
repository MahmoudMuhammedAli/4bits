import Hero from "../components/Hero/Hero";
import Projects from "../components/Sections/Projects";
import Team from "../components/Sections/Team";
import Testimonials from "../components/Sections/Testimonials";
import WhatDoing from "../components/WhatDoing/WhatDoing";
import Contact from "../components/ContactUs/Contact.js"

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
