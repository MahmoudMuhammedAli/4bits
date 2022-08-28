import { useState, useEffect, useRef, useCallback } from "react";
import React from "react";
import TeamCard from "../Cards/TeamCards";
import Lottie from "lottie-react";
import swipe from "../../assets/swipe.json";
import Bebo from "../../assets/img/Bebo.jpeg";
import Mahmoud from "../../assets/img/Mahmoud.jpeg";
import Mashoor from "../../assets/img/Mashoor.jpeg";
import Omar from "../../assets/img/Omar.png";

import { Carousel } from "react-responsive-carousel";

import { useTheme } from "next-themes";

export default function Team(props) {
  const dataMapping = [
    {
      name: "Mohamed Mashhor",
      pics: Mashoor,
      description:
        "A senior Computer Science student at Cairo University who's always been a tech enthusiast and a self-driven, passionate learner.",
    },
    {
      name: "Mahmoud Ali",
      pics: Mahmoud,
      description:
        "A senior Computer Science student at Cairo University who's always been a tech enthusiast and a self-driven, passionate learner.",
    },
    {
      name: "Mohamed Omar",
      pics: Omar,
      description:
        "A senior Computer Science student at Cairo University who's always been a tech enthusiast and a self-driven, passionate learner.",
    },
    {
      name: "Abdelrahman Mohamed",
      pics: Bebo,
      description:
        "A senior Computer Science student at Cairo University who's always been a tech enthusiast and a self-driven, passionate learner.",
    },
  ];

  const [ hideMouseDetect, setMouseDetect ] = React.useState(false);
  const [ mounted, setMounted ] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className=" mt-24 w-screen ">
      <div className="text-3xl font-bold text-gray-800 my-5 flex justify-between">
        <div
          className={`w-[85px] my-2 mx-16 ${theme === "dark"
            ? "text-white"
            : "text-black"}  md:text-4xl font-extrabold `}
        >
          Our Team...
        </div>
        <div className="border-b-8 border-black w-[50vw] mb-4" />
      </div>

      <div className="overflow-y-hidden flex flex-row items-center md:justify-center w-full py-10 md:flex-wrap gap-y-10 overflow-x-auto relative">
        {dataMapping.map((item, index) => {
          return (
            <TeamCard
              direction="left"
              key={index}
              name={item.name}
              imageSrc={item.pics}
              body={item.description}
            />
          );
        })}
        <div
          className={`absolute flex justify-center items-center w-full h-[100%] sm:hidden ${hideMouseDetect &&
            "hidden"}`}
          onTouchStart={() => {
            setMouseDetect(!hideMouseDetect);
          }}
        >
          <Lottie
            animationData={swipe}
            loop={true}
            className="-z-100 w-80 rounded-3xl"
          />
        </div>
        <div className="absolute  h-44 left-0 bottom-0 top-0 w-[20vw] bg-prim z-[-1000] animate-[animateBoxTeams_8s_ease-in-out_infinite_alternate]" />
      </div>
    </div>
  );
}
