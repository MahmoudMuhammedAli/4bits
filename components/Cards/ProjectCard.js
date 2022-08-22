import React from "react";
import testPics from "../../assets/img/test.jpg";

export default function ProjectCard(props) {
  return (
    <div
      className="h-[450px] bg-white flex justify-center items-stretch grow flex-shrink-0 mx-7 min-w-[300px]
      bg-[url(https://placeimg.com/1000/800/arch)] bg-center w-[70vw] transition-transform duration-200 ease-in-out
      sm:w-full md:w-6/12 lg:w-4/12 xl:w-2/12 2xl:w-1/12 max-h rounded-2xl hover:scale-[1.05]"
      style={{ boxShadow: "2px 2px 15px #000" }}
    >
      <div className="rounded-2xl h-[100%] w-[100%]" style={{background: "rgba(0,0,0,0.4)"}}>
        <div className="flex flex-col items-center p-4">
          <h1 className="text-2xl sm:text-3xl text-white font-bold my-8">
            {props.name}
          </h1>
          <p className="p-7 text-xl font-medium text-gray-300">{props.body}</p>
        </div>
      </div>
    </div>
  );
}
