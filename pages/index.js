import Head from "next/head";
import Image from "next/image";
import Team from "../components/Sections/Team";
import Projects from "../components/Sections/Projects";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Team />
      <Projects />
    </div>
  );
}
