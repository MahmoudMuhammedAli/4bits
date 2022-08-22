import React from "react";
import ProjectCard from "../Cards/ProjectCard"
import Lottie from "lottie-react";
import swipe from "../../assets/swipe.json";

import Bebo from "../../assets/img/Bebo.jpeg";
import Mahmoud from "../../assets/img/Mahmoud.jpeg";
import Mashoor from "../../assets/img/Mashoor.jpeg";
import Omar from "../../assets/img/Omar.png";

export default function Project(props) {
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
  const [hideMouseDetect, setMouseDetect] = React.useState(false);
  return (
    <div className="top-[8vh] w-screen">
      <div className="text-3xl font-bold text-gray-800 my-5 flex justify-between">
        <div className="w-[85px] my-2 mx-16 md:text-4xl font-extrabold  text-prim">
          Our Projects...
        </div>
        <div className="border-b-8 border-prim w-[50vw] mb-4" />
      </div>
      <div className="flex items-center justify-start 2xl:justify-center ">
        <div className="overflow-y-hidden flex flex-row items-center w-full py-10 overflow-x-hidden">
          {dataMapping.map((item, index) => {
            return (
              <ProjectCard
                direction="left"
                key={index}
                name={item.name}
                imageSrc={item.pics}
                body={item.description}
              />
            );
          })}
          <div
            className={`absolute flex justify-center items-center w-full h-[100%] sm:hidden ${
              hideMouseDetect && "hidden"
            }`}
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
          <div className="absolute mt-[-200px] h-44 left-0 w-[20vw] bg-prim z-[-1000] animate-[animateBoxProjects_8s_ease-in-out_infinite_alternate]"></div>
        </div>
      </div>
    </div>
  );
}
