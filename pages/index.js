import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Team from "../components/Team/Team";
import WhatDoing from "../components/WhatDoing/WhatDoing";
import Hero from "../components/Hero/Hero";
export default function Home() {
  return (
    <div>
      <WhatDoing/>
      <Hero/>     
    </div>
  )
}
