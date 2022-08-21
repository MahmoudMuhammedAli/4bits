import React from "react";
import TeamCard from "../Cards/Cards";
import Lottie from "lottie-react";
import swipe from "../../assets/swipe.json";


import Bebo from "../../assets/img/Bebo.jpeg";
import Mahmoud from "../../assets/img/Mahmoud.jpeg";
import Mashoor from "../../assets/img/Mashoor.jpeg";
import Omar from "../../assets/img/Omar.png";

export default function Team() {
  const [hideMouseDetect, setMouseDetect] = React.useState(false);
    const dataMapping = [
      {
        name: "Mohamed Mashhor",
        pics:  Mashoor ,
        description:
          "A senior Computer Science student at Cairo University who's always been a tech enthusiast and a self-driven, passionate learner.",
      },
      {
        name: "Mahmoud Ali",
        pics:  Mahmoud ,
        description:
          "A senior Computer Science student at Cairo University who's always been a tech enthusiast and a self-driven, passionate learner.",
      },
      {
        name: "Mohamed Omar",
        pics:  Omar ,
        description:
          "A senior Computer Science student at Cairo University who's always been a tech enthusiast and a self-driven, passionate learner.",
      },
      {
        name: "Abdelrahman Mohamed",
        pics:  Bebo ,
        description:
          "A senior Computer Science student at Cairo University who's always been a tech enthusiast and a self-driven, passionate learner.",
      },
    ];
  return (
    <div className="absolute top-[8vh] py-5 w-screen">
      <div className="text-3xl font-bold text-gray-800 pl-5 my-5 flex justify-between">
        <div className="w-[85px] p-2 ">Our Team...</div>
        <div className="border-b-8 border-black w-[40vw] mb-4"></div>
      </div>
      <div className="flex items-center justify-start 2xl:justify-center">
        <div className="overflow-y-hidden flex flex-row overflow-x-auto items-center w-full py-10 scrollbar-thin scrollbar-thumb-prim">
          {dataMapping.map((item, index) => {
            return (
              <TeamCard
                key={index}
                imageSrc={item.pics}
                header={item.name}
                body={item.description}
              />
            );
          })}

          <div className="absolute bottom-[20%] h-44 w-[20vw] bg-prim z-[-100] animate-[animateBox_10s_ease-in-out_infinite_alternate] duration-100"></div>
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
        </div>
      </div>
    </div>
  );
}
