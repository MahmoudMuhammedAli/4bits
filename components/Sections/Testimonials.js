import React from "react";
import Lottie from "lottie-react";
import swipe from "../../assets/swipe.json";
import TestimonialCard from "../Cards/TestimonialCard";
import { Carousel } from "flowbite-react";

export default function Testimonials(props) {
  const [ hideMouseDetect, setMouseDetect ] = React.useState(false);

  const testimonials = {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg",
    ownerOfComment: "Pelican Steve",
    companyName: "LIttleSnippets.net",
    comment:
      "Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes Probably so we can think twice.",
  };
  return (
    <div className="top-[8vh] w-screen ">
      <div className="text-3xl font-bold text-gray-800 my-5 flex justify-start">
        <div className="border-b-8 border-sec w-[50vw] mb-4" />
        <div className="w-[200px] my-2 mx-16 text-sec">What Clinets Says</div>
      </div>
      <div className="flex items-center justify-start 2xl:justify-center ">
        <div className="overflow-y-hidden flex flex-row items-center w-full py-10 overflow-x-hidden">
          <Carousel slide slideInterval={2000}>
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
            <TestimonialCard {...testimonials} />
          </Carousel>
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
          <div className="absolute mt-[-200px] h-44 left-0 w-[20vw] bg-sec z-[-1000] animate-[animateBoxProjects_8s_ease-in-out_infinite_alternate]" />
        </div>
      </div>
    </div>
  );
}
