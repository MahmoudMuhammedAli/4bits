import Hero from "../components/Hero/Hero";
import Projects from "../components/Sections/Projects";
import Team from "../components/Sections/Team";
import Testimonials from "../components/Sections/Testimonials";
import WhatDoing from "../components/WhatDoing/WhatDoing";
import Contact from "../components/ContactUs/Contact.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "nav",
        "hero",
        "common",
        "footer",
      ])),
      // Will be passed to the page component as props
    },
  };
}
