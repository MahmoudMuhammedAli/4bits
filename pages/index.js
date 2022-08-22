import Hero from "../components/Hero/Hero";
import Projects from "../components/Sections/Projects";
import Team from "../components/Sections/Team";
import WhatDoing from "../components/WhatDoing/WhatDoing";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Team />
      <WhatDoing />
      <Projects />
    </div>
  );
}
