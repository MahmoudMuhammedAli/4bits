import Hero from "../components/Hero/Hero";
import Projects from "../components/Sections/Projects";
import Team from "../components/Sections/Team";
import WhatDoing from "../components/WhatDoing/WhatDoing";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center justify-center py-40">
        <Hero />
      </div>
      <Team />
      <Projects />
      <WhatDoing />
    </div>
  );
}
